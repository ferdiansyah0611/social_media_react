<?php

namespace App\Models\Group;

use Illuminate\Database\Eloquent\Model;

class SoGroupPostSubComment extends Model
{
    protected $table = 'so_group_post_sub_comments';
    protected $fillable = [
    	'user_id', 'so_group_category_id', 'comment', 'image', 'video'
    ];
}
