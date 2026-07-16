import './Brand.css'
import { useTranslation, Trans } from 'react-i18next'

function Brand() {
    const { t } = useTranslation()

    return (
        <div className="brand">
            <h1 className="brand-name">
                Domenico<br />Foglia
            </h1>
            <div className="brand-role">{t('brand.role')}</div>
            <p className="brand-tagline">
                <Trans
                    i18nKey="brand.tagline"
                    components={{
                        1: <span className="brand-highlight" />,
                        2: <span className="brand-tech" />
                    }}
                />
            </p>
        </div>
    )
}

export default Brand