import { useScrollProgress } from '../hooks/useScrollProgress'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useTranslation } from 'react-i18next'
import './ScrollProgress.css'

type NavItem = {
    id: string
    numeral: string
}

const items: NavItem[] = [
    { id: 'about', numeral: 'I' },
    { id: 'formazione', numeral: 'II' },
    { id: 'progetti', numeral: 'III' },
    { id: 'stack', numeral: 'IV' },
    { id: 'contatti', numeral: 'V' },
]

function ScrollProgress() {
    const progress = useScrollProgress()
    const { t } = useTranslation()
    const activeId = useScrollSpy(items.map(item => item.id))

    return (
        <div className="scroll-progress" aria-hidden="true">
            <div 
                className="scroll-progress-bar" 
                style={{ width: `${progress}%` }}
            />

            <nav className="scroll-progress-nav">
                {items.map(item => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={activeId === item.id ? 'active' : ''}
                    >
                            
                        <span className="scroll-progress-num">{item.numeral}</span>
                        <span className="scroll-progress-label">{t(`nav.${item.id}`)}</span>
                    </a>
                ))}
            </nav>
        </div>
    )
}

export default ScrollProgress