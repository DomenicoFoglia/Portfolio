import './Nav.css'
import { useScrollSpy } from '../hooks/useScrollSpy'

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
    const activeId = useScrollSpy(items.map(item => item.id))

    return (
        <nav className="nav" aria-label="Sezioni">
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            className={activeId === item.id ? 'active' : ''}
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