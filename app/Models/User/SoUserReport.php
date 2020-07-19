<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Model;

class SoUserReport extends Model
{
    protected $table = 'so_user_reports';
    protected $fillable = [
    	'user_id', 'report_user_id'
    ];
}
