<?php

namespace App\Models\Story;

use Illuminate\Database\Eloquent\Model;

class SoStoryView extends Model
{
    protected $table = 'so_story_views';
    protected $fillable = [
    	'user_id', 'so_story_data_id'
    ];
}
