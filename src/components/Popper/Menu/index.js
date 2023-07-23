import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { Wrappers as PopperWrapper } from "../../Popper";
import MenuItem from './MenuItem'

import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange = {} }) {

  //
  const [history, setHistory] = useState([{ data: items }])
  const current = history[history.length - 1]

  // console.log('>>> CHECK CURRENT ITEM: ', current.data.title);

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.child_item;
      // console.log('>>>CHECK isParent: ', isParent);
      return <MenuItem key={index} data={item}
        onClick={() => {
          if (isParent) {
            setHistory((prev) => [...prev, item.child_item])
          } else {
            onChange(item)
          }
        }}
      />
    })
  }

  const handleBackMenu = () => {
    setHistory((prev) => history.slice(0, prev.length - 1))
  }
  // console.log('>>>CHECK HISTORY: ', history);

  return (
    <Tippy
      interactive
      // visible
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("content")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {history.length > 1 && <Header title={'Ngôn ngữ'} onBack={handleBackMenu} />}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={() => {
        setHistory(prev => prev.slice(0, 1))
      }}
    >
      {children}
    </Tippy>

  );
}

export default Menu;
