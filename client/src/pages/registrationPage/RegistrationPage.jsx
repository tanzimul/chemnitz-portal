import "./RegistrationPage.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import apiRequest from "../../lib/apiRequest";

function RegistrationPage() {
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setIsLoading(true);
		const formData = new FormData(e.target);

		const username = formData.get("username");
		const email = formData.get("email");
		const password = formData.get("password");

		try {
			const res = await apiRequest.post("/auth/register", {
				username,
				email,
				password,
			});

			navigate("/login");
		} catch (err) {
			console.log(err);
			setError(err.response.data.message);
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<div className="registrationPage">
			<div className="formContainer">
				<form onSubmit={handleSubmit}>
					<h1>Create an Account</h1>
					<div className="formElement">
						<input type="text" name="username" placeholder="Username" />
						<input type="email" name="email" placeholder="Email" />
						<input type="password" name="password" placeholder="Password" />
						<button disabled={isLoading}>Register</button>
						{error && <span>{error}</span>}
						<Link to="/login" className="login">
							Do you have an account? <span> Login here </span>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

export default RegistrationPage;
