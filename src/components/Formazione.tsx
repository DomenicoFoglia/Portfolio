import Section from "./Section";
import './Formazione.css'
import { useTranslation } from 'react-i18next'

type EducationItem = {
    id: string
    year?: string
}

const items: EducationItem[] = [
    { id: 'aulab', year: '2024 / 25' },
    { id: 'unical' },
]

function Formazione(){
    const { t } = useTranslation();

    return (
        <Section
            id='formazione'
            numeral= 'II'
            label= {t('nav.formazione')}
            title= {t('formazione.title')}
        >
            <div className="edu-list">
                {items.map(item => 
                    <div key = {item.id} className="edu-item">
                        {item.year && <div className="edu-year">{item.year}</div>}
                        <h3>{t(`formazione.items.${item.id}.title`)}</h3>
                        <div className="edu-school">{t(`formazione.items.${item.id}.school`)}</div>
                        <p>{t(`formazione.items.${item.id}.description`)}</p>
                    </div>
                )}
            </div>
        </Section>
    )
}

export default Formazione;