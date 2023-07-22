import { FaAngleLeft } from 'react-icons/fa6'
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function Header({ title, onBack }) {
    return (
        <header className={cx("menu-header")}>
            <button className={cx("menu-header-btn-back")} onClick={onBack}><FaAngleLeft /></button>
            <div className={cx('menu-header-title')}>
                <h4>{title}</h4>
            </div>
        </header>
    );
}

export default Header;