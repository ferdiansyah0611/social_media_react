<?php

namespace App\Http\Controllers\Api\Group;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
/*models*/
use App\Models\Group\SoGroupPostCommentLike;

class GroupPostCommentLikeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(SoGroupPostCommentLike::latest()->paginate(25), 200);
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
            'so_group_post_comment_id' => 'required|numeric',
            'like' => 'required|numeric|max:2'
        ]);
        if($validator->fails()) {
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            $data['user_id'] = request()->user()->id;
            SoGroupPostCommentLike::create($data);
            return response()->json(['message' => 'Successfuly create data'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Group\SoGroupPostCommentLike  $soGroupPostCommentLike
     * @return \Illuminate\Http\Response
     */
    public function show($soGroupPostCommentLike)
    {
        return response()->json(SoGroupPostCommentLike::where('id', $soGroupPostCommentLike)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Group\SoGroupPostCommentLike  $soGroupPostCommentLike
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $soGroupPostCommentLike)
    {
         $validator = Validator::make($request->all(), [
            'so_group_post_comment_id' => 'required|numeric',
            'like' => 'required|numeric|max:2'
        ]);
        if($validator->fails()) {
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            SoGroupPostCommentLike::where('id', $soGroupPostCommentLike)->update($data);
            return response()->json(['message' => 'Successfuly update data'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Group\SoGroupPostCommentLike  $soGroupPostCommentLike
     * @return \Illuminate\Http\Response
     */
    public function destroy($soGroupPostCommentLike)
    {
        SoGroupPostCommentLike::where('id', $soGroupPostCommentLike)->delete();
        return response()->json(['message' => 'Successfuly delete data'], 200);
    }
}
