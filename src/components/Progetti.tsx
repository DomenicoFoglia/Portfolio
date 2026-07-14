import { projects} from "../content/projects";
import Section from "./Section";
import './Progetti.css'


function Progetti(){
    return (
        <Section
            id="progetti"
            numeral="III"
            label="Progetti"
            title="Cose che ho costruito."
        >
            <div className="projects">
                {projects.map(project => (
                    <a key={project.id} href={project.url} className="project" target="_blank" rel="noopener noreferrer">
                        <div className="project-kicker">{project.kicker}</div>
                        <div className="project-head">
                            <h3>{project.name} <span className="arrow">↗</span></h3>
                        </div>
                        <p>{project.description}</p>
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