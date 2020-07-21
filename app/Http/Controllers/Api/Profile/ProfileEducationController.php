<?php

namespace App\Http\Controllers\Api\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
/*models*/
use App\Models\Profile\SoProfileEducation;

class ProfileEducationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(App\User::find(request()->user()->id)->withProfileEducation()->paginate(25), 200);
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
            'concentration' => 'required|string|min:3|max:191',
            'graduate' => 'required|string|max:191',
            'from' => 'required|date',
            'to' => 'required|date',
            'privacy' => 'required|string|min:3|max:191'
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            $data['user_id'] = request()->user()->id;
            SoProfileEducation::create($data);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Profile\SoProfileEducation  $soProfileEducation
     * @return \Illuminate\Http\Response
     */
    public function show($soProfileEducation)
    {
        return response()->json(SoProfileEducation::where('id', $soProfileEducation)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Profile\SoProfileEducation  $soProfileEducation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $soProfileEducation)
    {
        $validator = Validator::make($request->all(), [
            'so_page_data_id' => 'required|numeric',
            'concentration' => 'required|string|min:3|max:191',
            'graduate' => 'required|string|max:191',
            'from' => 'required|date',
            'to' => 'required|date',
            'privacy' => 'required|string|min:3|max:191'
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            SoProfileEducation::where('id', $soProfileEducation)->update($data);
            return response()->json(['message' => 'Successfuly update data'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Profile\SoProfileEducation  $soProfileEducation
     * @return \Illuminate\Http\Response
     */
    public function destroy($soProfileEducation)
    {
        SoProfileEducation::where('id', $soProfileEducation)->delete();
        return response()->json(['message' => 'Successfuly delete data'], 200);
    }
}
