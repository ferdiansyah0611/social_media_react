<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
/*models*/
use App\Models\User\SoUserMessage;

class UserMessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(App\User::find(request()->user()->id)->withUserMessage()->paginate(25), 200);
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
            'to_user_id' => 'required|string|min:3|max:191',
            'message' => 'required|string|min:3|max:10000',
            'like' => 'required|string|min:3|max:191'
        ]);
        if($validator->fails()) {
            return response()->json(['message' => 'Fields not allowed empty'], 401);
        } else {
            $data = $request->all();
            $data['user_id'] = request()->user()->id;
            if($request->file('asset')){
                $validator_asset = Validator::make($request->all(), [
                    'asset' => 'required',
                    'asset.*' => 'required|file|mimes:jpg,jpeg,png,gif,svg,mp4,mp3,doc,docx,ppt,pptx,xls,xlsx|max:100000'
                ]);
                if($validator_asset->fails()) {
                    return response()->json(['message' => 'Fields not allowed empty'], 401);
                } else {
                    foreach($request->file('asset') as $asset){
                        $name = $asset->getClientOriginalName();
                        $asset->move(storage_path('app/public/asset'), $name);
                        $fileArray[] = $name;
                    }
                    $data['asset'] = json_encode($fileArray);
                }
            }
            SoUserMessage::create($data);
            return response()->json(['message' => 'Successfuly create data'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User\SoUserMessage  $soUserMessage
     * @return \Illuminate\Http\Response
     */
    public function show($soUserMessage)
    {
        return response()->json(SoUserMessage::where('id', $soUserMessage)->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User\SoUserMessage  $soUserMessage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $soUserMessage)
    {
        $validator = Validator::make($request->all(), [
            'to_user_id' => 'required|string|min:3|max:191',
            'message' => 'required|string|min:3|max:10000',
            'like' => 'required|string|min:3|max:191'
        ]);
        if($validator->fails()) {
            return response()->json(['message' => 'Fields not allowed empty'], 401);
        } else {
            $data = $request->all();
            $data['user_id'] = request()->user()->id;
            if($request->file('asset')){
                $validator_asset = Validator::make($request->all(), [
                    'asset' => 'required',
                    'asset.*' => 'required|file|mimes:jpg,jpeg,png,gif,svg,mp4,mp3,doc,docx,ppt,pptx,xls,xlsx|max:100000'
                ]);
                if($validator_asset->fails()) {
                    return response()->json(['message' => 'Fields not allowed empty'], 401);
                } else {
                    foreach($request->file('asset') as $asset){
                        $name = $asset->getClientOriginalName();
                        $asset->move(storage_path('app/public/asset'), $name);
                        $fileArray[] = $name;
                    }
                    $data['asset'] = json_encode($fileArray);
                }
            }
            SoUserMessage::where('id', $soUserMessage)->update($data);
            return response()->json(['message' => 'Successfuly update data'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User\SoUserMessage  $soUserMessage
     * @return \Illuminate\Http\Response
     */
    public function destroy($soUserMessage)
    {
        SoUserMessage::where('id', $soUserMessage)->delete();
        return response()->json(['message' => 'Successfuly delete data'], 200);
    }
}
