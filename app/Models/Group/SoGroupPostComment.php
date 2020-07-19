<?php

namespace App\Models\Group;

use Illuminate\Database\Eloquent\Model;

class SoGroupPostComment extends Model
{
    protected $table = 'so_group_post_comments';
    protected $fillable = [
    	'user_id', 'so_group_data_id', 'like', 'comment', 'image', 'video'
    ];
}
