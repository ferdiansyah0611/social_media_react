<?php

namespace App\Models\Profile;

use Illuminate\Database\Eloquent\Model;

class SoProfileWork extends Model
{
    protected $table = 'so_profile_works';
    protected $fillable = [
    	'user_id', 'so_page_data_id', 'job', 'location', 'description', 'from', 'to'
    ];
}
