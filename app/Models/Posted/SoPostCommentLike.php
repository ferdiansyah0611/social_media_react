<?php

namespace App\Models\Posted;

use Illuminate\Database\Eloquent\Model;

class SoPostCommentLike extends Model
{
    protected $table = 'so_post_comment_likes';
    protected $fillable = [
    	'user_id', 'so_post_comment_id', 'like'
    ];
}
