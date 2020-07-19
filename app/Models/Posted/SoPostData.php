<?php

namespace App\Models\Posted;

use Illuminate\Database\Eloquent\Model;

class SoPostData extends Model
{
    protected $table = 'so_post_data';
    protected $fillable = [
    	'user_id', 'description', 'image', 'video', 'privacy'
    ];
}
