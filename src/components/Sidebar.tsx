import Brand from './Brand'
import Nav from './Nav'
import SideFooter from './SideFooter'
import './Sidebar.css'
import { useTranslation } from 'react-i18next'

function Sidebar() {
    const { t } = useTranslation();


    return (
        <aside className="sidebar" aria-label={t('sidebar.ariaLabel')}>
            <div className="sidebar-top">
                <Brand />
                <Nav />
            </div>
        <SideFooter />
    </aside>
    )
}

export default Sidebar