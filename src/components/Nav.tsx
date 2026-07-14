import './Nav.css'

type NavItem = {
    id: string
    numeral: string
    label: string
}

const items: NavItem[] = [
    { id: 'about', numeral: 'I', label: 'About' },
    { id: 'formazione', numeral: 'II', label: 'Formazione' },
    { id: 'progetti', numeral: 'III', label: 'Progetti' },
    { id: 'stack', numeral: 'IV', label: 'Stack' },
    { id: 'contatti', numeral: 'V', label: 'Contatti' },
]

function Nav() {
    return (
        <nav className="nav" aria-label="Sezioni">
            <ul>
                {items.map((item, i) => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            className={i === 0 ? 'active' : ''}
                        >
                            <span className="nav-num">{item.numeral}</span>
                            <span className="nav-label">{item.label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav