import Section from "./Section"
import './Stack.css'
import { useTranslation } from 'react-i18next'

type CategoriaStack = {
    id: string;
    items: string[];
}

const categories: CategoriaStack[] = [
    {
        id: 'frontend',
        items: ['React', 'JavaScript', 'TypeScript', 'Vite', 'Zustand', 'Recharts', 'Bootstrap', 'HTML', 'CSS']
    },

    {
        id: 'backend',
        items: ['PHP', 'Laravel', 'Sanctum', 'REST API', 'MySQL', 'SQL']
    },

    {
        id: 'tools',
        items: ['Git', 'GitHub', 'VS Code']
    },

    {
        id: 'other',
        items: ['C#', 'C++', 'Dart', 'WordPress', 'Agile/Scrum', 'Gemini AI']
    }
]

function Stack(){
    const { t } = useTranslation();

    return (
        <Section
            id='stack'
            numeral='IV'
            label={t('nav.stack')}
            title={t('stack.title')}
        >
            <div className="stack-list">
                {categories.map(category => (
                    <div key={category.id} className="stack-row">
                        <div className="stack-label">{t(`stack.categories.${category.id}`)}</div>
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