<?php

namespace App\Http\Controllers\Api\Page;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
/*models*/
use App\Models\Page\SoPageData;
use App\User;

class PageDataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(User::find(request()->user()->id)->withPageData()->paginate(25), 200);
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
            'so_page_category_id' => 'required|numeric',
            'name' => 'required|string|min:3|max:191',
            'title' => 'required|string|min:3|max:191',
            'phone' => 'required|numeric',
            'email' => 'required|string',
            'website' => 'required|string|min:5|max:191',
            'description' => 'required|string|min:5|max:5000',
            'location' => 'required|string|min:5|max:191',
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            $data['user_id'] = request()->user()->id;
            SoPageData::create($data);
            return response()->json(['message' => 'Successfuly create data'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Page\SoPageData  $soPageData
     * @return \Illuminate\Http\Response
     */
    public function show($soPageData)
    {
        return response()->json(SoPageData::where('id', $soPageData)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Page\SoPageData  $soPageData
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $soPageData)
    {
        $validator = Validator::make($request->all(), [
            'so_page_category_id' => 'required|numeric',
            'name' => 'required|string|min:3|max:191',
            'title' => 'required|string|min:3|max:191',
            'phone' => 'required|numeric',
            'email' => 'required|string',
            'website' => 'required|string|min:5|max:191',
            'description' => 'required|string|min:5|max:5000',
            'location' => 'required|string|min:5|max:191',
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            SoPageData::where('id', $soPageData)->update($data);
            return response()->json(['message' => 'Successfuly update data'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Page\SoPageData  $soPageData
     * @return \Illuminate\Http\Response
     */
    public function destroy($soPageData)
    {
        SoPageData::where('id', $soPageData)->delete();
        return response()->json(['message' => 'Successfuly delete data'], 200);
    }
}
