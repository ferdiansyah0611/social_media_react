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
|eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOWE5NDU2MjVkY2M4YzdkYzBlMGVhYTUzNTFmMmFkNTk4OWJjMGUwNjJmNWFjMzQ5OTZmNDEwYjc1ZmYzMDc1MmU0MTE2OWU3Y2E1OWFhMGQiLCJpYXQiOjE1OTc2MjQ1NTYsIm5iZiI6MTU5NzYyNDU1NiwiZXhwIjoxNjI5MTYwNTU1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.zzwG4zzBimfKkzzhBSOVmQFFRLcsbetvENraQtNj9Zn7WJIhsVnGBbGjZvLbp67fm2rPkL2TZi0x3SEl8W96acWbb7EIpliX71zzELZmg6xVPT-EPgc0PXO-bspHqnuk2doI4yOGIbhAv7jIfVejtgjinrCYun29bZd1Eg7d91X5N_ffmhYGmNHydEjmMpmEuRbaeXurs3KB14EQCP_ya7ZaUQloqDPoUGs7oVcEyokiuAb9Q4b1J3bjZDAPr8Rzpm0HrfkTqD9NaAsKHMKUTnhETFW2hpj4Bm45dhkgTUnEM4rkIBGv2XUiP1z2mnFm5Ck0nhscVuZYoZstoij4rxUrPbs77RTAC_c1RhSrlw4Tdx2hZaD2XeG14K0O9LRYbJ-K4BHAFp15W6E-txTOAbin3MEQm6yy82buvnDQP4p8qf_R7NuYDEhAkXbRzGFrafP6MlmKxVZSqjcQWUuu9f4WwPngnl7ByZlGkJ8GzyaAt1gBNFuGEiaGMUH8VJkZ8tcujCgjL1Y8P7CwCoN2BeNK9PePU3s0rxAyLQNumSyW78WuREqhJ_T93cEk-uyp0oTWb1VaHnMQsyCXfTVuuq-GbcDTZpYjw9QcuaVHkEw5PW9qlRtyqFI4dNTPSc4qEtVh1K56Q73kE1Q34ysTfRoKVkFwUe7tefRN-RS_nkE
*/
Route::post('login', 'AuthenticateController@login');
Route::post('register', 'AuthenticateController@register');
Route::group(['middleware' => 'auth:api'], function(){
	Route::group(['namespace' => 'Api\Group'], function(){
		Route::apiResource('group-category', 'GroupCategoryController');
		Route::apiResource('group-data', 'GroupDataController');
		Route::apiResource('group-post-comment', 'GroupPostCommentController');
		Route::apiResource('group-post-comment-like', 'GroupPostCommentLikeController');
		Route::apiResource('group-post-data', 'GroupPostDataController');
		Route::apiResource('group-post-like', 'GroupPostLikeController');
		Route::apiResource('group-post-sub-comment', 'GroupPostSubCommentController');
		Route::apiResource('group-role', 'GroupRoleController');
	});
	Route::group(['namespace' => 'Api\Page'], function(){
		Route::apiResource('page-category', 'PageCategoryController');
		Route::apiResource('page-data', 'PageDataController');
		Route::apiResource('page-follow', 'PageFollowController');
		Route::apiResource('page-post-comment', 'PagePostCommentController');
		Route::apiResource('page-post-data', 'PagePostDataController');
		Route::apiResource('page-post-ike', 'PagePostLikeController');
		Route::apiResource('page-post-sub-comment', 'PagePostSubCommentController');
	});
	Route::group(['namespace' => 'Api\Posted'], function(){
		Route::apiResource('post-comment', 'PostCommentController');
		Route::apiResource('post-comment-like', 'PostCommentLikeController');
		Route::apiResource('post-data', 'PostDataController');
		Route::apiResource('post-like', 'PostLikeController');
		Route::apiResource('post-sub-comment', 'PostSubCommentController');
	});
	Route::group(['namespace' => 'Api\Profile'], function(){
		Route::apiResource('profile-avatar', 'ProfileAvatarController');
		Route::apiResource('profile', 'ProfileController');
		Route::apiResource('profile-education', 'ProfileEducationController');
		Route::apiResource('profile-work', 'ProfileWorkController');
	});
	Route::group(['namespace' => 'Api\Story'], function(){
		Route::apiResource('story-data', 'StoryDataController');
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