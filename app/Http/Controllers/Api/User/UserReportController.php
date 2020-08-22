<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
/*models*/
use App\Models\User\SoUserReport;
use App\User;

class UserReportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(User::find(request()->user()->id)->withUserReport()->paginate(25), 200);
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
            'report_user_id' => 'required|numeric'
        ]);
        if($validator->fails()) {
            return response()->json(['message' => 'Fields not allowed empty'], 401);
        } else {
            $data = $request->all();
            $data['user_id'] = request()->user()->id;
            SoUserReport::create($data);
            return response()->json(['message' => 'Successfuly create data'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User\SoUserReport  $soUserReport
     * @return \Illuminate\Http\Response
     */
    public function show(SoUserReport $soUserReport)
    {
        return response()->json(SoUserReport::where('id', $soUserReport)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User\SoUserReport  $soUserReport
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $soUserReport)
    {
        $validator = Validator::make($request->all(), [
            'report_user_id' => 'required|numeric'
        ]);
        if($validator->fails()) {
            return response()->json(['message' => 'Fields not allowed empty'], 401);
        } else {
            $data = $request->all();
            $data['user_id'] = request()->user()->id;
            SoUserReport::where('id', $soUserReport)->update($data);
            return response()->json(['message' => 'Successfuly update data'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User\SoUserReport  $soUserReport
     * @return \Illuminate\Http\Response
     */
    public function destroy($soUserReport)
    {
        SoUserReport::where('id', $soUserReport)->delete();
        return response()->json(['message' => 'Successfuly delete data'], 200);
    }
}
