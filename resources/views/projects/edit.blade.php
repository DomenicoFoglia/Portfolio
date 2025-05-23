<x-layout>
    <div class="container my-5">
        <h1 class="mb-4">Modifica Progetto</h1>

        @if (session('success'))
            <div class="alert alert-success">{{ session('success') }}</div>
        @endif

        <form action="{{ route('projects.update', $project) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')

            <div class="mb-3">
                <label class="form-label">Titolo</label>
                <input type="text" name="title" class="form-control" value="{{ old('title', $project->title) }}">
                @error('title')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>

            <div class="mb-3">
                <label class="form-label">Descrizione</label>
                <textarea name="description" class="form-control">{{ old('description', $project->description) }}</textarea>
                @error('description')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>

            <div class="mb-3">
                <label class="form-label">Link</label>
                <input type="url" name="link" class="form-control" value="{{ old('link', $project->link) }}">
                @error('link')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>

            <div class="mb-3">
                <label class="form-label">Categoria</label>
                <select name="category_id" class="form-select">
                    <option value="">-- Seleziona una categoria --</option>
                    @foreach ($categories as $category)
                        <option value="{{ $category->id }}"
                            {{ old('category_id', $project->category_id) == $category->id ? 'selected' : '' }}>
                            {{ $category->name }}
                        </option>
                    @endforeach
                </select>
                @error('category_id')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>

            <div class="mb-3">
                <label class="form-label">Hashtag</label>
                <div class="form-check">
                    @foreach ($hashtags as $hashtag)
                        <div>
                            <input type="checkbox" name="hashtags[]" value="{{ $hashtag->id }}"
                                {{ in_array($hashtag->id, old('hashtags', $project->hashtags->pluck('id')->toArray())) ? 'checked' : '' }}>
                            <label>#{{ $hashtag->name }}</label>
                        </div>
                    @endforeach
                </div>
                @error('hashtags')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>


            <div class="mb-3">
                <label class="form-label">Immagine</label>
                <input type="file" name="image" class="form-control">
                @if ($project->image)
                    <img src="{{ asset('storage/' . $project->image) }}" class="img-fluid mt-2"
                        style="max-width: 300px;">
                @endif
                @error('image')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>

            <button type="submit" class="btn btn-primary">Salva Modifiche</button>
            <a href="{{ route('projects.index') }}" class="btn btn-secondary">Annulla</a>
        </form>
    </div>
</x-layout>
