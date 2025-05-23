<?php

namespace Database\Seeders;

use App\Models\Hashtag;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class HashtagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $hashtags = ['PHP', 'Laravel', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Design', 'Backend', 'Frontend', 'AOS'];

        foreach ($hashtags as $tag) {
            Hashtag::firstOrCreate(['name' => $tag]);
        }
    }
}
