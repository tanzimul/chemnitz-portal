import { useState } from "react";
import "./SearchBar.scss";

function SearchBar() {
	const [query, setQuery] = useState({
		categories: "categories",
	});

	return (
		<div className="searchBar">
			<form>
				<input
					type="text"
					name="categories"
					id="categories"
					placeholder="Type a category name"
				/>
				<button>
					<img src="/search.png" alt="search" />
				</button>
			</form>
		</div>
	);
}

export default SearchBar;
