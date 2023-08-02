import classNames from "classnames/bind";
import styles from './FollowingAccount.module.scss'

import AccountItem from './AccountItem'

const cx = classNames.bind(styles);

function FollowingAccount() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>
                Các tài khoản đang follow</p>
            <div className={cx('accounts')}>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
            </div>
            <button className={cx('more')}>
                <p>Xem thêm</p>
            </button>
        </div>
    );
}

export default FollowingAccount;