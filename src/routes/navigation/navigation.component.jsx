import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as CrownLogo } from "../../assets/svgs/crown.svg";
import {signOutUser} from '../../utils/firebase/firebase.utils'

import "../navigation/navigation.styles.scss"

import { UserContext } from "../../contexts/user.context";

const Navigation = () => {
    const {currentUser} = useContext(UserContext);

    console.log(currentUser);

    const signOutHandler = async () => {
        await signOutUser()
    }

    return (
        <Fragment>
            <div className="navigation">
                <Link to={"/"} className="logo-container">
                    <CrownLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to={"/shop"}>Shop</Link>
                    {currentUser ? (<span onClick={signOutHandler}>Sign Out</span>) : (<Link className="nav-link" to={"/auth"}>Sign In</Link>)}
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;