import styles from "./Header.module.scss";
import Images from "../../../../assets/images";
import { Wrappers as PopperWrapper } from "../../../Popper";

import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
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
  FaRegPaperPlane,
  FaRegMessage,
  FaRegKeyboard,
  FaRegMoon,
  FaPlus,
  FaTiktok,
  FaRegBookmark,
  FaRegUser,
  FaArrowRightFromBracket
} from "react-icons/fa6";
import { BsGear } from 'react-icons/bs'
import { useEffect, useState } from "react";
import AccountItem from "../../../AccountItem";
import Menu from "../../../Popper/Menu";
import Button from "../../../Button";
import Image from "../../../Image";

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

const MENU_ITEMS_USER = [
  {
    icon: <FaRegUser />,
    title: 'Xem hồ sơ'
  },
  {
    icon: <FaRegBookmark />,
    title: 'Yêu thích'
  },
  {
    icon: <FaTiktok />,
    title: 'Nhận xu'
  },
  {
    icon: <BsGear />,
    title: 'Cài đặt'
  },

  ...MENU_ITEMS,

  {
    icon: <FaArrowRightFromBracket />,
    title: 'Đăng xuất',
    separate: true
  }
]

function Header() {
  //
  const [searchResult, setSearchResult] = useState([]);

  //
  const currentUser = true
  // console.log('>>> CHECK ITEMS USER: ', MENU_ITEMS_USER);

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

        <HeadlessTippy
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
        </HeadlessTippy>

        {/* logged/not logged */}
        <div className={cx("options")}>
          {currentUser ?
            (<>
              <Button normal leftIcon={<FaPlus />}> Tải lên</Button>

              <Tippy content='Tin nhắn'>
                <span>
                  <Button onlyIcon><FaRegPaperPlane /></Button>
                </span>
              </Tippy>

              <Tippy content='Hộp thư'>
                <span>
                  <Button onlyIcon><FaRegMessage /></Button>
                </span>
              </Tippy>

              <Menu items={MENU_ITEMS_USER}>
                <div className={cx('avatar')}>
                  <Image src="https://img6.thuthuatphanmem.vn/uploads/2022/10/23/anh-avatar-cute_031457390.jpg" alt="" />
                </div>
              </Menu>


            </>)
            : (
              <>
                <Button normal leftIcon={<FaPlus />}> Tải lên</Button>
                <Button primary>Đăng nhập</Button>

                <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                  <button className={cx("more-btn")}><FaEllipsisV /></button>
                </Menu>
              </>)
          }


        </div>

        {/* logged */}
      </div>
    </header>
  );
}

export default Header;
