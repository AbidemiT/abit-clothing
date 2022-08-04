import { useContext } from 'react';

import { CartContext } from '../../contexts/Cart.context';

import '../checkout-item/checkout-item.styles.scss'

const CheckoutItem = ({cartItem}) => {
    const {removeFromCart, addItemToCart, removeItemFromCart,} = useContext(CartContext);
    const {name, price, quantity, imageUrl} = cartItem;
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="price">{price}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItemToCart(cartItem)}>&#10095;</div>
            </span>
            <div className="remove-button" onClick={() => removeFromCart(cartItem)}>&#10007;</div>
        </div>
    )
}

export default CheckoutItem;