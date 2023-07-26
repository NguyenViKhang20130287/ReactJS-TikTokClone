// icons
import { FaSistrix } from 'react-icons/fa6';
import {FaTimesCircle} from "react-icons/fa"
import { AiOutlineSearch } from 'react-icons/ai'
import { ImSpinner2 } from 'react-icons/im'

// components
import AccountItem from '../../../components/AccountItem'
import { Wrappers as PopperWrapper } from "../../../components/Popper";
import styles from './Search.module.scss'

// libs
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import useDebounce from '../../../hooks/useDebounce';

const cx = classNames.bind(styles)


function Search() {

    //
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([]);
    const [showTippy, setShowTippy] = useState(true)
    const [loading, setLoading] = useState(false)

    // 
    const searchRef = useRef()
    const debounced = useDebounce(searchValue, 600)

    //
    const handleClearInput = (e) => {
        e.preventDefault()
        setSearchResult([])
        setSearchValue("")
        searchRef.current.focus()
    }
    const handleHideTippyResult = () => {
        setShowTippy(false)
    }

    useEffect(() => {

        if (!debounced.trim()) {
            setSearchResult([])
            setLoading(false)
            return
        }

        setLoading(true)

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then(res => res.json())
            .then(res => {
                // console.log('>>> CHECK RES: ', res.data);
                setSearchResult(res.data)
                setLoading(false)
            })
    }, [debounced]);

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
                        {searchResult.map(result =>
                            <AccountItem key={result.id} data={result} />
                        )}
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
                    {!!searchValue && !loading && (
                        <button className={cx("clear-btn")} onClick={(e) => handleClearInput(e)}>
                            <FaTimesCircle />
                        </button>
                    )}

                    {loading && <div className={cx("loading-icon")}>
                        <ImSpinner2 />
                    </div>}
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