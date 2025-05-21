<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Project::create([
            'title' => 'Portfolio Laravel',
            'description' => 'Sito portfolio personale creato con Laravel.',
            'link' => 'https://esempio.com'
        ]);

        Project::create([
            'title' => 'App Todo List',
            'description' => 'Applicazione per gestire attività quotidiane.',
            'link' => null
        ]);
    }
}
