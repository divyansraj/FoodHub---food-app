
import {useSelector } from "react-redux";
import Fooditem from "./Fooditem";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
    //i am only subscribing to only the item array not whole redux store
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems)
    // const store = useSelector(store => store); 
    // this should not be doen we have to subscribe only to th soecific tem not whole store
    const dispatch = useDispatch();
    const removeCart =(Fooditem) =>{
        dispatch(clearCart(Fooditem));

    }

    return (
        <div className=" max-w-[800px] mx-auto my-0">
            <div className="flex justify-around">
            <h1 className=" text-center font-semibold text-2xl mt-3">Cart Items : {cartItems.length}</h1>
            <button className="bg-white   text-sm text-orange-700 font-bold px-8 py-1 border-2 border-slate-300 hover:border-slate-600 " 
            onClick={() => removeCart(Fooditem)}>Clear Cart</button>
            
            </div>
            
            <Fooditem item={cartItems}></Fooditem>
            
        </div>
    )
}

export default Cart;