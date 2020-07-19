<?php

namespace App\Models\Group;

use Illuminate\Database\Eloquent\Model;

class SoGroupData extends Model
{
    protected $table = 'so_group_data';
    protected $fillable = [
    	'so_group_category_id', 'privacy', 'about', 'location'
    ];
}
