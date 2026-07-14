import Section from "./Section"
import './Stack.css'



type CategoriaStack = {
    label: string;
    items: string[];
}

const categories: CategoriaStack[] = [
    {
        label: 'Frontend',
        items: ['React', 'JavaScript', 'TypeScript', 'Vite', 'Zustand', 'Recharts', 'Bootstrap', 'HTML', 'CSS']
    },

    {
        label: 'Backend',
        items: ['PHP', 'Laravel', 'Sanctum', 'REST API', 'MySQL', 'SQL']
    },

    {
        label: 'Tools',
        items: ['Git', 'GitHub', 'VS Code']
    },

    {
        label:'Altro',
        items: ['C#', 'C++', 'Dart', 'WordPress', 'Agile/Scrum', 'Gemini AI']
    }
]

function Stack(){
    return (
        <Section
            id='stack'
            numeral='IV'
            label='Stack'
            title='Strumenti che uso ogni giorno.'
        >
            <div className="stack-list">
                {categories.map(category => (
                    <div key={category.label} className="stack-row">
                        <div className="stack-label">{category.label}</div>
                        <div className="stack-items">
                            {category.items.map(item => (
                                <span key={item}>{item}</span>
                            ))}
                        </div>
                    </div>
                    
                ))}
            </div>
        </Section>
    )
    
}

export default Stack