<?php

namespace App\Livewire;

use App\Models\Project;
use Livewire\Component;
use Livewire\WithFileUploads;

class ProjectForm extends Component
{
    use WithFileUploads;

    public $title, $description, $link, $image;
    public $category_id;
    public $categories;
    public $selectedHashtags = [];
    public $hashtags;
    public $is_featured = false;

    protected $rules = [
        'title' => 'required|string|max:255',
        'description' => 'required|string',
        'link' => 'nullable|url',
        'image' => 'nullable|image|max:1024',
        'is_featured' => 'boolean',
    ];

    public function save()
    {
        $this->validate();
        // dd($this->is_featured);

        $imagePath = null;
        if ($this->image) {
            $imagePath = $this->image->store('projects', 'public');
        }

        $project = Project::create([
            'title' => $this->title,
            'description' => $this->description,
            'link' => $this->link,
            'image' => $imagePath,
            'category_id' => $this->category_id,
            'is_featured' => $this->is_featured,
        ]);

        session()->flash('success', 'Progetto aggiunto con successo!');

        $project->hashtags()->sync($this->selectedHashtags);

        $this->reset(['title', 'description', 'link', 'image', 'selectedHashtags', 'is_featured']);
    }

    public function render()
    {
        $this->categories = \App\Models\Category::all();
        $this->hashtags = \App\Models\Hashtag::all();
        return view('livewire.project-form');
    }
}
