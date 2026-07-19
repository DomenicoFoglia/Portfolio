import './SideFooter.css'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../hooks/useTheme';

function SideFooter() {
    const { i18n } = useTranslation();
    const { theme, toggleTheme } = useTheme();

    const changeLang = (lang: 'it' | 'en') => {
        i18n.changeLanguage(lang)
    }

    return (
        <div className="side-footer">
            <div className="socials">
                <a
                    href="https://github.com/DomenicoFoglia"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.29 1.19-3.09-.12-.3-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.02 11.02 0 015.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .31.21.68.8.56A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
                    </svg>
                </a>
                <a
                    href="https://linkedin.com/in/domenicofoglia"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M20.45 20.45h-3.55v-5.56c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.94v5.65H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
                    </svg>
                </a>
                <a href="mailto:foglia.dmnc@gmail.com" aria-label="Email">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="20" height="20">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="M3 7l9 6 9-6" />
                    </svg>
                </a>
            </div>

            <div className="side-footer-right">
                <button
                    className='theme-toggle'
                    type='button'
                    onClick={toggleTheme}
                    aria-label='Toggle theme'    
                >
                    {theme === 'dark' ? '☀' : '☾'}
                </button>

                <div className="lang">
                    <button 
                        className={i18n.language.startsWith('it') ? 'active' : ''} 
                        type="button"
                        onClick={() => changeLang('it')}>
                            IT
                    </button>
                    <span className="lang-sep">/</span>
                    <button 
                        className={i18n.language.startsWith('en') ? 'active' : ''}
                        type="button"
                        onClick={() => changeLang('en')}>
                            EN
                        </button>
                </div>
            </div>

            
        </div>
    )
}

export default SideFooter