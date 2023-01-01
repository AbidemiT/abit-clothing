import { useContext } from 'react';

import { ReactComponent as ShoppingBag } from '../../assets/svgs/shopping-bag.svg';
import { CartContext } from '../../contexts/Cart.context';

import '../cart-icon/cart-icon.styles.scss'

const CartIcon = () => {
    const {showCartDropdown, setShowCartDropdown, cartItemsCount} = useContext(CartContext)
    const toggleCartDropdown = () => {
        showCartDropdown ? setShowCartDropdown(false) : setShowCartDropdown(true)
    }

    return (
        <div className='cart-icon-container' onClick={toggleCartDropdown}>
            <ShoppingBag className='shopping-icon'>
            </ShoppingBag>
            <span className="item-count">{cartItemsCount}</span>
        </div>
    )
}

export default CartIcon;