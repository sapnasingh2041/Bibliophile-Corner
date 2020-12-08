import Axios from 'axios';
import Cookie from "js-cookie";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

const addToCart = (productId, qty) => async (dispatch, getstate) => {
    try {
        const {data} = await Axios.get("/api/products/" + productId);
        dispatch({
          type: CART_ADD_ITEM, payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    });
    const {cart:{cartItems}} = getstate();
    Cookie.set("cartItems", JSON.stringify(cartItems));

    } catch (error) {
        
    }
}
const removeFromCart = (productId) => (dispatch, getstate ) =>{
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });

    const {cart:{cartItems}} = getstate();
    Cookie.set("cartItems", JSON.stringify(cartItems));
}
export { addToCart, removeFromCart };
