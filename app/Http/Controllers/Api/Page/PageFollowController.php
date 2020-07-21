<?php

namespace App\Http\Controllers\Api\Page;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
/*models*/
use App\Models\Page\SoPageFollow;

class PageFollowController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(App\User::find(request()->user()->id)->withPageFollow()->paginate(25), 200);
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
            'so_page_data_id' => 'required|numeric'
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            $data['user_id'] = request()->user()->id;
            SoPageFollow::create($data);
            return response()->json(['message' => 'Successfuly create data'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Page\SoPageFollow  $soPageFollow
     * @return \Illuminate\Http\Response
     */
    public function show($soPageFollow)
    {
        return response()->json(SoPageFollow::where('id', $soPageFollow)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Page\SoPageFollow  $soPageFollow
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $soPageFollow)
    {
        $validator = Validator::make($request->all(), [
            'so_page_data_id' => 'required|numeric'
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            SoPageFollow::where('id', $soPageFollow)->update($data);
            return response()->json(['message' => 'Successfuly update data'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Page\SoPageFollow  $soPageFollow
     * @return \Illuminate\Http\Response
     */
    public function destroy($soPageFollow)
    {
        SoPageFollow::where('id', $soPageFollow)->delete();
        return response()->json(['message' => 'Successfuly delete data'], 200);
    }
}
