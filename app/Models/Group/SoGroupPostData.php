<?php

namespace App\Models\Group;

use Illuminate\Database\Eloquent\Model;

class SoGroupPostData extends Model
{
    protected $table = 'so_group_post_data';
    protected $fillable = [
    	'user_id', 'so_group_category_id', 'description', 'image', 'video'
    ];
}
