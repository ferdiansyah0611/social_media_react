<?php

namespace App\Models\Group;

use Illuminate\Database\Eloquent\Model;

class SoGroupPostCommentLike extends Model
{
    protected $table = 'so_group_post_comment_likes';
    protected $fillable = [
    	'user_id', 'so_group_post_comment_id', 'like'
    ];
}
