<?php

namespace App\Models\Page;

use Illuminate\Database\Eloquent\Model;

class SoPageFollow extends Model
{
    protected $table = 'so_page_follows';
    protected $fillable = [
    	'user_id', 'so_page_data_id'
    ];
}
