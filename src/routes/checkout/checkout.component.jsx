import { useContext } from 'react';
import '../checkout/checkout.styles.scss'
import { CartContext } from '../../contexts/Cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
    const { cartItems, cartItemsCount, cartTotal } = useContext(CartContext);
    return (
        <div className='checkout-container'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {!cartItemsCount && <h3>Cart is Empty!!!</h3>}
            {
                cartItems.map(cartItem => {
                    return (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
                })
            }

            <span className='total'>Total:&#8358; {cartTotal}</span>
        </div>
    )
}

export default Checkout;