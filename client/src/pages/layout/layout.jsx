import "./layout.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Layout() {
	return (
		<div className="layout">
			<div className="navBar">
				<Navbar />
			</div>
			<div className="content">
				<Outlet />
			</div>
			<div className="footer">
				<Footer />
			</div>
		</div>
	);
}

function RequireAuth() {
	const { currentUser } = useContext(AuthContext);

	if (!currentUser) return <Navigate to="/login" />;
	else {
		return (
			<div className="layout">
				<div className="navBar">
					<Navbar />
				</div>
				<div className="content">
					<Outlet />
				</div>
				<div className="footer">
					<Footer />
				</div>
			</div>
		);
	}
}

export { Layout, RequireAuth };
