import './Menu.scss'

import { NavLink } from 'react-router-dom';
import pagesInfo from '../../../pagesTabsInfo.json'

function Menu() {

    return (
        <nav className="menu">
            {pagesInfo.map(page => (
                <NavLink
                    className={({ isActive }) => isActive ? "tab tab_active" : "tab"}
                    key={page.to}
                    to={page.to}
                >
                    {page.title}
                </NavLink>
            ))}
        </nav>
    );
}

export default Menu