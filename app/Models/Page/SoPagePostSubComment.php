<?php

namespace App\Models\Page;

use Illuminate\Database\Eloquent\Model;

class SoPagePostSubComment extends Model
{
    protected $table = 'so_page_post_sub_comments';
    protected $fillable = [
    	'user_id', 'so_page_post_comment_id', 'comment', 'image', 'video'
    ];
}
