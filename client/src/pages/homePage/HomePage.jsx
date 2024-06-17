import SearchBar from "../../components/searchBar/SearchBar";
import "./HomePage.scss";

function HomePage() {
	return (
		<div className="homePage">
			<div className="seachBar">
				<h1>Chemnitz Portal</h1>
				<SearchBar />
			</div>
			<div className="homeTitle">
				<h3>
					Welcome to the Chemnitz data portal of the city of Chemnitz . Please
					enter the desired search term in the search bar above or click on the
					magnifying glass symbol to display all available data sets.
					Alternatively, you can select directly from the categories below. All
					data sets are published under the Germany Attribution 2.0 data license
					.
				</h3>
			</div>
			<div className="categories">
				<div className="categoryTitle">
					<h3>Categories</h3>
				</div>
				<div className="categoryList">
					<a href="/">
						<img src="./school.png" alt="School" />
						<span>School</span>
					</a>
					<a href="/">
						<img src="./kindergarden.png" alt="Kindergarden" />
						<span>Kindergarden</span>
					</a>
					<a href="/">
						<img src="./socialChild.png" alt="Social Child Projects" />
						<span>Social Child Projects</span>
					</a>
					<a href="/">
						<img src="./socialTeenager.png" alt="Social Teenager Projects" />
						<span>Social Teenager Projects</span>
					</a>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
