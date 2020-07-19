<?php

namespace App\Models\Profile;

use Illuminate\Database\Eloquent\Model;

class SoProfileAvatar extends Model
{
    protected $table = 'so_profile_avatars';
    protected $fillable = [
    	'user_id', 'avatar'
    ];
}
