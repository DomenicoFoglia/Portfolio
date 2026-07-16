import './Nav.css'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useTranslation } from 'react-i18next'

type NavItem = {
    id: string
    numeral: string
}

const items: NavItem[] = [
    { id: 'about', numeral: 'I'},
    { id: 'formazione', numeral: 'II' },
    { id: 'progetti', numeral: 'III'},
    { id: 'stack', numeral: 'IV'},
    { id: 'contatti', numeral: 'V' },
]

function Nav() {
    const activeId = useScrollSpy(items.map(item => item.id));
    const { t } = useTranslation();

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
                            <span className="nav-label">{t(`nav.${item.id}`)}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav