import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../../container/Home/Home";
import UserList from "../../container/UserList/UserList";


function Routing() {
    const element = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/userList", element: <UserList /> },
    ]);
    return element;
}

export default Routing
