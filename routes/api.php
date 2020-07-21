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
	Route::group(['namespace' => 'Api\Group'], function(){
		Route::apiResource('group-category', 'GroupCategoryController');
		Route::apiResource('group-data', 'GroupDataController');
		Route::apiResource('group-post-comment', 'GroupPostCommentController');
		Route::apiResource('group-post-comment-like', 'GroupPostCommentLikeController');
		Route::apiResource('group-post-data', 'GroupPostDataController');
		Route::apiResource('group-post-ike', 'GroupPostLikeController');
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