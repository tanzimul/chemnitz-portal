import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import { Layout, RequireAuth } from "./pages/layout/layout";
import SinglePage from "./pages/singlePage/SinglePage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import LoginPage from "./pages/loginPage/LoginPage";
import ProfileUpdatePage from "./pages/profileUpdatePage/ProfileUpdatePage";
import RegistrationPage from "./pages/registrationPage/RegistrationPage";
//import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";

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
					//loader: categoryPageLoader,
				},
				{
					path: "/:id",
					element: <SinglePage />,
					//loader: singlePageLoader,
				},
				{
					path: "/login",
					element: <LoginPage />,
				},
				{
					path: "/register",
					element: <RegistrationPage />,
				},
			],
		},
		{
			path: "/",
			element: <RequireAuth />,
			children: [
				{
					path: "/profile",
					element: <ProfilePage />,
					//loader: profilePageLoader,
				},
				{
					path: "/profile/update",
					element: <ProfileUpdatePage />,
				},
				// {
				// 	path: "/add",
				// 	element: <NewPostPage />,
				// },
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
