import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  LandingPage,
  ErrorPage,
  HomeLayout,
  MenuPage,
  EventsPage,
  AboutUsPage,
  LoginPage,
} from "./pages";
import { MenuAll, MenuMeat, MenuMushroom, MenuSea, MenuVegetarian } from "./components/OutletChild";

const route = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },

      {
        path: "menu",
        element: <MenuPage />,
        children: [
          { index: true, element: <MenuAll /> },
          { path: "meat", element: <MenuMeat /> },
          { path: "vegetarian", element: <MenuVegetarian /> },
          { path: "sea", element: <MenuSea /> },
          { path: "mushroom", element: <MenuMushroom /> },
        ],
      },

      { path: "events", element: <EventsPage /> },
      { path: "about", element: <AboutUsPage /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
]);

export default function App() {
  return <RouterProvider router={route} />;
}
