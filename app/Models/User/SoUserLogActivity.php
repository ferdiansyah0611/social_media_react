<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Model;

class SoUserLogActivity extends Model
{
    protected $table = 'so_user_log_activities';
    protected $fillable = [
    	'user_id', 'type', 'activity'
    ];
}
