<?php
namespace App\Http\Controllers;
use App\User; 
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 
use App\Http\Controllers\Controller;

class AuthenticateController extends Controller
{
    public function login()
    {
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){ 
            $user = Auth::user(); 
            $success['token'] =  $user->createToken('MyApp')->accessToken; 
            return response()->json(['success' => $success, 'user' => request()->user()], 200);
        }
        else{ 
            return response()->json(['error'=>'Unauthorized'], 401); 
        } 
    }
    public function register(Request $request) 
    {
        $validator = Validator::make($request->all(), [ 
            'name' => 'required|string|min:2|max:20', 
            'email' => 'required|email', 
            'password' => 'required|min:8|max:20', 
            'verify_password' => 'required|same:password',
            'location' => 'required|string|min:2',
            'born' => 'required|date',
            'gender' => 'required|string|min:3|max:10',
            'languange' => 'required|string|min:2',
            'status' => 'required|string|min:2|max:20',
        ]);
        if($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $input = $request->all(); 
        $input['password'] = bcrypt($input['password']); 
        $user = User::create($input); 
        $success['token'] = $user->createToken('MyApp')->accessToken; 
        $success['name'] = $user->name;
        return response()->json(['success' => $success, 'user' => request()->user()], 200);
    }
}
