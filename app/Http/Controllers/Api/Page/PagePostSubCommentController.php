<?php

namespace App\Http\Controllers\Api\Page;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use File;
/*models*/
use App\Models\Page\SoPagePostSubComment;

class PagePostSubCommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         return response()->json(App\User::find(request()->user()->id)->withPagePostSubComment()->paginate(25), 200);
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
            'so_page_post_comment_id' => 'required|numeric',
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
                    $file->move(storage_path('app/public/asset'), $name);
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
                    $file->move(storage_path('app/public/asset'), $name);
                    $data['video'] = $name;
                }
            }
            SoPagePostSubComment::create($data);
            return response()->json(['message' => 'Successfuly create data'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Page\SoPagePostSubComment  $soPagePostSubComment
     * @return \Illuminate\Http\Response
     */
    public function show($soPagePostSubComment)
    {
        return response()->json(SoPagePostSubComment::where('id', $soPagePostSubComment)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Page\SoPagePostSubComment  $soPagePostSubComment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $soPagePostSubComment)
    {
        $validator = Validator::make($request->all(), [
            'so_page_post_comment_id' => 'required|numeric',
            'comment' => 'required|string|max:10000'
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            $model = SoPagePostSubComment::where('id', $soPagePostSubComment);
            if($request->file('image')){
                $validator_file = Validator::make($request->all(), [
                    'image' => 'required|file|image|mimes:jpg,jpeg,png|max:5000'
                ]);
                if($validator->fails()){
                    return response()->json(['message' => 'Fields error'], 401);
                } else {
                    $file = $request->file('image');
                    $name = $file->getClientOriginalName();
                    $file->move(storage_path('app/public/asset'), $name);
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
                    $file->move(storage_path('app/public/asset'), $name);
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
     * @param  \App\Models\Page\SoPagePostSubComment  $soPagePostSubComment
     * @return \Illuminate\Http\Response
     */
    public function destroy($soPagePostSubComment)
    {
        $model = SoPagePostSubComment::where('id', $soPagePostSubComment);
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
