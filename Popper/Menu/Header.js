import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(style)

function Header({title,onBack}) {

	return <header classNames={cx('header')} >

		<button classNames={cx('btn-back')} onClick={onBack}>
			<FontAwesomeIcon/>
		</button>

		<h4>{title}</h4>
		
	</header>;
}

export default Header;