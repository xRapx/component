import Header from "./Header/Header";
import SideBar from "./Sidebar/Sidebar";

function DefaultLayout({children}) {
	return (
		<div className="wrapper">

			<Header/>
			
			<div className="container">

				<SideBar/>

				<div className="content">{children}</div>

			</div>
		</div>
	  );
}

export default DefaultLayout;