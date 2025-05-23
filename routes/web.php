<?php

use App\Models\Project;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;

Route::get('/', function () {
    $featuredProjects = Project::where('is_featured', true)->take(3)->get();
    return view('welcome', [
        'featuredProjects' => $featuredProjects
    ]);
})->name('home');

//Evitiamo di scrivere tutte le rotte CRUD utilizzando la riga sotto
Route::middleware(['auth'])->group(function () {
    Route::resource('projects', ProjectController::class);
});

Route::get('/projects/{project}/edit-livewire', function (\App\Models\Project $project) {
    return view('projects.edit-livewire', ['project' => $project]);
})->middleware('auth')->name('projects.edit-livewire');
