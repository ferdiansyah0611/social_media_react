<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Model;

class SoUserFriend extends Model
{
    protected $table = 'so_user_friends';
    protected $fillable = [
    	'user_id', 'friends_user_id'
    ];
}
