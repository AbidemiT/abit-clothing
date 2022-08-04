import { useContext } from 'react';

import { ReactComponent as ShoppingBag } from '../../assets/svgs/shopping-bag.svg';
import { CartContext } from '../../contexts/Cart.context';

import '../cart-icon/cart-icon.styles.scss'

const CartIcon = () => {
    const {showCartDropdown, setShowCartDropdown} = useContext(CartContext)
    const toggleCartDropdown = () => {
        showCartDropdown ? setShowCartDropdown(false) : setShowCartDropdown(true)
    }

    return (
        <div className='cart-icon-container'>
            <ShoppingBag className='shopping-icon' onClick={toggleCartDropdown}>
            </ShoppingBag>
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon;