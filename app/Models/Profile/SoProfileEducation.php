<?php

namespace App\Models\Profile;

use Illuminate\Database\Eloquent\Model;

class SoProfileEducation extends Model
{
    protected $table = 'so_profile_education';
    protected $fillable = [
    	'user_id', 'so_page_data_id', 'concentration', 'graduate', 'from', 'to', 'privacy'
    ];
}
