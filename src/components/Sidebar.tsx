import Brand from './Brand'
import Nav from './Nav'
import SideFooter from './SideFooter'
import './Sidebar.css'

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-top">
                <Brand />
                <Nav />
            </div>
        <SideFooter />
    </aside>
    )
}

export default Sidebar