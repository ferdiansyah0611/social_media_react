<?php

namespace App\Http\Controllers\Api\Group;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
/*models*/
use App\Models\Group\SoGroupRole;

class GroupRoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(SoGroupRole::latest()->paginate(25), 200);
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
            'so_group_data_id' => 'required|numeric',
            'role' => 'required|numeric|max:20'
        ]);
        if($validator->fails()) {
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            $data['user_id'] = request()->user()->id;
            SoGroupRole::create($data);
            return response()->json(['message' => 'Successfuly create data'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Group\SoGroupRole  $soGroupRole
     * @return \Illuminate\Http\Response
     */
    public function show($soGroupRole)
    {
        return response()->json(SoGroupRole::where('id', $soGroupRole)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Group\SoGroupRole  $soGroupRole
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $soGroupRole)
    {
        $validator = Validator::make($request->all(), [
            'so_group_data_id' => 'required|numeric',
            'role' => 'required|numeric|max:20'
        ]);
        if($validator->fails()) {
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            SoGroupRole::where('id', $soGroupRole)->update($data);
            return response()->json(['message' => 'Successfuly update data'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Group\SoGroupRole  $soGroupRole
     * @return \Illuminate\Http\Response
     */
    public function destroy($soGroupRole)
    {
        SoGroupRole::where('id', $soGroupRole)->delete();
        return response()->json(['message' => 'Successfuly delete data'], 200);
    }
}
