import {useContext} from 'react'

// components
import Button from "../button/button.component";
import CartItem from "../cartItem/cartItem.component";
// contexts
import { CartDropdownContext } from "../../contexts/cardDropdown.context.jsx";
// css
import './cartDropdown.styles.scss'

const CartDropdown = () => {
    const {cartItems} = useContext(CartDropdownContext)
    
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(item=> <CartItem key={item.id} cartItem={item}/>)}
      </div>
        <Button>Go To Check Out</Button>
    </div>
  );
};

export default CartDropdown;
