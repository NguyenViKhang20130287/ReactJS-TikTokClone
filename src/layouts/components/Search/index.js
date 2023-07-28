// icons
import { FaSistrix } from 'react-icons/fa6';
import { FaTimesCircle } from "react-icons/fa"
import { AiOutlineSearch } from 'react-icons/ai'
import { ImSpinner2 } from 'react-icons/im'

// components
import AccountItem from '../../../components/AccountItem'
import { Wrappers as PopperWrapper } from "../../../components/Popper";
import styles from './Search.module.scss'
import useDebounce from '../../../hooks/useDebounce';
import * as services from '../../../services/searchService'


// libs
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { useEffect } from 'react';

const cx = classNames.bind(styles)


function Search() {

    // state
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

    const handleChange = (e) => {
        const value = e.target.value;

        if (!value.startsWith(' ')) {
            setSearchValue(value)
        }

    }

    // api
    useEffect(() => {

        if (!debounced.trim()) {
            setSearchResult([])
            setLoading(false)
            return
        }

        const fetchAPI = async () => {
            //
            setLoading(true)

            const result = await services.search(encodeURIComponent(debounced));

            //
            setSearchResult(result)
            setLoading(false)

        }

        fetchAPI()
    }, [debounced]);

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showTippy && searchResult.length > 0}
                // appendTo={() => document.body}
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
                        onChange={(e) => handleChange(e)}
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
        </div>

    );
}

export default Search;