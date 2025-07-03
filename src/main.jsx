import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Error from "./Components/Error/Error";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import BooksDetails from "./Components/BookDetails/BooksDetails";
import ListedBooks from "./Components/ListedBooks/ListedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books/:bookId",
        element: <BooksDetails />,
        loader: () => fetch("/booksData.json"), // do not load all the books for one book
      },
      {
        path: "/listedBooks",
        element: <ListedBooks />,
        loader: () => fetch("/booksData.json"), // do not load all data for some, wrost way to load some data
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
