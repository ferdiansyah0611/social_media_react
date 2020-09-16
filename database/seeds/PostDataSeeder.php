<?php

use Illuminate\Database\Seeder;
use App\Models\Posted\SoPostData;

class PostDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 100; $i++) { 
        	SoPostData::create([
        		'user_id' => '1',
        		'description' => 'Article ' . $i,
        		'image' => '["Screenshot (110).png"]',
        		'privacy' => 'public'
        	]);
        }
    }
}
