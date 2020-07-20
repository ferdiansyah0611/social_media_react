<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
/*model*/
use App\Models\User\SoUserFriend;

class UserFriendController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(App\User::find(request()->user()->id)->withUserFriend()->paginate(25), 200);
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
            'friends_user_id' => 'required|numeric'
        ]);
        if($validator->fails()) {
            return response()->json(['message' => 'Fields not allowed empty'], 401);
        } else {
            $data = $request->all();
            $data['user_id'] = request()->user()->id;
            SoUserFriend::create($data);
            return response()->json(['message' => 'Successfuly create data'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User\SoUserFriend  $soUserFriend
     * @return \Illuminate\Http\Response
     */
    public function show($soUserFriend)
    {
        return response()->json(SoUserFriend::where('id', $soUserFriend)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User\SoUserFriend  $soUserFriend
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $soUserFriend)
    {
        $validator = Validator::make($request->all(), [
            'bloked_user_id' => 'required|numeric'
        ]);
        if($validator->fails()) {
            return response()->json(['message' => 'Fields not allowed empty'], 401);
        } else {
            $data = $request->all();
            $data['user_id'] = request()->user()->id;
            SoUserFriend::where('id', $soUserFriend)->update($data);
            return response()->json(['message' => 'Successfuly update data'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User\SoUserFriend  $soUserFriend
     * @return \Illuminate\Http\Response
     */
    public function destroy($soUserFriend)
    {
        SoUserFriend::where('id', $soUserFriend)->delete();
        return response()->json(['message' => 'Successfuly delete data'], 200);
    }
}
