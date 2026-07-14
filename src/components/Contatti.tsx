import Section from "./Section";
import './Contatti.css'

function Contatti(){
    return (
        <Section
            id='contatti'
            numeral='V'
            label='Contatti'
            title='Parliamone.'
        >

            <div className="contact-block">
                <p>Sto cercando un ruolo da <strong>Full Stack Developer</strong> o <strong>Backend / Frontend Developer</strong>. Disponibile in presenza, ibrido o da remoto. Aperto a trasferimenti in tutta Italia.</p>
                <p>Il modo migliore per raggiungermi è via email o LinkedIn, rispondo entro 24 ore</p>
                <a href="mailto:foglia.dmnc@gmail.com" className="contact-cta">
                    foglia.dmnc@gmail.com 
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                </a>
            </div>

            <div className="colophon">
                <div>Domenico Foglia · Catanzaro, IT <a href="tel:+393888136696">+39 388 813 66 96 </a></div>
                <div>Built with React & Vite · Hosted on Hetzner </div>
            </div>


        </Section>

    )
}

export default Contatti