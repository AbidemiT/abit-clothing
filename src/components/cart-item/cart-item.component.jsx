import '../cart-item/cart-item.styles.scss'

const CartItem = ({cartItem}) => {
    const {name, quantity} = cartItem
    console.log({cartItem});
    return (
        <div>
            <h2>{name}</h2>
            <span>{quantity}</span>
        </div>
    )
}

export default CartItem;