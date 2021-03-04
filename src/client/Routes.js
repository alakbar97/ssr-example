import React from "react";

import Home from "./pages/HomePage";
import UsersList from "./pages/UsersListPage";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
import AdminsListPage from "./pages/AdminsListPage";

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: "/",
        exact: true,
      },
      {
        ...UsersList,
        path: "/users",
        exact: true,
      },
      {
        ...AdminsListPage,
        path: "/admins",
        exact: true,
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
