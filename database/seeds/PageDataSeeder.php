<?php

use Illuminate\Database\Seeder;
use App\Models\Page\SoPageData;

class PageDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 100; $i++) { 
        	SoPageData::create([
        		'user_id' =>  '1',
        		'so_page_category_id' => '1',
        		'name' => 'Page' . $i,
        		'title' => 'Title' . $i,
        		'phone' => '+62895607486361',
        		'email' => 'ferdif9996@gmail.com',
        		'website' => 'www.web.us',
        		'description' => 'Description page ' . $i,
        		'location' => 'Indonesia'
        	]);
        }
    }
}
