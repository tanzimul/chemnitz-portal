import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import Layout from "./pages/layout/layout";
import SinglePage from "./pages/singlePage/SinglePage";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <HomePage />,
				},
				{
					path: "/categories",
					element: <CategoryPage />,
				},
				{
					path: "/:id",
					element: <SinglePage />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
