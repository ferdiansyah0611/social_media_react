<?php

namespace App\Models\Page;

use Illuminate\Database\Eloquent\Model;

class SoPagePostLike extends Model
{
    protected $table = 'so_page_post_likes';
    protected $fillable = [
    	'user_id', 'so_page_post_data_id', 'like'
    ];
}
