<?php

namespace App\Models\Group;

use Illuminate\Database\Eloquent\Model;

class SoGroupRole extends Model
{
    protected $table = 'so_group_roles';
    protected $fillable = [
    	'user_id', 'so_group_data_id', 'role'
    ];
}
