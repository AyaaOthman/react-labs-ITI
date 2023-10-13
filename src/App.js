import { Component } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Artist from "./components/Artist/Artist";
import NotFound from "./components/NotFound/NotFound";

const routes = createBrowserRouter([
  {
    path: "",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },

      {
        path: "artist",
        element: <Artist />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

class App extends Component {
  render() {
    return <RouterProvider router={routes}></RouterProvider>;
  }
}
export default App;
