<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
/*passport*/
use Laravel\Passport\HasApiTokens;
class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'location', 'born', 'gender', 'languange', 'status', 'avatar'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /* DIR > App\Models\Page */

    /**
     * Relationship table
     * @return App\Models\Page\SoPageData
    */
    public function withPageData()
    {
        return $this->hasMany('App\Models\Page\SoPageData', 'user_id');
    }

    /**
     * Relationship table
     * @return App\Models\Page\SoPageFollow
    */
    public function withPageFollow()
    {
        return $this->hasMany('App\Models\Page\SoPageFollow', 'user_id');
    }

    /**
     * Relationship table
     * @return App\Models\Page\SoPagePostComment
    */
    public function withPagePostComment()
    {
        return $this->hasMany('App\Models\Page\SoPagePostComment', 'user_id');
    }

    /**
     * Relationship table
     * @return App\Models\Page\SoPagePostData
    */
    public function withPagePostData()
    {
        return $this->hasMany('App\Models\Page\SoPagePostData', 'user_id');
    }

    /**
     * Relationship table
     * @return App\Models\Page\SoPagePostLike
    */
    public function withPagePostLike()
    {
        return $this->hasMany('App\Models\Page\SoPagePostLike', 'user_id');
    }

    /**
     * Relationship table
     * @return App\Models\Page\SoPagePostSubComment
    */
    public function withPagePostSubComment()
    {
        return $this->hasMany('App\Models\Page\SoPagePostSubComment', 'user_id');
    }

    /* DIR > App\Models\Posted */

    /**
     * Relationship table
     * @return App\Models\Posted\SoPostComment
    */
    public function withPostDataComment()
    {
        return $this->hasMany('App\Models\Posted\SoPostComment', 'user_id');
    }

    /**
     * Relationship table
     * @return App\Models\Posted\SoPostCommentLike
    */
    public function withPostDataCommentLike()
    {
        return $this->hasMany('App\Models\Posted\SoPostCommentLike', 'user_id');
    }

    /**
     * Relationship table
     * @return App\Models\Posted\SoPostData
    */
    public function withPostData()
    {
        return $this->hasMany('App\Models\Posted\SoPostData', 'user_id');
    }

    /**
     * Relationship table
     * @return App\Models\Posted\SoPostLike
    */
    public function withPostLike()
    {
        return $this->hasMany('App\Models\Posted\SoPostLike', 'user_id');
    }

    /**
     * Relationship table
     * @return App\Models\Posted\SoPostSubComment
    */
    public function withPostSubComment()
    {
        return $this->hasMany('App\Models\Posted\SoPostSubComment', 'user_id');
    }

     /* DIR > App\Models\Profile */

    /**
     * Relationship table
     * @return App\Models\Profile\SoProfile
    */
    public function withProfile()
    {
        return $this->hasMany('App\Models\Profile\SoProfile', 'user_id');
    }

    /**
     * Relationship table
     * @return App\Models\Profile\SoProfileAvatar
    */
    public function withProfileAvatar()
    {
        return $this->hasMany('App\Models\Profile\SoProfileAvatar', 'user_id');
    }

    /**
     * Relationship table
     * @return App\Models\Profile\SoProfileEducation
    */
    public function withProfileEducation()
    {
        return $this->hasMany('App\Models\Profile\SoProfileEducation', 'user_id');
    }

    /**
     * Relationship table
     * @return App\Models\Profile\SoProfileWork
    */
    public function withProfileWork()
    {
        return $this->hasMany('App\Models\Profile\SoProfileWork', 'user_id');
    }

    /* DIR > App\Models\Story */

    /**
     * Relationship table
     * @return App\Models\Story\SoStoryData
    */
    public function withStoryData()
    {
        return $this->hasMany('App\Models\Story\SoStoryData', 'user_id');
    }

    /**
     * Relationship table
     * @return App\Models\Story\SoStoryView
    */
    public function withStoryView()
    {
        return $this->hasMany('App\Models\Story\SoStoryView', 'user_id');
    }

    /* DIR > App\Models\User */

    /**
     * Relationship table
     * @return App\Models\User\SoUserBlock
    */
    public function withUserBlock()
    {
        return $this->hasMany('App\Models\User\SoUserBlock', 'user_id');
    }

    /**
     * Relationship table
     * @return App\Models\User\SoUserFriend
    */
    public function withUserFriend()
    {
        return $this->hasMany('App\Models\User\SoUserFriend', 'user_id');
    }

    /**
     * Relationship table
     * @return App\Models\User\SoUserLogActivity
    */
    public function withUserLogActivity()
    {
        return $this->hasMany('App\Models\User\SoUserLogActivity', 'user_id');
    }

    /**
     * Relationship table
     * @return App\Models\User\SoUserMessage
    */
    public function withUserMessage()
    {
        return $this->hasMany('App\Models\User\SoUserMessage', 'user_id');
    }

    /**
     * Relationship table
     * @return App\Models\User\SoUserNotification
    */
    public function withUserNotification()
    {
        return $this->hasMany('App\Models\User\SoUserNotification', 'user_id');
    }

    /**
     * Relationship table
     * @return App\Models\User\SoUserReport
    */
    public function withUserReport()
    {
        return $this->hasMany('App\Models\User\SoUserReport', 'user_id');
    }
}
