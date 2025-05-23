<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;

Route::get('/', function () {
    return view('welcome');
})->name('home');

//Evitiamo di scrivere tutte le rotte CRUD utilizzando la riga sotto
Route::middleware(['auth'])->group(function () {
    Route::resource('projects', ProjectController::class);
});

Route::get('/projects/{project}/edit-livewire', function (\App\Models\Project $project) {
    return view('projects.edit-livewire', ['project' => $project]);
})->middleware('auth')->name('projects.edit-livewire');
