import Body from "./component/Body";
import Head from "./component/Head";
import { Provider } from "react-redux";
import Store from "./utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Fixed typo here
import MainContains from "./component/MainContains";
import WatchPage from "./component/WatchPage";

function App() {
  const AppRouter = createBrowserRouter([ // Fixed typo here
    {
      path: "/",
      element: <Body />,
      children: [ // Use lowercase "children" here
        {
          path: "/",
          element: <MainContains />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);

  return (
    <div className="overflow-hidden h-[100vh] w-[100vw]">
      <Provider store={Store}>
        <Head />
        <RouterProvider router={AppRouter} />
      </Provider>
    </div>
  );
}

export default App;
