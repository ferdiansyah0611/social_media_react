<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
/*models*/
use App\Models\User\SoUserNotification;
use App\User;

class UserNotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(User::find(request()->user()->id)->withUserNotification()->paginate(25), 200);
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
            'message' => 'required|string|min:3|max:191',
            'status' => 'required|string|min:3|max:191'
        ]);
        if($validator->fails()) {
            return response()->json(['message' => 'Fields not allowed empty'], 401);
        } else {
            $data = $request->all();
            $data['user_id'] = request()->user()->id;
            SoUserNotification::create($data);
            return response()->json(['message' => 'Successfuly create data'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User\SoUserNotification  $soUserNotification
     * @return \Illuminate\Http\Response
     */
    public function show($soUserNotification)
    {
        return response()->json(SoUserNotification::where('id', $soUserLogActivity)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User\SoUserNotification  $soUserNotification
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $soUserNotification)
    {
        $validator = Validator::make($request->all(), [
            'message' => 'required|string|min:3|max:191',
            'status' => 'required|string|min:3|max:191'
        ]);
        if($validator->fails()) {
            return response()->json(['message' => 'Fields not allowed empty'], 401);
        } else {
            $data = $request->all();
            $data['user_id'] = request()->user()->id;
            SoUserNotification::where('id', $soUserNotification)->update($data);
            return response()->json(['message' => 'Successfuly update data'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User\SoUserNotification  $soUserNotification
     * @return \Illuminate\Http\Response
     */
    public function destroy($soUserNotification)
    {
        SoUserNotification::where('id', $soUserNotification)->delete();
        return response()->json(['message' => 'Successfuly delete data'], 200);
    }
}
