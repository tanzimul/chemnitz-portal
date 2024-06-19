import { useState, useContext } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
	const [open, setOpen] = useState(false);

	const { currentUser } = useContext(AuthContext);

	return (
		<nav>
			<div className="left">
				<a href="/" className="logo">
					<img src="/logo.png" alt="Chemnitz Portal" />
					<span>Chemnitz Portal</span>
				</a>
			</div>
			<div className="right">
				<a href="/categories">Categories</a>
				{currentUser ? (
					<div className="user">
						<img src="/noavatar.jpg" alt="Profile Image" />
						<span>{currentUser.username}</span>
						<Link to="/profile">Profile</Link>
					</div>
				) : (
					<>
						{" "}
						<a href="/login">Login</a>
						<a href="/register" className="register">
							Register
						</a>{" "}
					</>
				)}
				<div className="menuIcon">
					<img
						src="/menu.png"
						alt="Menu"
						onClick={() => setOpen((prev) => !prev)}
					/>
				</div>
				<div className={open ? "menu active" : "menu"}>
					<a href="/">Sign in</a>
					<a href="/" className="register">
						Register
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
