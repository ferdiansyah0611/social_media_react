<?php

namespace App\Models\Profile;

use Illuminate\Database\Eloquent\Model;

class SoProfile extends Model
{
    protected $table = 'so_profiles';
    protected $fillable = [
    	'user_id', 'cover', 'bio', 'relationship', 'hometown'
    ];
}
