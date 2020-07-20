<?php

namespace App\Http\Controllers\Api\Story;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use File;
/*models*/
use App\Models\Story\SoStoryData;

class StoryDataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(App\User::find(request()->user()->id)->withStoryData()->paginate(25), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $data['user_id'] = request()->user()->id;
        if($request->file('image')){
            $validator = Validator::make($request->all(), [
                'image' => 'required|file|image|mimes:jpg,png,jpeg|max:2000'
            ]);
            $file = $request->file('image');
            $name = $file->getClientOriginalName();
            $file->move(storage_path('app/public/image'), $name);
            $data['image'] = $name;
        }
        if($request->file('video')){
            $validator = Validator::make($request->all(), [
                'video' => 'required|file|mimes:mp4|max:50000'
            ]);
            $file = $request->file('video');
            $name = $file->getClientOriginalName();
            $file->move(storage_path('app/public/image'), $name);
            $data['video'] = $name;
        }
        SoStoryData::create($data);
        return response()->json(['message' => 'Successfuly create data'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Story\SoStoryData  $soStoryData
     * @return \Illuminate\Http\Response
     */
    public function show($soStoryData)
    {
        return response()->json(SoStoryData::where('id', $soStoryData)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Story\SoStoryData  $soStoryData
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $soStoryData)
    {
        $data = $request->all();
        $data['user_id'] = request()->user()->id;
        if($request->file('image')){
            $validator = Validator::make($request->all(), [
                'image' => 'required|file|image|mimes:jpg,png,jpeg|max:2000'
            ]);
            $file = $request->file('image');
            $name = $file->getClientOriginalName();
            $file->move(storage_path('app/public/image'), $name);
            $data['image'] = $name;
        }
        if($request->file('video')){
            $validator = Validator::make($request->all(), [
                'video' => 'required|file|mimes:mp4|max:50000'
            ]);
            $file = $request->file('video');
            $name = $file->getClientOriginalName();
            $file->move(storage_path('app/public/image'), $name);
            $data['video'] = $name;
        }
        $model = SoStoryData::where('id', $soStoryData);
        $model->update($data);
        return response()->json(['message' => 'Successfuly create data'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Story\SoStoryData  $soStoryData
     * @return \Illuminate\Http\Response
     */
    public function destroy($soStoryData)
    {
        $model = SoStoryData::where('id', $soStoryData);
        $image = $model->get()->pluck('image');
        $video = $model->get()->pluck('video');
        if($image[0] !== null){
            File::delete(storage_path('app/public/asset/' . $image[0]));
        }
        if($video[0] !== null){
            File::delete(storage_path('app/public/asset/' . $video[0]));
        }
        $model->delete();
        return response()->json(['message' => 'Successfuly delete data'], 200);
    }
}
