import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as CrownLogo } from "../../assets/svgs/crown.svg";
import { signOutUser } from '../../utils/firebase/firebase.utils'

import "../navigation/navigation.styles.scss"

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/Cart.context";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { showCartDropdown } = useContext(CartContext);

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
                    <CartIcon />
                </div>
                {showCartDropdown && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;