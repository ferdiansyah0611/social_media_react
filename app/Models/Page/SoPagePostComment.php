<?php

namespace App\Models\Page;

use Illuminate\Database\Eloquent\Model;

class SoPagePostComment extends Model
{
    protected $table = 'so_page_post_comments';
    protected $fillable = [
    	'user_id', 'so_page_data_id', 'comment', 'image', 'video'
    ];
}
