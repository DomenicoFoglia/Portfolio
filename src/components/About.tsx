import Section from './Section'
import { Trans, useTranslation } from 'react-i18next'
import './About.css'

function About() {
    const { t } = useTranslation();

    return (
        <Section
            id="about"
            numeral="I"
            label="About"
        >
            <p className="p-note">
                <Trans i18nKey="about.p1" components={{ 1: <strong /> }} />
                <span className="marginalia">{t('about.note1')}</span>
            </p>
            <p className="p-note">
                <Trans i18nKey="about.p2" />
                <span className="marginalia">{t('about.note2')}</span>
            </p>
            <p className="p-note">
                <Trans i18nKey="about.p3" />
                <span className="marginalia">{t('about.note3')}</span>
            </p>
            <p className="p-note">
                <Trans i18nKey="about.p4" />
                <span className="marginalia">{t('about.note4')}</span>
            </p>
        </Section>
    )
}

export default About