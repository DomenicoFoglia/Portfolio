import { projects} from "../content/projects";
import Section from "./Section";
import './Progetti.css'
import { useTranslation } from 'react-i18next'


function Progetti(){
    const { t } = useTranslation();

    return (
        <Section
            id="progetti"
            numeral="III"
            label={t('nav.progetti')}
            title={t('progetti.title')}
        >
            <div className="projects">
                {projects.map(project => (
                    <a key={project.id} href={project.url} className="project" target="_blank" rel="noopener noreferrer">
                        <div className="project-kicker">{t(`progetti.items.${project.id}.kicker`)}</div>
                        <div className="project-head">
                            <h3>{project.name} <span className="arrow">↗</span></h3>
                        </div>
                        <p>{t(`progetti.items.${project.id}.description`)}</p>
                        <div className="project-meta">
                            {project.tags.map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </Section>


    )
}

export default Progetti