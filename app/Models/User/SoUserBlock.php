<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Model;

class SoUserBlock extends Model
{
    protected $table = 'so_user_blocks';
    protected $fillable = [
    	'user_id', 'bloked_user_id'
    ];
}
