<?php

namespace App\Http\Controllers\Api\Group;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use File;
/*models*/
use App\Models\Group\SoGroupPostData;

class GroupPostDataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(SoGroupPostData::latest()->paginate(25), 200);
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
            'so_group_category_id' => 'required|numeric',
            'description' => 'required|string|max:10000'
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            $data['user_id'] = request()->user()->id;
            if($request->file('image')){
                $validator_file = Validator::make($request->all(), [
                    'image' => 'required',
                    'image.*' => 'required|file|image|mimes:jpg,jpeg,png|max:20000'
                ]);
                if($validator->fails()){
                    return response()->json(['message' => 'Fields error'], 401);
                } else {
                    foreach($request->file('image') as $image){
                        $name = $image->getClientOriginalName();
                        $image->move(storage_path('app/public/image'), $name);
                        $fileArray[] = $name;
                    }
                    $data['image'] = json_encode($fileArray);
                }
            }
            if($request->file('video')){
                $validator_file = Validator::make($request->all(), [
                    'video' => 'required',
                    'video.*' => 'required|file|mimes:mp4|max:40000'
                ]);
                if($validator->fails()){
                    return response()->json(['message' => 'Fields error'], 401);
                } else {
                    foreach($request->file('video') as $video){
                        $name = $video->getClientOriginalName();
                        $video->move(storage_path('app/public/image'), $name);
                        $fileArray[] = $name;
                    }
                    $data['video'] = json_encode($fileArray);
                }
            }
            SoGroupPostData::create($data);
            return response()->json(['message' => 'Successfuly create data'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Group\SoGroupPostData  $soGroupPostData
     * @return \Illuminate\Http\Response
     */
    public function show($soGroupPostData)
    {
        return response()->json(SoGroupPostData::where('id', $soGroupPostData)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Group\SoGroupPostData  $soGroupPostData
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $soGroupPostData)
    {
        $validator = Validator::make($request->all(), [
            'so_group_category_id' => 'required|numeric',
            'description' => 'required|string|max:10000'
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            $model = SoGroupPostData::where('id', $soGroupPostData);
            if($request->file('image')){
                $validator_file = Validator::make($request->all(), [
                    'image' => 'required',
                    'image.*' => 'required|file|image|mimes:jpg,jpeg,png|max:20000'
                ]);
                if($validator->fails()){
                    return response()->json(['message' => 'Fields error'], 401);
                } else {
                    if($model->get()->pluck('image')[0] !== null){
                        foreach($model->get()->pluck('image')[0] as $imageDelete){
                            File::delete(storage_path('app/public/asset/' . $imageDelete));
                        }
                    }
                    foreach($request->file('image') as $image){
                        $name = $image->getClientOriginalName();
                        $image->move(storage_path('app/public/asset'), $name);
                        $fileArray[] = $name;
                    }
                    $data['image'] = json_encode($fileArray);
                }
            }
            if($request->file('video')){
                $validator_file = Validator::make($request->all(), [
                    'video' => 'required',
                    'video.*' => 'required|file|mimes:mp4|max:40000'
                ]);
                if($validator->fails()){
                    return response()->json(['message' => 'Fields error'], 401);
                } else {
                    if($model->get()->pluck('video')[0] !== null){
                        foreach($model->get()->pluck('video')[0] as $videoDelete){
                            File::delete(storage_path('app/public/asset/' . $videoDelete));
                        }
                    }
                    foreach($request->file('video') as $video){
                        $name = $video->getClientOriginalName();
                        $video->move(storage_path('app/public/asset'), $name);
                        $fileArray[] = $name;
                    }
                    $data['video'] = json_encode($fileArray);
                }
            }
            $model->update($data);
            return response()->json(['message' => 'Successfuly update data'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Group\SoGroupPostData  $soGroupPostData
     * @return \Illuminate\Http\Response
     */
    public function destroy($soGroupPostData)
    {
        $model = SoGroupPostData::where('id', $soGroupPostData);
        if($model->get()->pluck('image')[0] !== null){
            foreach($model->get()->pluck('image')[0] as $image){
                File::delete(storage_path('app/public/asset/' . $image));
            }
        }
        if($model->get()->pluck('video')[0] !== null){
            foreach($model->get()->pluck('video')[0] as $video){
                File::delete(storage_path('app/public/asset/' . $video));
            }
        }
    }
}
