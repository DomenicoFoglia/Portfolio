<?php

namespace App\Models;

use App\Models\Project;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function projects()
    {
        return $this->hasMany(Project::class);
    }
}
