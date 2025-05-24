<x-layout>
    {{-- HERO SECTION --}}
    <section id="hero" class="vh-100 d-flex align-items-center text-center custom-hero-bg">
        <div class="container">
            <h1 class="animated-text fw-bold mb-3">Ciao, <br> sono </h1>
            <h2 class="display-5">
                <span id="typed-text"></span>
            </h2>
            <div class="mt-4">
                <a href="#portfolio" class="btn btn-outline-light btn-lg me-3">Scopri i miei progetti</a>
                <a href="#contact" class="btn btn-light btn-lg">Contattami</a>
            </div>
        </div>
    </section>
    <div class="bolla">

    </div>


    {{-- ABOUT SECTION --}}
    <section id="about" class="py-5 bg-light">
        <div class="container d-flex flex-column flex-md-row align-items-center">
            <div class="col-md-4 mb-4 mb-md-0 text-center">
                <img src="{{ asset('images/bugo.jpg') }}" alt="Foto profilo" class="img-fluid rounded-circle shadow"
                    width="250">
            </div>
            <div class="col-md-8 ps-md-5">
                <h2 class="fw-bold">Chi sono</h2>
                <p class="lead mt-3">
                    Sono uno sviluppatore web con una passione per Laravel, JavaScript e tutto ciò che è digitale. Amo
                    costruire soluzioni personalizzate che uniscono funzionalità e design.
                </p>
            </div>
        </div>
    </section>

    {{-- PORTFOLIO SECTION --}}
    <section id="portfolio" class="py-5 bg-white">
        <div class="container text-center">
            <h2 class="fw-bold mb-5">Progetti in evidenza</h2>
            <div class="row">
                @foreach ($featuredProjects as $project)
                    <div class="col-md-4 mb-4">
                        <div class="card border-0 shadow h-100">
                            <img src="{{ asset('storage/' . $project->image) }}" class="card-img-top"
                                alt="{{ $project->title }}">
                            <div class="card-body">
                                <h5 class="card-title">{{ $project->title }}</h5>
                                <p class="card-text">{{ Str::limit($project->description, 80) }}</p>
                                <a href="{{ $project->link }}" class="btn btn-outline-primary btn-sm"
                                    target="_blank">Visita</a>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    {{-- CONTACT SECTION --}}
    <section id="contact" class="py-5 bg-light">
        <div class="container text-center">
            <h2 class="fw-bold mb-4">Contattami</h2>
            <p class="mb-3">Per collaborazioni o domande, non esitare a contattarmi:</p>
            <ul class="list-unstyled">
                <li>Email: <a href="mailto:tuamail@example.com">tuamail@example.com</a></li>
                <li>GitHub: <a href="https://github.com/tuonome" target="_blank">github.com/tuonome</a></li>
                <li>LinkedIn: <a href="https://linkedin.com/in/tuonome" target="_blank">linkedin.com/in/tuonome</a></li>
            </ul>
        </div>
    </section>

    <script>
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>

    @push('scripts')
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                new Typed('#typed-text', {
                    strings: [
                        "Domenico Foglia 👋",
                        "Sviluppatore Web 💻",
                    ],
                    typeSpeed: 50,
                    backSpeed: 30,
                    backDelay: 1500,
                    loop: true
                });
            });
        </script>
    @endpush
</x-layout>
