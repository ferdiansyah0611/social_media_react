<?php

namespace App\Models\Page;

use Illuminate\Database\Eloquent\Model;

class SoPageData extends Model
{
    protected $table = 'so_page_data';
    protected $fillable = [
    	'user_id', 'so_page_category_id', 'name', 'title', 'phone', 'email', 'website', 'description', 'location'
    ];
}
