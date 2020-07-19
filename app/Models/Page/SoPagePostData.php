<?php

namespace App\Models\Page;

use Illuminate\Database\Eloquent\Model;

class SoPagePostData extends Model
{
    protected $table = 'so_page_post_data';
    protected $fillable = [
    	'user_id', 'so_page_data_id', 'description', 'image', 'video'
    ];
}
