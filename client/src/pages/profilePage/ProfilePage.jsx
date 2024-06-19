import "./ProfilePage.scss";
import apiRequest from "../../lib/apiRequest";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function ProfilePage() {
	const data = useLoaderData();

	const { updateUser, currentUser } = useContext(AuthContext);

	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await apiRequest.post("/auth/logout");
			updateUser(null);
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="profilePage">
			<div className="details">
				<div className="wrapper">
					<div className="title">
						<h1>User Information</h1>
					</div>
					<div className="info">
						<span>
							Avatar:
							<img src="/noavatar.jpg" alt="Avatar" />
						</span>
						<span>
							Username: <b>{currentUser.username}</b>
						</span>
						<span>
							E-mail: <b>{currentUser.email}</b>
						</span>
						<Link to="/profile/update">
							<button>Update Profile</button>
						</Link>
						<button onClick={handleLogout}>Logout</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfilePage;
