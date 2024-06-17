import "./Filter.scss";

function Filter() {
	return (
		<div className="filter">
			<h3>Filter</h3>
			<div className="category">
				<label htmlFor="category">Search</label>
				<input type="text" id="category" name="category" />
			</div>
			<div className="tag">
				<label htmlFor="tag">Tag</label>
				<select name="tag" id="tag" multiple>
					<option value="schools">Schule</option>
					<option value="kindergarden">Kindertageseinrichtungen</option>
					<option value="social_child">Schulsozialarbeit</option>
					<option value="social_teen">Jugendberufshilfe</option>
				</select>
			</div>
		</div>
	);
}

export default Filter;
