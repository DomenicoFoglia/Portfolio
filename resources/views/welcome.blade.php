<x-layout>
    {{-- HERO SECTION --}}
    <section id="hero" class="vh-100 d-flex align-items-center text-center custom-hero-bg position-relative">

        <canvas id="hero-canvas"></canvas>

        <div class="container position-relative z-1">
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

    {{-- <script>
        const bolla = document.querySelector('.bolla');
        const contenitore = document.getElementById('hero');

        let x = 0,
            y = 0;
        let dx = 2,
            dy = 2;

        function randomColor() {
            const r = Math.floor(Math.random() * 200 + 55);
            const g = Math.floor(Math.random() * 200 + 55);
            const b = Math.floor(Math.random() * 200 + 55);
            return `rgba(${r}, ${g}, ${b}, 0.4)`;
        }

        function aggiorna() {
            const width = contenitore.offsetWidth;
            const height = contenitore.offsetHeight;

            x += dx;
            y += dy;

            if (x + bolla.offsetWidth >= width || x <= 0) {
                dx *= -1;
                bolla.style.backgroundColor = randomColor();
            }

            if (y + bolla.offsetHeight >= height || y <= 0) {
                dy *= -1;
                bolla.style.backgroundColor = randomColor();
            }

            bolla.style.left = x + 'px';
            bolla.style.top = y + 'px';

            requestAnimationFrame(aggiorna);
        }


        contenitore.addEventListener('click', (e) => {
            const rect = contenitore.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;

            const deltaX = clickX - (x + 25);
            const deltaY = clickY - (y + 25);
            const distanza = Math.sqrt(deltaX ** 2 + deltaY ** 2);

            dx = (deltaX / distanza) * 5;
            dy = (deltaY / distanza) * 5;
        });

        aggiorna();
    </script> --}}

    <script>
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');

        let particlesArray = [];
        const PARTICLE_COUNT = 16; // Numero di loghi da mostrare

        // Carica le immagini dei loghi
        const images = [];
        const imageSources = [
            '/images/heroIcons/css.png',
            '/images/heroIcons/javascript.png',
            '/images/heroIcons/html.png',
            '/images/heroIcons/laravel.png',
            '/images/heroIcons/php.png',
        ];

        // Funzione per caricare tutte le immagini e poi iniziare
        function loadImages(sources, callback) {
            let loadedImages = 0;
            for (let i = 0; i < sources.length; i++) {
                images[i] = new Image();
                images[i].src = sources[i];
                images[i].onload = () => {
                    loadedImages++;
                    if (loadedImages === sources.length) {
                        callback();
                    }
                }
            }
        }

        // Classe particella (logo)
        class Particle {
            constructor(image) {
                this.image = image;
                this.size = 40 + Math.random() * 20;
                this.x = Math.random() * (canvas.width - this.size);
                this.y = Math.random() * (canvas.height - this.size);
                this.speedX = (Math.random() - 0.5) * 1.5;
                this.speedY = (Math.random() - 0.5) * 1.5;

                this.opacity = 0; // parte invisibile
                this.fadeSpeed = 0.02 + Math.random() * 0.02; // fade-in graduale
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                let bounced = false;

                if (this.x <= 0 || this.x + this.size >= canvas.width) {
                    this.speedX *= -1;
                    bounced = true;
                }
                if (this.y <= 0 || this.y + this.size >= canvas.height) {
                    this.speedY *= -1;
                    bounced = true;
                }

                if (bounced) {
                    // cambia immagine e resetta opacità
                    this.image = images[Math.floor(Math.random() * images.length)];
                    this.opacity = 0;
                }

                // aumenta opacità gradualmente fino a 1
                if (this.opacity < 1) {
                    this.opacity += this.fadeSpeed;
                }
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = Math.min(this.opacity, 1);
                ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
                ctx.restore();
            }
        }


        function init() {
            particlesArray = [];
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                // Scegli un'immagine random tra quelle caricate
                const img = images[Math.floor(Math.random() * images.length)];
                particlesArray.push(new Particle(img));
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }

        // Setta dimensioni canvas e avvia animazione
        function setupCanvas() {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
            init();
            animate();
        }

        // Inizializza tutto quando le immagini sono caricate
        loadImages(imageSources, () => {
            setupCanvas();
        });

        // Ridimensiona canvas al resize della finestra
        window.addEventListener('resize', () => {
            setupCanvas();
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
