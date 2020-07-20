<?php

namespace App\Http\Controllers\Api\Story;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
/*models*/
use App\Models\Story\SoStoryView;

class StoryViewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(App\User::find(request()->user()->id)->withStoryView()->paginate(25), 200);
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
            'so_story_data_id' => 'required|numeric'
        ]);
        $data = $request->all();
        $data['user_id'] = request()->user()->id;
        SoStoryView::create($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Story\SoStoryView  $soStoryView
     * @return \Illuminate\Http\Response
     */
    public function show($soStoryView)
    {
        return response()->json(SoStoryView::where('id', $soStoryView)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Story\SoStoryView  $soStoryView
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $soStoryView)
    {
        $validator = Validator::make($request->all(), [
            'so_story_data_id' => 'required|numeric'
        ]);
        $data = $request->all();
        $data['user_id'] = request()->user()->id;
        SoStoryView::where('id', $soStoryView)->update($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Story\SoStoryView  $soStoryView
     * @return \Illuminate\Http\Response
     */
    public function destroy($soStoryView)
    {
        SoStoryView::where('id', $soStoryView)->delete();
        return response()->json(['message' => 'Successfuly delete data'], 200);
    }
}
