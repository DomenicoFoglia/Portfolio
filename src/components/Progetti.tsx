import { projects } from "../content/projects";
import Section from "./Section";
import LikeButton from "./LikeButton";
import { useLikes } from "../hooks/useLikes";
import './Progetti.css'
import { useTranslation } from 'react-i18next'


function Progetti(){
    const { t } = useTranslation();
    const { counts, likedByMe, toggle } = useLikes();

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
                        <div className="project-content">
                            <div className="project-kicker">{t(`progetti.items.${project.id}.kicker`)}</div>
                            <div className="project-head">
                                <h3>{project.name} <span className="arrow">↗</span></h3>
                            </div>
                            <p>{t(`progetti.items.${project.id}.description`)}</p>
                            <div className="project-meta">
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <LikeButton
                                    liked={likedByMe.has(project.id)}
                                    count={counts[project.id] || 0}
                                    onToggle={() => toggle(project.id)}
                                />
                            </div>
                        </div>
                        
                        <div className="project-image">
                            <img
                                src={project.image}
                                alt={`Screenshot di ${project.name}`}
                                loading="lazy"
                            />
                        </div>
                    </a>
                ))}
            </div>
        </Section>
    )
}

export default Progetti