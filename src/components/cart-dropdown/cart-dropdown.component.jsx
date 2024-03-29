import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../button/button.component'
import '../cart-dropdown/cart-dropdown.styles.scss'

import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/Cart.context'

const CartDropdown = () => {
    const {cartItems, cartItemsCount} = useContext(CartContext)
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {!cartItemsCount && <h3>Cart is Empty!!!</h3>}
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <Button onClick={goToCheckoutHandler}>Checkout</Button>
        </div>
    )
}

export default CartDropdown;