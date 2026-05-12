import { createBrowserRouter } from "react-router-dom";
import { LandingPage, ErrorPage, HomeLayout, MenuPage, EventsPage, AboutUsPage } from "./pages";

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
]);

const App = () => {
  return <></>;
};

export default App;
