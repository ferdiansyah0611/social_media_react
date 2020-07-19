<?php

namespace App\Models\Posted;

use Illuminate\Database\Eloquent\Model;

class SoPostComment extends Model
{
    protected $table = 'so_post_comments';
    protected $fillable = [
    	'user_id', 'comment', 'image', 'video'
    ];
}
