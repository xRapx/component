import { Link } from 'react-router-dom';
// mã hoá bầng thư viện className không bị trùng nhau 
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function Button({
	to,
	href,
	small = false,
	large = false,
	text = false,
	primary = false,
	outline = false,
	disable = false,
	rounded = false,
	leftIcon,
	rightIcon,
	onClick,
	children,
	...passProps}) {
	let Component = 'button';

	const props = {
		onClick,
		...passProps
	}
	// xét điều kiện trạng thái của button
	if (disable){
		Object.keys(props).forEach((key) =>{
			if(key.startsWith('on') && typeof props[key] === 'function'){
				delete props[key];
			}
		})
	}
	// xét điều kiện khi người dùng Click  với trạng thái là gì ?
	if(to){
		props.to = to;
		// Nếu là chuyển hướng cục bộ thì dùng Link Component trong route
		Component = Link;
	} else if(href){
		props.href = href;
		// Nếu là chuyển hướng ra ngoài thì dùng thẻ a 
		Component = 'a';
	}

	const classes = cx('wrapper', {
		// tạo thêm key cho Object nếu có thêm Attri là className(cx('...') thì sẻ chuyển className truyền vào thành keys
		[className] : className,
		// các dạng color, style ò button
        small,
		large,
        text,
        primary,
        outline,
        disable,
		rounded
	})

	return (
        <Component className={classes} {...props}>
			{leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
			<span className={cx('title')}>{children}</span>
			{rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
		</Component>
    )
}

export default Button;