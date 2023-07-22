import styles from "./Header.module.scss";
import Images from "../../../../assets/images";
import { Wrappers as PopperWrapper } from "../../../Popper";

import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import {
  FaSearch,
  FaRegTimesCircle,
  FaEllipsisV,
  FaSpinner,
  FaRegQuestionCircle
} from "react-icons/fa";
import {
  FaSistrix,
  FaEarthAsia,
  FaCircleQuestion,
  FaRegKeyboard,
  FaRegMoon,
  FaPlus
} from "react-icons/fa6";
import { useEffect, useState } from "react";
import AccountItem from "../../../AccountItem";
import Menu from "../../../Popper/Menu";
import Button from "../../../Button";

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FaEarthAsia />,
    title: "Tiếng việt",
    child_item: {
      title: 'Ngôn ngữ',
      data: [
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt (Việt Nam)'
        },
        {
          type: 'language',
          code: 'en',
          title: 'English'
        }
      ]
    }
  },
  {
    icon: <FaRegQuestionCircle />,
    title: "Phản hồi và trợ giúp",
    to: './feedback'
  },
  {
    icon: <FaRegKeyboard />,
    title: "Phím tắt trên bàn phím",
  },
  {
    icon: <FaRegMoon />,
    title: "Chế độ tối",
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      // setSearchResult([1, 2, 3]);
    }, 500);
  }, []);

  const handleMenuChange = (MenuItem) => {
    switch (MenuItem.type) {
      case 'language':
        // handle change language
        break;

      default:
        break;
    }
    // console.log(MenuItem);
  }

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={Images.logo.default} alt="Tiktok"></img>
        </div>

        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <div className={cx("search-title")}>
                  <FaSistrix
                    style={{
                      fontSize: "15px",
                      marginRight: "10px",
                      fontWeight: "100",
                    }}
                  />
                  <h4>title</h4>
                </div>
                <div className={cx("search-title")}>
                  <FaSistrix
                    style={{
                      fontSize: "15px",
                      marginRight: "10px",
                      fontWeight: "100",
                    }}
                  />
                  <h4>title</h4>
                </div>
                <div className={cx("search-title")}>
                  <FaSistrix
                    style={{
                      fontSize: "15px",
                      marginRight: "10px",
                      fontWeight: "100",
                    }}
                  />
                  <h4>title</h4>
                </div>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input type="text" placeholder="Tìm kiếm" />
            <div className={cx("search-container")}>
              <button className={cx("clear-btn")}>
                <FaRegTimesCircle />
              </button>
              <div className={cx("loading-icon")}>
                <FaSpinner />
              </div>
            </div>

            <span className={cx("split")}></span>

            <button className={cx("search-btn")}>
              <FaSearch />
            </button>
          </div>
        </Tippy>

        {/* not logged */}
        <div className={cx("options")}>
          <Button normal leftIcon={<FaPlus />}> Tải lên</Button>
          <Button primary>Đăng nhập</Button>

          <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
            <button className={cx("more-btn")}><FaEllipsisV /></button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
