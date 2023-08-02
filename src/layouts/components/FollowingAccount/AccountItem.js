import classNames from "classnames/bind";
import styles from './FollowingAccount.module.scss'

import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import Image from '../../../components/Image'

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <div className={cx("avatar")}>
                <img
                    src='https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/838a48cd75b7d86d0d1a48fa5a4659bc~c5_100x100.jpeg?x-expires=1691110800&x-signature=4LECllralAWBka2YkGDnYCVv1mI%3D'
                    alt=''
                />
            </div>

            <Link to={``} className={cx("info")}>
                <div className={cx("username")}>
                    <h4>{'truc.dao'}</h4>
                    <> </>
                    {/* {!!data.tick && ( */}
                        <span>
                            <FaCheckCircle
                                style={{ fontSize: "14px", color: "#20d5ec", marginLeft: "5px" }}
                            />
                        </span>
                    {/* )} */}

                </div>
                <span className={cx("name")}>{'Trúc Đàoo'}</span>
            </Link>
        </div>
     );
}

export default AccountItem;