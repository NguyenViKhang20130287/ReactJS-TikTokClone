import { FaCheckCircle } from "react-icons/fa";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import Image from '../Image'
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("avatar")}>
        <Image
          src={data.avatar}
          alt={data.full_name}
        />
      </div>

      <Link to={`/@${data.nickname}`} className={cx("info")}>
        <div className={cx("username")}>
          <h4>{data.nickname}</h4>
          <> </>
          {!!data.tick && (
            <span>
              <FaCheckCircle
                style={{ fontSize: "14px", color: "#20d5ec", marginLeft: "5px" }}
              />
            </span>
          )}

        </div>
        <span className={cx("name")}>{data.full_name}</span>
      </Link>
    </div>
  );
}

export default AccountItem;
