<x-layout>
    @if (session('success'))
        <div class="alert alert-success">{{ session('success') }}</div>
    @endif
    <div class="container my-5">
        <h1 class="mb-4">Portfolio - Progetti</h1>

        <button id="toggleFormBtn" class="btn btn-secondary mb-4">Aggiungi un nuovo Progetto</button>

        <div id="formContainer" style="display:none;">
            @livewire('project-form')
        </div>


        @if ($projects->isEmpty())
            <div class="alert alert-info">Nessun progetto presente.</div>
        @else
            <div class="list-group">
                @foreach ($projects as $project)
                    <div class="list-group-item">
                        <h5 class="mb-1">{{ $project->title }}</h5>

                        <p><strong>Categoria:</strong> {{ $project->category ? $project->category->name : 'Nessuna' }}
                        </p>

                        <p>
                            <strong>Hashtag:</strong>
                            @forelse ($project->hashtags as $hashtag)
                                <span class="badge bg-primary">#{{ $hashtag->name }}</span>
                            @empty
                                Nessuno
                            @endforelse
                        </p>

                        <p class="mb-1">{{ $project->description }}</p>
                        <img src="{{ asset('storage/' . $project->image) }}" alt="{{ $project->title }}"
                            class="img-fluid mb-3" style="max-width: 300px;">

                        @if ($project->link)
                            <a href="{{ $project->link }}" target="_blank" class="btn btn-sm btn-outline-secondary">
                                Visita
                            </a>
                        @endif

                        <div class="mt-2">
                            <a href="{{ route('projects.edit', $project) }}" class="btn btn-sm btn-warning">Modifica</a>

                            <form action="{{ route('projects.destroy', $project) }}" method="POST" class="d-inline"
                                onsubmit="return confirm('Sei sicuro di voler eliminare questo progetto?');">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-sm btn-danger">Elimina</button>
                            </form>
                        </div>
                    </div>
                @endforeach
            </div>
        @endif
    </div>
    <script>
        const btn = document.getElementById('toggleFormBtn');
        const form = document.getElementById('formContainer');

        btn.addEventListener('click', () => {
            if (form.style.display === 'none') {
                form.style.display = 'block';
                btn.textContent = 'Nascondi Form';
            } else {
                form.style.display = 'none';
                btn.textContent = 'Aggiungi un nuovo Progetto';
            }
        });
    </script>
</x-layout>
