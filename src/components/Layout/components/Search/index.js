// icons
import { FaSistrix } from 'react-icons/fa6';
import {
    FaRegTimesCircle, FaSpinner,
} from "react-icons/fa"
import { AiOutlineSearch } from 'react-icons/ai'
// components
import AccountItem from "../../../AccountItem";
import { Wrappers as PopperWrapper } from "../../../Popper";
import styles from './Search.module.scss'
// libs
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { useEffect } from 'react';

const cx = classNames.bind(styles)


function Search() {

    //
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([]);
    const [showTippy, setShowTippy] = useState(true)

    // 
    const searchRef = useRef()

    //
    const handleClearInput = (e) => {
        e.preventDefault()
        setSearchValue("")
        searchRef.current.focus()
    }
    const handleHideTippyResult = () =>{
        setShowTippy(false)
    }

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 500);
    }, []);

    return (
        <HeadlessTippy
            interactive
            visible={showTippy && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className={cx("search-title")}>
                            <FaSistrix />
                            <h4>title</h4>
                        </div>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideTippyResult}
        >
            <div className={cx("search")}>
                <input type="text" placeholder="Tìm kiếm"
                    ref={searchRef}
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    onFocus={() => setShowTippy(true)} />
                <div className={cx("search-container")}>
                    {!!searchValue && (
                        <button className={cx("clear-btn")} onClick={(e) => handleClearInput(e)}>
                            <FaRegTimesCircle />
                        </button>
                    )}

                    <div className={cx("loading-icon")}>
                        <FaSpinner />
                    </div>
                </div>

                <span className={cx("split")}></span>

                <button className={cx("search-btn")}>
                    <AiOutlineSearch />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;