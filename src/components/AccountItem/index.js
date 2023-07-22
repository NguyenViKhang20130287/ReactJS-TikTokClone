import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FaCheckCircle } from "react-icons/fa";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("avatar")}>
        <img
          src="https://img6.thuthuatphanmem.vn/uploads/2022/10/23/anh-avatar-cute_031457390.jpg"
          alt=""
        />
      </div>

      <div className={cx("info")}>
        <div className={cx("username")}>
          <h4>vikhang</h4>
          <> </>
          <span>
            <FaCheckCircle
              style={{ fontSize: "14px", color: "#20d5ec", marginLeft: "5px" }}
            />
          </span>
        </div>
        <span className={cx("name")}>Nguyen Vi Khang</span>
      </div>
    </div>
  );
}

export default AccountItem;
