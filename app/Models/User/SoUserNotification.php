<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Model;

class SoUserNotification extends Model
{
    protected $table = 'so_user_notifications';
    protected $fillable = [
    	'user_id', 'message', 'status'
    ];
}
