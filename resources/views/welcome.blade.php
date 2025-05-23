<x-layout>
    <div class="container my-5">
        {{-- Sezione BIO --}}
        <div class="row mb-5 align-items-center">
            <div class="col-md-4">
                <img src="{{ asset('images/bugo.jpg') }}" alt="Foto profilo" class="img-fluid rounded-circle">
            </div>
            <div class="col-md-8">
                <h1>Ciao, sono Domenico Foglia 👋</h1>
                <p class="lead">
                    Sviluppatore web appassionato di [Laravel, JavaScript, ecc.]. Creo soluzioni digitali su misura
                    e adoro costruire progetti significativi.
                </p>
            </div>
        </div>

        {{-- Contatti --}}
        <div class="mb-5">
            <h3>Contatti</h3>
            <ul class="list-unstyled">
                <li>Email: <a href="mailto:tuamail@example.com">tuamail@example.com</a></li>
                <li>GitHub: <a href="https://github.com/tuonome" target="_blank">github.com/tuonome</a></li>
                <li>LinkedIn: <a href="https://linkedin.com/in/tuonome" target="_blank">linkedin.com/in/tuonome</a>
                </li>
            </ul>
        </div>

        {{-- Progetti in evidenza --}}
        <div>
            <h3>Progetti in evidenza</h3>
            <div class="row">
                @foreach ($featuredProjects as $project)
                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <img src="{{ asset('storage/' . $project->image) }}" class="card-img-top"
                                alt="{{ $project->title }}">
                            <div class="card-body">
                                <h5 class="card-title">{{ $project->title }}</h5>
                                <p class="card-text">{{ Str::limit($project->description, 100) }}</p>
                                <a href="{{ $project->link }}" target="_blank"
                                    class="btn btn-outline-primary btn-sm">Visita</a>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</x-layout>
