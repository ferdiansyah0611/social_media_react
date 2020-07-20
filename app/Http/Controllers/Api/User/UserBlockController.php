<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
/*models*/
use App\Models\User\SoUserBlock;

class UserBlockController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(App\User::find(request()->user()->id)->withUserBlock()->paginate(25), 200);
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
            'bloked_user_id' => 'required|numeric'
        ]);
        if($validator->fails()) {
            return response()->json(['message' => 'Fields not allowed empty'], 401);
        } else {
            $data = $request->all();
            $data['user_id'] = request()->user()->id;
            SoUserBlock::create($data);
            return response()->json(['message' => 'Successfuly create data'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User\SoUserBlock  $soUserBlock
     * @return \Illuminate\Http\Response
     */
    public function show($soUserBlock)
    {
        return response()->json(SoUserBlock::where('id', $soUserBlock)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User\SoUserBlock  $soUserBlock
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $soUserBlock)
    {
        $validator = Validator::make($request->all(), [
            'bloked_user_id' => 'required|numeric'
        ]);
        if($validator->fails()) {
            return response()->json(['message' => 'Fields not allowed empty'], 401);
        } else {
            $data = $request->all();
            $data['user_id'] = request()->user()->id;
            SoUserBlock::where('id', $soUserBlock)->update($data);
            return response()->json(['message' => 'Successfuly update data'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User\SoUserBlock  $soUserBlock
     * @return \Illuminate\Http\Response
     */
    public function destroy($soUserBlock)
    {
        SoUserBlock::where('id', $soUserBlock)->delete();
        return response()->json(['message' => 'Successfuly delete data'], 200);
    }
}
