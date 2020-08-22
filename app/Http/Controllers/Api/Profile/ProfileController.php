<?php

namespace App\Http\Controllers\Api\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use File;
/*models*/
use App\Models\Profile\SoProfile;
use App\User;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(User::find(request()->user()->id)->withProfile()->paginate(25), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'cover' => 'required|file|image|mimes:jpg,png,jpeg|max:10000',
            'bio' => 'required|string|min:3|max:5000',
            'relationship' => 'required|string|min:3|max:20',
            'hometown' => 'required|string|min:3|max:191'
        ]);
        if($validator->fails()) {
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            $data['user_id'] = request()->user()->id;
            if($request->file('cover')){
                $file = $request->file('cover');
                $name = $file->getClientOriginalName();
                $file->move(storage_path('app/public/asset'), $name);
                $data['cover'] = $name;
            }
            SoProfile::create($data);
            return response()->json(['message' => 'Successfuly create data'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Profile\SoProfile  $soProfile
     * @return \Illuminate\Http\Response
     */
    public function show($soProfile)
    {
        return response()->json(SoProfile::where('id', $soProfile)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Profile\SoProfile  $soProfile
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $soProfile)
    {
        $validator = Validator::make($request->all(), [
            'bio' => 'required|string|min:3|max:10000',
            'relationship' => 'required|string|min:3|max:20',
            'hometown' => 'required|string|min:3|max:191'
        ]);
        if($validator->fails()) {
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            $model = SoProfile::where('id', $soProfile);
            if($request->file('cover')){
                $file = $request->file('cover');
                $name = $file->getClientOriginalName();
                $file->move(storage_path('app/public/asset'), $name);
                File::delete(storage_path('app/public/asset/' . $model->get()->pluck('bio')[0]));
                $data['cover'] = $name;
            }
            $model->update($data);
            return response()->json(['message' => 'Successfuly update data'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Profile\SoProfile  $soProfile
     * @return \Illuminate\Http\Response
     */
    public function destroy($soProfile)
    {
        $model = SoProfile::where('id', $soProfile);
        File::delete(storage_path('app/public/asset/' . $model->get()->pluck('bio')[0]));
        $model->delete();
        return response()->json(['message' => 'Successfuly delete data'], 200);
    }
}
