//
import { AiOutlineHome, } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import { MdOutlineExplore } from 'react-icons/md'
import { LuVideo } from 'react-icons/lu'

//
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

//
import Menu from "./Menu/Menu";
import { MenuItem } from "./Menu";
import config from '../../../config'
import FollowingAccount from '../FollowingAccount';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <>
      <aside className={cx("sidebar")}>
        <Menu>
          <MenuItem to={config.routes.home} title={'Dành cho bạn'} icon={<AiOutlineHome />} />
          <MenuItem to={config.routes.following} title={'Đang Follow'} icon={<FiUsers />} />
          <MenuItem to={config.routes.explore} title={'Khám phá'} icon={<MdOutlineExplore />} />
          <MenuItem to={config.routes.live} title={'LIVE'} icon={<LuVideo />} />
        </Menu>
        <FollowingAccount />
        <div className={cx('footer-sidebar')}>
          <div className={cx('link-container')}>
            <a href=''>Giới thiệu</a>
            <a href=''>Bảng tin</a>
            <a href=''>Liên hệ</a>
            <a href=''>Sự nghiệp</a>
          </div>

          <div className={cx('link-container')}>
            <a href=''>TikTok for Good</a>
            <a href=''>Quảng cáo</a>
            <a href=''>Developers</a>
            <a href=''>Minh bạch</a>
            <a href=''>TikTok Rewards</a>
            <a href=''>TikTok Embeds</a>
          </div>

          <div className={cx('link-container')}>
            <a href=''>Trợ giúp</a>
            <a href=''>An toàn</a>
            <a href=''>Điều khoản</a>
            <a href=''>Quyền riêng tư</a>
            <a href=''>Cổng thông tin tác giả</a>
            <a href=''>Hướng dẫn cộng đồng</a>
          </div>

          <Tippy content='NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK' visible>
            <div className={cx('more-container')}>
              <span>Thêm</span>
            </div>
          </Tippy>

          <span className={cx('copyright')}>© 2023 TikTok</span>

        </div>
      </aside>
    </>
  );
}

export default Sidebar;
