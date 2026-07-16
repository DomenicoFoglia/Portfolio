import Section from './Section'
import { Trans } from 'react-i18next'

function About() {
    return (
        <Section
            id="about"
            numeral="I"
            label="About"
        >
            <p>
                <Trans i18nKey="about.p1" components={{ 1: <strong /> }} />
            </p>
            <p>
                <Trans i18nKey="about.p2" />
            </p>
            <p>
                <Trans i18nKey="about.p3" />
            </p>
            <p>
                <Trans i18nKey="about.p4" />
            </p>
        </Section>
    )
}

export default About