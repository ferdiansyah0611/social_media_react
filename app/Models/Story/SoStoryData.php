<?php

namespace App\Models\Story;

use Illuminate\Database\Eloquent\Model;

class SoStoryData extends Model
{
    protected $table = 'so_story_data';
    protected $fillable = [
    	'user_id', 'image', 'video'
    ];
}
