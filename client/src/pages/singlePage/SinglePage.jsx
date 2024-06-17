import "./SinglePage.scss";
import Map from "../../components/map/Map";

function SinglePage() {
	return (
		<div className="singlePage">
			<div className="mainData">
				<div className="profileData">
					<h3>User Data</h3>
					<h4>Name: John Doe</h4>
					<h4>Email : sample@gmail.com</h4>
					<h4>Phone : +49*********</h4>
				</div>
				<div className="details">
					<h3>Details</h3>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ea
						et, magnam incidunt quas saepe reprehenderit nobis quis impedit!
						Quam impedit quis ab quidem, quo animi eos placeat tempore
						architecto.
					</p>
				</div>
			</div>

			<div className="mapSingle">
				<Map />
			</div>
		</div>
	);
}

export default SinglePage;
