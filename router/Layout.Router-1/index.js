import routesCofig from './config/routes'

// Create thư mục Pages chứa UI và import vào
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';


const publicRoutes = [
    {
		path: routesCofig.home,
		component: Home,
	},
	{
		path: routesCofig.contact,
		component: Contact,
	},
	{
		path: routesCofig.about,
		component: About,
	// NNếu Pages nào có Header đi theo thì thêm keys : Layout vào và xét điều kiện
		layout:any,
	},
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
