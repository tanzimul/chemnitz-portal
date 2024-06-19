import { useContext, useState } from "react";
import "./ProfileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";

function ProfileUpdatePage() {
	const { currentUser, updateUser } = useContext(AuthContext);
	const [error, setError] = useState("");
	const [avatar, setAvatar] = useState([]);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);

		const { username, email, password } = Object.fromEntries(formData);

		try {
			const res = await apiRequest.put(`/users/${currentUser.id}`, {
				username,
				email,
				password,
				avatar: avatar[0],
			});
			updateUser(res.data);
			navigate("/profile");
		} catch (err) {
			console.log(err);
			setError(err.response.data.message);
		}
	};

	return (
		<div className="profileUpdatePage">
			<div className="formContainer">
				<form onSubmit={handleSubmit}>
					<h1>Update Profile</h1>
					<div className="formElement">
						<input
							type="text"
							name="username"
							placeholder="Username"
							defaultValue={currentUser.username}
						/>
						<input
							type="email"
							name="email"
							placeholder="Email"
							defaultValue={currentUser.email}
						/>
						<input type="password" name="password" placeholder="Password" />
						<button>Update</button>
						{error && <span>error</span>}
					</div>
				</form>
			</div>
		</div>
	);
}

export default ProfileUpdatePage;
