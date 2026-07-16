import Section from "./Section";
import './Contatti.css'
import { Trans, useTranslation } from 'react-i18next'

function Contatti(){
    const { t } = useTranslation();

    return (
        <Section
            id='contatti'
            numeral='V'
            label={t('nav.contatti')}
            title={t('contatti.title')}
        >

            <div className="contact-block">
                <p>
                    <Trans i18nKey="contatti.p1" components={{ 1: <strong />, 2: <strong /> }} />
                </p>
                <p>{t('contatti.p2')}</p>
                <a href="mailto:foglia.dmnc@gmail.com" className="contact-cta">
                    foglia.dmnc@gmail.com 
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                </a>
            </div>

            <div className="colophon">
                <div>{t('contatti.colophonLeft')}<a href="tel:+393888136696">+39 388 813 66 96 </a></div>
                <div>{t('contatti.colophonRight')} </div>
            </div>
        </Section>
    )
}

export default Contatti