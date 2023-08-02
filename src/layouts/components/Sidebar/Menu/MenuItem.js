import classNames from "classnames/bind";
import styles from './Menu.module.scss'
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles)

function Menu({ title, to, icon }) {
    return (
        <NavLink to={to} className={(nav) => cx('menu-item', {active: nav.isActive})}>
            {icon}
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

export default Menu;