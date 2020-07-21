<?php

namespace App\Http\Controllers\Api\Group;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
/*models*/
use App\Models\Group\SoGroupData;

class GroupDataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(SoGroupData::latest()->paginate(25), 200);
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
            'so_group_category_id' => 'required|numeric',
            'privacy' => 'required|string|min:3|max:100',
            'about' => 'required|string|min:3|max:100',
            'location' => 'required|string|min:3|max:100'
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            SoGroupData::create($request->all());
            return response()->json(['message' => 'Successfuly create data'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Group\SoGroupData  $soGroupData
     * @return \Illuminate\Http\Response
     */
    public function show($soGroupData)
    {
        return response()->json(SoGroupData::where('id', $soGroupData)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Group\SoGroupData  $soGroupData
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $soGroupData)
    {
        $validator = Validator::make($request->all(), [
            'so_group_category_id' => 'required|numeric',
            'privacy' => 'required|string|min:3|max:100',
            'about' => 'required|string|min:3|max:100',
            'location' => 'required|string|min:3|max:100'
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            SoGroupData::create($request->all());
            return response()->json(['message' => 'Successfuly create data'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Group\SoGroupData  $soGroupData
     * @return \Illuminate\Http\Response
     */
    public function destroy($soGroupData)
    {
        SoGroupData::where('id', $soGroupData)->delete();
        return response()->json(['message' => 'Successfuly delete data'], 200);
    }
}
