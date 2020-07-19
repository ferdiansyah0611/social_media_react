<?php

namespace App\Models\Posted;

use Illuminate\Database\Eloquent\Model;

class SoPostSubComment extends Model
{
    protected $table = 'so_post_sub_comments';
    protected $fillable = [
    	'user_id', 'so_post_comment_id', 'comment', 'image', 'video'
    ];
}
