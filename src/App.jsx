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

const route = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
      {
        path: "/about",
        element: <AboutUsPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

const App = () => {
  return <RouterProvider router={route} />;
};

export default App;
