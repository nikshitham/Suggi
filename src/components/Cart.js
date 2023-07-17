import { Link } from "react-router-dom";

const Cart = () => {
    return(
       <div className="cart-container">
        <div className="cart-img">
           {/* <img className="cart-logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="cart-image" /> */}
        </div>
        <div className="cart-text1">
              Your cart is empty
        </div>
        <div className="cart-text2">
        You can go to home page to view more restaurants
        </div>
        <div >
           <Link to="/"><button className="cart-button">See restaurants</button></Link> 
        </div>
       </div>
    );
}

export default Cart;