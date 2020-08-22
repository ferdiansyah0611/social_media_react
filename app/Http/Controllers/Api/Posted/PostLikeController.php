<?php

namespace App\Http\Controllers\Api\Posted;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
/*models*/
use App\Models\Posted\SoPostLike;
use App\User;

class PostLikeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(User::find(request()->user()->id)->withPostLike()->paginate(25), 200);
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
            'sc_post_data_id' => 'required|numeric',
            'like' => 'required|numeric|max:2'
        ]);
        if($validator->fails()) {
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            $data['user_id'] = request()->user()->id;
            SoPostLike::create($data);
            return response()->json(['message' => 'Successfuly create data'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Posted\SoPostLike  $soPostLike
     * @return \Illuminate\Http\Response
     */
    public function show($soPostLike)
    {
        return response()->json(SoPostLike::where('id', $soPostLike)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Posted\SoPostLike  $soPostLike
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $soPostLike)
    {
        $validator = Validator::make($request->all(), [
            'sc_post_data_id' => 'required|numeric',
            'like' => 'required|numeriv|max:2'
        ]);
        if($validator->fails()) {
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            SoPostLike::where('id', $soPostLike)->update($data);
            return response()->json(['message' => 'Successfuly update data'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Posted\SoPostLike  $soPostLike
     * @return \Illuminate\Http\Response
     */
    public function destroy($soPostLike)
    {
        SoPostLike::where('id', $soPostLike)->delete();
        return response()->json(['message' => 'Successfuly delete data'], 200);
    }
}
