import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import { categoriesData } from "../../lib/dummydata";
import "./CategoryPage.scss";

function CategoryPage() {
	const data = categoriesData;

	return (
		<div className="categoryPage">
			<div className="mapContainer">Map</div>
			<div className="listContainer">
				<div className="listWrapper">
					<Filter />
					{data.map((item) => (
						<Card key={item.id} item={item} />
					))}
				</div>
			</div>
		</div>
	);
}

export default CategoryPage;
