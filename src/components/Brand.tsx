import './Brand.css'

function Brand() {
    return (
        <div className="brand">
            <h1 className="brand-name">
                Domenico<br />Foglia
            </h1>
            <div className="brand-role">Full Stack Developer</div>
            <p className="brand-tagline">
                Costruisco applicazioni web complete, dal database al deploy.
                Laravel, React, TypeScript. Da Catanzaro, ovunque serva.
            </p>
            <div className="brand-status">
                <span className="brand-status-dot" aria-hidden="true"></span>
                <span>Disponibile per nuove opportunità</span>
            </div>
        </div>
    )
}

export default Brand