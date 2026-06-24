import Heading from "../components/heading.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Heading />

            <Outlet />
        </div>
    );
};

export default Layout;