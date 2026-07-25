import { useState } from 'react'
import Section from './Section'
import { useGreetings } from '../hooks/useGreetings'
import { useTranslation } from 'react-i18next'
import './GuestBook.css'

function Guestbook() {
    const { t, i18n } = useTranslation()
    const { greetings, loading, submitting, submit } = useGreetings()
    
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [website, setWebsite] = useState('') // honeypot
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setSuccess(false)

        const result = await submit(name.trim(), message.trim(), website)

        if (result.ok) {
            setName('')
            setMessage('')
            setSuccess(true)
            setTimeout(() => setSuccess(false), 4000)
        } else {
            setError(result.error)
        }
    }

    const formatDate = (isoDate: string) => {
        const date = new Date(isoDate)
        return date.toLocaleDateString(i18n.language.startsWith('it') ? 'it-IT' : 'en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        })
    }

    return (
        <Section
            id="guestbook"
            numeral="VI"
            label="Guestbook"
            title={t('guestbook.title')}
        >
            <p className="guestbook-intro">{t('guestbook.intro')}</p>

            <form className="guestbook-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="gb-name" className="form-label">
                        {t('guestbook.form.name')}
                    </label>
                    <input
                        id="gb-name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        maxLength={60}
                        required
                        disabled={submitting}
                        className="form-input"
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="gb-message" className="form-label">
                        {t('guestbook.form.message')}
                    </label>
                    <textarea
                        id="gb-message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        maxLength={500}
                        required
                        disabled={submitting}
                        rows={4}
                        className="form-textarea"
                    />
                    <div className="form-counter">{message.length} / 500</div>
                </div>

                {/* Honeypot: campo nascosto ai visitatori umani, i bot lo compileranno */}
                <div className="honeypot" aria-hidden="true">
                    <label htmlFor="gb-website">Website</label>
                    <input
                        id="gb-website"
                        type="text"
                        value={website}
                        onChange={e => setWebsite(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                    />
                </div>

                <button 
                    type="submit" 
                    disabled={submitting || !name.trim() || !message.trim()}
                    className="form-submit"
                >
                    {submitting ? t('guestbook.form.sending') : t('guestbook.form.submit')}
                </button>

                {error && <div className="form-error" role="alert">{error}</div>}
                {success && <div className="form-success" role="status">{t('guestbook.form.success')}</div>}
            </form>

            <div className="guestbook-list">
                {loading ? (
                    <div className="guestbook-loading">{t('guestbook.loading')}</div>
                ) : greetings.length === 0 ? (
                    <div className="guestbook-empty">{t('guestbook.empty')}</div>
                ) : (
                    greetings.map(g => (
                        <article key={g.id} className="greeting">
                            <header className="greeting-head">
                                <span className="greeting-name">{g.name}</span>
                                <span className="greeting-date">{formatDate(g.created_at)}</span>
                            </header>
                            <p className="greeting-message">{g.message}</p>
                        </article>
                    ))
                )}
            </div>
        </Section>
    )
}

export default Guestbook