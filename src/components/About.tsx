import Section from './Section'

function About(){
    return (
        <Section 
            id="about"
            numeral="I"
            label="About"
        >
            <p>
                Sono un <strong>Full Stack Developer</strong> con formazione universitaria in informatica e un percorso intensivo Aulab. Lavoro su tutto lo stack: frontend in React e TypeScript, backend in PHP con Laravel, database MySQL. Costruisco applicazioni complete, non solo pagine.
            </p>
            <p>
                Nei miei progetti curo <strong>l'architettura e il ciclo di vita completo</strong>: dalla progettazione dello schema al deploy in produzione su VPS, con Nginx, HTTPS, seed di dati demo. Se un progetto è online, di solito è perché l'ho messo lì io, e mi assicuro che ci resti.
            </p>
            <p>
                Cerco un ruolo dove poter contribuire fin da subito, imparare da un team esperto e continuare a costruire cose che funzionano davvero.
            </p>
        </Section>
    )
}

export default About