<?php

namespace App\Models\Group;

use Illuminate\Database\Eloquent\Model;

class SoGroupPostLike extends Model
{
    protected $table = 'so_group_post_likes';
    protected $fillable = [
    	'user_id', 'so_group_data_id', 'like'
    ];
}
