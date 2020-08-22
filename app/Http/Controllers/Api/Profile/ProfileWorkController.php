<?php

namespace App\Http\Controllers\Api\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
/*models*/
use App\Models\Profile\SoProfileWork;
use App\User;

class ProfileWorkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(User::find(request()->user()->id)->withProfileWork()->paginate(25), 200);
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
            'so_page_data_id' => 'required|numeric',
            'job' => 'required|string|min:3|max:191',
            'location' => 'required|string|max:191',
            'description' => 'required|string|min:3|max:5000',
            'from' => 'required|date',
            'to' => 'required|date',
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            $data['user_id'] = request()->user()->id;
            SoProfileWork::create($data);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Profile\SoProfileWork  $soProfileWork
     * @return \Illuminate\Http\Response
     */
    public function show($soProfileWork)
    {
        return response()->json(SoProfileWork::where('id', $soProfileWork)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Profile\SoProfileWork  $soProfileWork
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $soProfileWork)
    {
        $validator = Validator::make($request->all(), [
            'so_page_data_id' => 'required|numeric',
            'job' => 'required|string|min:3|max:191',
            'location' => 'required|string|max:191',
            'description' => 'required|string|min:3|max:5000',
            'from' => 'required|date',
            'to' => 'required|date',
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            SoProfileWork::where('id', $soProfileWork)->update($data);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Profile\SoProfileWork  $soProfileWork
     * @return \Illuminate\Http\Response
     */
    public function destroy($soProfileWork)
    {
        SoProfileWork::where('id', $soProfileWork)->delete();
        return response()->json(['message' => 'Successfuly delete data'], 200);
    }
}
