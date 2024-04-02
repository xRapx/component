import { useState} from 'react';
import Tippy from '@tippyjs/react/headless';
import {Wrapper as PopperWrapper} from '../Wrapper';

const cx = classNames.bind(style);

const defaultFn = () =>{}

function Menu({children , onChange = defaultFn}) {

	const [visible, setVisible] = useState(false);

	return (
		<Tippy
			interactive
			visible={visible.length > 0}
			delay={[0, 700]}
			placement="bottom-end"
			render={(attrs) => (
                <div className={cx('wrapper-menu')} tabIndex="-1" {...attrs}>
					<PopperWrapper className={cx('menu-popper')}>
						// Bọc bên ngoài vị trí muốn hiển thị Popper
					</PopperWrapper>
				</div>
            )}
		>
		{children}
		</Tippy>
	);
}

export default Menu;