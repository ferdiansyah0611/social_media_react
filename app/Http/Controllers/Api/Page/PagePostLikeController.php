<?php

namespace App\Http\Controllers\Api\Page;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
/*models*/
use App\Models\Page\SoPagePostLike;

class PagePostLikeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(App\User::find(request()->user()->id)->withPagePostLike()->paginate(25), 200);
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
            'so_page_post_data_id' => 'required|numeric',
            'like' => 'required|numeric|max:2'
        ]);
        if($validator->fails()) {
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            $data['user_id'] = request()->user()->id;
            SoPagePostLike::create($data);
            return response()->json(['message' => 'Successfuly create data'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Page\SoPagePostLike  $soPagePostLike
     * @return \Illuminate\Http\Response
     */
    public function show($soPagePostLike)
    {
        return response()->json(SoPagePostLike::where('id', $soPagePostLike)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Page\SoPagePostLike  $soPagePostLike
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $soPagePostLike)
    {
        $validator = Validator::make($request->all(), [
            'so_page_post_data_id' => 'required|numeric',
            'like' => 'required|numeric|max:2'
        ]);
        if($validator->fails()) {
            return response()->json(['message' => 'Fields error'], 401);
        } else {
            $data = $request->all();
            SoPagePostLike::where('id', $soPagePostLike)->update($data);
            return response()->json(['message' => 'Successfuly update data'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Page\SoPagePostLike  $soPagePostLike
     * @return \Illuminate\Http\Response
     */
    public function destroy($soPagePostLike)
    {
        SoPagePostLike::where('id', $soPagePostLike)->delete();
        return response()->json(['message' => 'Successfuly delete data'], 200);
    }
}
