<?php

namespace App\Http\Controllers\Api\Page;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
/*models*/
use App\Models\Page\SoPageCategory;

class PageCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(SoPageCategory::orderBy('name', 'ASC')->paginate(25), 200);
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
            SoPageCategory::create($request->all());
            return response()->json(['message' => 'Successfuly create data'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Page\SoPageCategory  $soPageCategory
     * @return \Illuminate\Http\Response
     */
    public function show($soPageCategory)
    {
         return response()->json(SoPageCategory::where('id', $soPageCategory)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Page\SoPageCategory  $soPageCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $soPageCategory)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:3|max:191'
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            SoPageCategory::where('id', $soPageCategory)->update($request->all());
            return response()->json(['message' => 'Successfuly update data'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Page\SoPageCategory  $soPageCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy($soPageCategory)
    {
        SoPageCategory::where('id', $soPageCategory)->delete();
        return response()->json(['message' => 'Successfuly delete data'], 200);
    }
}
