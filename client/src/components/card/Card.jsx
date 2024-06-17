import Map from "../map/Map";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card({ item }) {
	return (
		<div className="card">
			<Link to={`/${item.id}`} className="categoryData">
				<h3>Name : {item.name}</h3>
				<p>Date created : {new Date(item.dateCreated).toDateString()}</p>
				<p>Date updated : {new Date(item.dateUpdated).toDateString()}</p>

				{/* <p>Details : {item.features[]}</p> */}
				{/* {item.features.map((i) => (
					<ul key={i.id}>
						<li>ID : {i.properties.ID}</li>
						<li>Type: {i.type}</li>
						<li>
							Location Data : <p>{i.geometry.coordinates[0]},</p>
							<p>{i.geometry.coordinates[1]}</p>
						</li>
						<li>Other Details : {i.properties.STRASSE}</li>
					</ul>
				))} */}
			</Link>
			<div className="mapData">
				<Map />
			</div>
		</div>
	);
}

export default Card;
