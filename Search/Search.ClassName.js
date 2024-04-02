import { useEffect, useState, useRef } from 'react';

import classNames from 'classnames/bind';
import style from './Search.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import {useDebounce} from '../hooks/useDebounce'

import * as apiSearch from '../apiService/apiSearch';


const cx = classNames.bind(style)

function Search() {
	const [searchValue , setSearchvalue] = useState('')
	const [ results, setResults] = useState([])
	const [showResulut, setShowResult] = useState(true)
	const [loading, setLoading] = useState(false)

	// Nếu cần thực hiện get dom element thì dùng useRef
	const inputRef = useRef()

	// using useDebouce
	const debounce = useDebounce(searchValue,500)

	useEffect(() =>{
		// trim đi lần set state lần đầu = chuỗi rổng
		if(!debounce.trim()){
			setResults([])
			return
		}
		// Hàm xử lý request API 
		const fetchApi = async () =>{
			//Frist call API set show loading
			setLoading(true)

			const dataRequest = await apiSearch.search(debounce)
			
			// Push data to Array Data
			setResults(dataRequest)

			// End call API set hide loading
			setLoading(false)
		}

		// Render API
		fetchApi();

	},[debounce])

	const handleClear = () =>{

		setSearchvalue('');
		inputRef.current.focus();
		setResults([]);
	}

	const handleShowResult = () => {
        setShowResult(false);
    };

	return (
		<div>
			<Tippy
				onClickOutside={handleShowResult}
				interactive
				visible={showResulut && searchValue.length > 0}
				render={(attrs) =>(
					<div className={cx('search-result')} tabIndex="-1" {...attrs}>
						<PopperWrapper>
							<h4 className={cx('search-title')}>Title Api</h4>
								{results.map((result) =>(
									<ListApi key={result.id} data={result}/>
								))}
						</PopperWrapper>
					</div>
				)}
			>
				<div className={cx('search')}>
					<input
						ref={inputRef}	
						value={searchValue}
						type="text"
						placeholder='Enter here.....'
						onChange={(e) => e.target.value.trimStart()}
						// forcus vao` set hiện kết quả tìm kiếm
						onFocus={() => setShowResult(true)} 
					/>
					{!!searchValue && !loading && (
						<button className={cx('clear')} onClick={handleClear}>			
							<FontAwesomeIcon icon={faCircleXmark} />
						</button>) 
					}			
					{loading && (
							<FontAwesomeIcon className={cx('loading')} icon={faSpinner} />)
					}	

					<button className={cx('search-btn')}>
								<FontAwesomeIcon className={cx('icon-search')} icon={faMagnifyingGlass} />
					</button>
				</div>
			</Tippy>
		</div>


		
	);
}

export default Search;