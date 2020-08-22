<?php

namespace App\Http\Controllers\Api\Posted;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
/*models*/
use App\Models\Posted\SoPostCommentLike;
use App\User;

class PostCommentLikeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         return response()->json(User::find(request()->user()->id)->withPostDataCommentLike()->paginate(25), 200);
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
            'so_post_comment_id' => 'required|numeric',
            'like' => 'required|numeric|max:2'
        ]);
        if($validator->fails()) {
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            $data['user_id'] = request()->user()->id;
            SoPostCommentLike::create($data);
            return response()->json(['message' => 'Successfuly create data'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Posted\SoPostCommentLike  $soPostCommentLike
     * @return \Illuminate\Http\Response
     */
    public function show($soPostCommentLike)
    {
        return response()->json(SoPostCommentLike::where('id', $soPostCommentLike)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Posted\SoPostCommentLike  $soPostCommentLike
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $soPostCommentLike)
    {
        $validator = Validator::make($request->all(), [
            'so_post_comment_id' => 'required|numeric',
            'like' => 'required|numeriv|max:2'
        ]);
        if($validator->fails()) {
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            SoPostCommentLike::where('id', $soPostCommentLike)->update($data);
            return response()->json(['message' => 'Successfuly update data'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Posted\SoPostCommentLike  $soPostCommentLike
     * @return \Illuminate\Http\Response
     */
    public function destroy($soPostCommentLike)
    {
        SoPostCommentLike::where('id', $soPostCommentLike)->delete();
        return response()->json(['message' => 'Successfuly delete data'], 200);
    }
}
