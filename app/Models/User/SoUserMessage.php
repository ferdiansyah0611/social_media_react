<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Model;

class SoUserMessage extends Model
{
    protected $table = 'so_user_messages';
    protected $fillable = [
    	'user_id', 'to_user_id', 'message', 'asset', 'like'
    ];
}
