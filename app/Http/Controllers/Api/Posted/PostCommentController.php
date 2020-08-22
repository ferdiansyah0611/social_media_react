<?php

namespace App\Http\Controllers\Api\Posted;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use File;
/*models*/
use App\Models\Posted\SoPostComment;
use App\User;

class PostCommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(User::find(request()->user()->id)->withPostDataComment()->paginate(25), 200);
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
            'comment' => 'required|string|max:10000'
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            $data['user_id'] = request()->user()->id;
            if($request->file('image')){
                $validator_file = Validator::make($request->all(), [
                    'image' => 'required|file|image|mimes:jpg,jpeg,png|max:5000'
                ]);
                if($validator->fails()){
                    return response()->json(['message' => 'Fields error'], 401);
                } else {
                    $file = $request->file('image');
                    $name = $file->getClientOriginalName();
                    $file->move(storage_path('app/public/image'), $name);
                    $data['image'] = $name;
                }
            }
            if($request->file('video')){
                $validator_file = Validator::make($request->all(), [
                    'video' => 'required|file|mimes:mp4|max:20000'
                ]);
                if($validator->fails()){
                    return response()->json(['message' => 'Fields error'], 401);
                } else {
                    $file = $request->file('video');
                    $name = $file->getClientOriginalName();
                    $file->move(storage_path('app/public/image'), $name);
                    $data['video'] = $name;
                }
            }
            SoPostComment::create($data);
            return response()->json(['message' => 'Successfuly create data'], 200);
        }
    }

    /**
     * Display the specified re   source.
     *
     * @param  \App\Models\Posted\SoPostComment  $soPostComment
     * @return \Illuminate\Http\Response
     */
    public function show($soPostComment)
    {
        return response()->json(SoPostComment::where('id', $soPostComment)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Posted\SoPostComment  $soPostComment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $soPostComment)
    {
        $validator = Validator::make($request->all(), [
            'comment' => 'required|string|max:10000'
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            $model = SoPostComment::where('id', $soPostComment);
            if($request->file('image')){
                $validator_file = Validator::make($request->all(), [
                    'image' => 'required|file|image|mimes:jpg,jpeg,png|max:5000'
                ]);
                if($validator->fails()){
                    return response()->json(['message' => 'Fields error'], 401);
                } else {
                    $file = $request->file('image');
                    $name = $file->getClientOriginalName();
                    $file->move(storage_path('app/public/image'), $name);
                    File::delete(storage_path('app/public/asset/' . $model->get()->pluck('image')[0]));
                    $data['image'] = $name;
                }
            }
            if($request->file('video')){
                $validator_file = Validator::make($request->all(), [
                    'video' => 'required|file|mimes:mp4|max:20000'
                ]);
                if($validator->fails()){
                    return response()->json(['message' => 'Fields error'], 401);
                } else {
                    $file = $request->file('video');
                    $name = $file->getClientOriginalName();
                    $file->move(storage_path('app/public/image'), $name);
                    File::delete(storage_path('app/public/asset/' . $model->get()->pluck('video')[0]));
                    $data['video'] = $name;
                }
            }
            $model->update($data);
            return response()->json(['message' => 'Successfuly update data'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Posted\SoPostComment  $soPostComment
     * @return \Illuminate\Http\Response
     */
    public function destroy($soPostComment)
    {
        $model = SoPostComment::where('id', $soPostComment);
        if($model->get()->pluck('image')[0] !== null){
            File::delete(storage_path('app/public/asset/' . $model->get()->pluck('image')[0]));
        }
        if($model->get()->pluck('video')[0] !== null){
            File::delete(storage_path('app/public/asset/' . $model->get()->pluck('video')[0]));
        }
        $model->delete();
        return response()->json(['message' => 'Successfuly delete data'], 200);
    }
}
