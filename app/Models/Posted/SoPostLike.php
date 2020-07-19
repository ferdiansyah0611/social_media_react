<?php

namespace App\Models\Posted;

use Illuminate\Database\Eloquent\Model;

class SoPostLike extends Model
{
    protected $table = 'so_post_likes';
    protected $fillable = [
    	'user_id', 'sc_post_data_id', 'like'
    ];
}
