import Section from "./Section";
import './Formazione.css'

type EducationItem = {
    year?: string;
    title: string;
    school: string;
    description: string;
}

const items: EducationItem[] = [
    {
        year: '2024 / 25',
        title: 'Corso Full Stack Developer', 
        school: 'Universitas Mercatorum · Aulab Hackademy',
        description: 'Formazione intensiva su HTML, CSS, JavaScript, PHP, Laravel, SQL e React. Sviluppo di applicazioni complete in ambiente Agile/Scrum.'
    },

    {
        title: 'Corso di Laurea in Informatica', 
        school: 'Università della Calabria · percorso interrotto',
        description: 'Programmazione ad oggetti, algoritmi, basi di dati, matematica discreta, architettura dei sistemi. Fondamenta solide su cui il resto si è costruito.'
    },

]

function Formazione(){
    return (
        <Section
            id='formazione'
            numeral= 'II'
            label= 'Formazione'
            title= 'Come sono arrivato qui.'
        >
            <div className="edu-list">
                {items.map(item => 
                    <div key = {item.title} className="edu-item">
                        {item.year && <div className="edu-year">{item.year}</div>}
                        <h3>{item.title}</h3>
                        <div className="edu-school">{item.school}</div>
                        <p>{item.description}</p>
                    </div>
                )}
            </div>
        </Section>
    )
}

export default Formazione;