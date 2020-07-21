<?php

namespace App\Http\Controllers\Api\Group;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
/*models*/
use App\Models\Group\SoGroupCategory;

class GroupCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(SoGroupCategory::orderBy('name', 'ASC')->paginate(25), 200);
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
            'name' => 'required|string|min:3|max:191'
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            SoGroupCategory::create($request->all());
            return response()->json(['message' => 'Successfuly create data'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Group\SoGroupCategory  $soGroupCategory
     * @return \Illuminate\Http\Response
     */
    public function show($soGroupCategory)
    {
        return response()->json(SoGroupCategory::where('id', $soGroupCategory)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Group\SoGroupCategory  $soGroupCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $soGroupCategory)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:3|max:191'
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            SoGroupCategory::where('id', $soGroupCategory)->update($request->all());
            return response()->json(['message' => 'Successfuly update data'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Group\SoGroupCategory  $soGroupCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy($soGroupCategory)
    {
        SoGroupCategory::where('id', $soGroupCategory)->delete();
        return response()->json(['message' => 'Successfuly delete data'], 200);
    }
}
