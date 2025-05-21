<x-layout>
    <h1>Portfolio - Progetti</h1>

    @if ($projects->isEmpty())
        <p>Nessun progetto presente.</p>
    @else
        <ul>
            @foreach ($projects as $project)
                <li>
                    <strong>{{ $project->title }}</strong><br>
                    {{ $project->description }}<br>
                    @if ($project->link)
                        <a href="{{ $project->link }}" target="_blank">Visita</a>
                    @endif
                    <hr>
                </li>
            @endforeach
        </ul>
    @endif
</x-layout>
