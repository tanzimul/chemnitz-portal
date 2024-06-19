import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import Layout from "./pages/layout/layout";
import SinglePage from "./pages/singlePage/SinglePage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegistrationPage from "./pages/registrationPage/RegistrationPage";

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
				{
					path: "/profile",
					element: <ProfilePage />,
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
	]);

	return <RouterProvider router={router} />;
}

export default App;
