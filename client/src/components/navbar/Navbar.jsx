import { useState } from "react";
import "./Navbar.scss";

function Navbar() {
	const [open, setOpen] = useState(false);

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
				<a href="/">Sign in</a>
				<a href="/" className="register">
					Register
				</a>
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