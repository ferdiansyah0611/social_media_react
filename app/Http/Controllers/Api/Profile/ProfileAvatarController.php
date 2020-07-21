<?php

namespace App\Http\Controllers\Api\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use File;
/*models*/
use App\Models\Profile\SoProfileAvatar;

class ProfileAvatarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(App\User::find(request()->user()->id)->withProfileAvatar()->paginate(25), 200);
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
            'avatar' => 'required|file|image|mimes:jpg,png,jpeg|max:2000'
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
                $data['avatar'] = $name;
            }
            SoProfileAvatar::create($data);
            return response()->json(['message' => 'Successfuly create data'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Profile\SoProfileAvatar  $soProfileAvatar
     * @return \Illuminate\Http\Response
     */
    public function show($soProfileAvatar)
    {
        return response()->json(SoProfileAvatar::where('id', $soProfileAvatar)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Profile\SoProfileAvatar  $soProfileAvatar
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $soProfileAvatar)
    {
        $validator = Validator::make($request->all(), [
            'avatar' => 'required|file|image|mimes:jpg,png,jpeg|max:2000'
        ]);
        if($validator->fails()) {
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            $model = SoProfileAvatar::where('id', $soProfileAvatar);
            if($request->file('cover')){
                $file = $request->file('cover');
                $name = $file->getClientOriginalName();
                $file->move(storage_path('app/public/asset'), $name);
                File::delete(storage_path('app/public/asset/' . $model->get()->pluck('avatar')[0]));
                $data['avatar'] = $name;
            }
            $model->update($data);
            return response()->json(['message' => 'Successfuly update data'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Profile\SoProfileAvatar  $soProfileAvatar
     * @return \Illuminate\Http\Response
     */
    public function destroy($soProfileAvatar)
    {
        $model = SoProfileAvatar::where('id', $soProfileAvatar);
        File::delete(storage_path('app/public/asset/' . $model->get()->pluck('avatar')[0]));
        $model->delete();
        return response()->json(['message' => 'Successfuly delete data'], 200);
    }
}
