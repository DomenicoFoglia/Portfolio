<div>
    {{-- Messaggio di successo --}}
    @if (session()->has('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif

    {{-- Form Livewire --}}
    <form wire:submit.prevent="save" enctype="multipart/form-data">
        {{-- Titolo --}}
        <div class="mb-3">
            <label class="form-label">Titolo</label>
            <input type="text" class="form-control" wire:model="title">
            @error('title')
                <span class="text-danger">{{ $message }}</span>
            @enderror
        </div>

        {{-- Descrizione --}}
        <div class="mb-3">
            <label class="form-label">Descrizione</label>
            <textarea class="form-control" wire:model="description" rows="4"></textarea>
            @error('description')
                <span class="text-danger">{{ $message }}</span>
            @enderror
        </div>

        {{-- Link --}}
        <div class="mb-3">
            <label class="form-label">Link (opzionale)</label>
            <input type="url" class="form-control" wire:model="link">
            @error('link')
                <span class="text-danger">{{ $message }}</span>
            @enderror
        </div>

        {{-- Categoriue --}}
        <div class="mb-3">
            <label for="category" class="form-label">Categoria</label>
            <select wire:model="category_id" class="form-select" id="category">
                <option value="">-- Seleziona una categoria --</option>
                @foreach ($categories as $category)
                    <option value="{{ $category->id }}">{{ $category->name }}</option>
                @endforeach
            </select>
        </div>

        {{-- HAshtagh --}}
        <div class="mb-3">
            <label class="form-label">Hashtag</label>
            <div>
                @foreach ($hashtags as $hashtag)
                    <div class="form-check form-check-inline">
                        <input wire:model="selectedHashtags" class="form-check-input" type="checkbox"
                            id="hashtag{{ $hashtag->id }}" value="{{ $hashtag->id }}">
                        <label class="form-check-label" for="hashtag{{ $hashtag->id }}">
                            #{{ $hashtag->name }}
                        </label>
                    </div>
                @endforeach
            </div>
        </div>

        {{-- Immagine --}}
        <div class="mb-3">
            <label class="form-label">Immagine (opzionale)</label>
            <input type="file" class="form-control" wire:model="image">
            @error('image')
                <span class="text-danger">{{ $message }}</span>
            @enderror

            {{-- Preview immagine se caricata --}}
            @if ($image)
                <div class="mt-2">
                    <p>Anteprima:</p>
                    <img src="{{ $image->temporaryUrl() }}" alt="Preview" class="img-fluid" style="max-width: 300px;">
                </div>
            @endif
        </div>

        <button type="submit" class="btn btn-primary mb-3">Salva Progetto</button>
    </form>
</div>
