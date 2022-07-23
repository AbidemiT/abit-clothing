import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as CrownLogo } from "../../assets/svgs/crown.svg";

import "../navigation/navigation.styles.scss"

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link to={"/"} className="logo-container">
                    <CrownLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to={"/shop"}>Shop</Link>
                    <Link className="nav-link" to={"/sign-in"}>Sign In</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;