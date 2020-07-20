<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'auth:api'], function(){
	Route::group(['namespace' => 'Api\User'], function(){
		Route::apiResource('story-data', 'UserDataController');
		Route::apiResource('story-view', 'StoryViewController');
	});
	Route::group(['namespace' => 'Api\User'], function(){
		Route::apiResource('user-block', 'UserBlockController');
		Route::apiResource('user', 'UserController');
		Route::apiResource('user-friend', 'UserFriendController');
		Route::apiResource('user-log-activity', 'UserLogActivityController');
		Route::apiResource('user-message', 'UserMessageController');
		Route::apiResource('user-notification', 'UserNotificationController');
		Route::apiResource('user-report', 'UserReportController');
	});
});