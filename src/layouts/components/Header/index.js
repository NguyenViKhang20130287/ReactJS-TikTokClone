// icons
import {
  FaEllipsisV,
  FaRegQuestionCircle
} from "react-icons/fa";
import {
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

// components
import styles from "./Header.module.scss";
import Menu from "../../../components/Popper/Menu";
import Images from '../../../assets/images';
import Image from '../../../components/Image'
import Button from "../../../components/Button";

// libs
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Search from "../Search";
import { Link } from "react-router-dom";
import config from "../../../config";

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
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt (Việt Nam)'
        },
        {
          type: 'language',
          code: 'en',
          title: 'English'
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt (Việt Nam)'
        },
        {
          type: 'language',
          code: 'en',
          title: 'English'
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt (Việt Nam)'
        },
        {
          type: 'language',
          code: 'en',
          title: 'English'
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt (Việt Nam)'
        },
        {
          type: 'language',
          code: 'en',
          title: 'English'
        },
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
  const currentUser = false

  // console.log('>>> CHECK ITEMS USER: ', MENU_ITEMS_USER);

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
        <Link to={config.home} className={cx("logo")}>
          <img src={Images.logo.default} alt="Tiktok"/>
        </Link>

        {/* Search */}
        <Search />

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

              <Menu items={MENU_ITEMS_USER} hideOnClick={false}>
                <div className={cx('avatar')}>
                  <Image src="https://img6.thuthuatphanmem.vn/uploads/2022/10/23/anh-avatar-cute_031457390.jpg" alt="" />
                </div>
              </Menu>


            </>)
            : (
              <>
                <Button normal leftIcon={<FaPlus />}> Tải lên</Button>
                <Button primary href={''}>Đăng nhập</Button>

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
