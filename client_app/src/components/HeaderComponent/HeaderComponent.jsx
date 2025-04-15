import React from "react";
import { Outlet } from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <h1>Header Component</h1>
            <Outlet></Outlet>
        </div>
    );
}
export default HeaderComponent;