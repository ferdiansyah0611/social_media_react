<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Validator;
/*models*/
use App\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Response()->json(request()->user(), 200);
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
            'name' => 'required|string|min:3|max:191',
            'email' => 'required|string|email|max:191|unique:users',
            'password' => 'required|string|confirmed',
            'location' => 'required|string|min:3|max:191',
            'born' => 'required|date',
            'gender' => 'required|string|min:3|max:10',
            'languange' => 'required|string|max:10',
            'status' => 'required|string|max:10',
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Fields not allowed empty'], 401);
        } else {
            $data = $request->all();
            if($request->file('avatar')){
                $validator = Validator::make($request->all(), [
                    'avatar' => 'required|image|mimes:jpg,png,jpeg|max:2000'
                ]);
                if($validator->fails()){
                    return response()->json(['message' => 'Avatar must be required'], 401);
                } else {
                    $file = $request->file('avatar');
                    $name = $file->getClientOriginalName();
                    $file->move(storage_path('app/public/asset'), $name);
                    $data['avatar'] = $name;
                }
            }
            $data['password'] = Hash::make($request->password);
            User::create($data);
            return response()->json(['message' => 'Successfuly create data'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show($user)
    {
        return response()->json(User::where('id', $user)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $user)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:3|max:191',
            'email' => 'required|string|email|max:191|unique:users',
            'password' => 'required|string|confirmed',
            'location' => 'required|string|min:3|max:191',
            'born' => 'required|date',
            'gender' => 'required|string|min:3|max:10',
            'languange' => 'required|string|max:10',
            'status' => 'required|string|max:10',
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Fields not allowed empty'], 401);
        } else {
            $data = $request->all();
            if($request->file('avatar')){
                $validator = Validator::make($request->all(), [
                    'avatar' => 'required|image|mimes:jpg,png,jpeg|max:2000'
                ]);
                if($validator->fails()){
                    return response()->json(['message' => 'Avatar must be required'], 401);
                } else {
                    $file = $request->file('avatar');
                    $name = $file->getClientOriginalName();
                    $file->move(storage_path('app/public/asset'), $name);
                    $data['avatar'] = $name;
                }
            }
            User::where('id', $user)->update($data);
            return response()->json(['message' => 'Successfuly update data'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        User::where('id', $user)->delete();
        return response()->json(['message' => 'Successfuly delete data'], 200);
    }
}
