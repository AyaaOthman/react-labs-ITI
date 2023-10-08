import { Component } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Artist from "./components/Artist/Artist";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";

const routes = createBrowserRouter([
  {
    path: "",
    element: <LayOut />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "artist",
        element: <Artist />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "testimonial",
        element: <Testimonial />,
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
