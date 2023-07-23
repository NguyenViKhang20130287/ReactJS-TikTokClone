import Button from "../../Button";
import classNames from "classnames/bind";
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function MenuItem({ data, onClick }) {

    const classes = cx('menu-btn-item', {
        separate: data.separate
    })

    return <Button leftIcon={data.icon} className={classes} to={data.to} onClick={onClick}>
        {data.title}
    </Button>
}

export default MenuItem