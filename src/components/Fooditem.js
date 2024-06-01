import { IMG_URL } from "../config";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const Fooditem = ({ item }) => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  const addFoodItem = (each) => {
    dispatch(addItem(each));
    console.log("New state after addition:", cartItems);
  };
  const removeFoodItem = (each) => {
    dispatch(removeItem(each));
    console.log("New state after removal:", cartItems);
  };
  return (
    <div>
      <h1>{console.log(item)}</h1>
      {item?.map((each) => (
        <>
          <div key={each.card.info.id} className="bg-[rgba(233,233,233,0.23)] flex flex-row justify-between py-1 px-0">
            <div className="relative h-34 flex flex-col justify-between  py-5 px-0 rounded-md">
            <div className="flex flex-col">
            <h2>{each?.card?.info?.name}</h2>
              <h2>{each?.card?.info?.description}</h2>
              <h2>Price :₹{each?.card?.info?.price / 100}</h2>
              <div className="flex  rounded-md">
                <button
                  className="bg-white   text-sm text-orange-700 font-bold px-8 py-1 border-2 border-r-0 border-slate-300 hover:border-slate-600 "
                  onClick={() => addFoodItem(each)}
                >
                  +
                </button>
                
                <button
                  className="bg-white text-sm text-orange-700 font-bold px-8 py-1 border-2 border-slate-300 hover:border-slate-600 "
                  onClick={() => removeFoodItem(each)}
                >
                  -
                </button>
            </div>
              
              </div>
            </div>
            <img
              className=" w-32 h-32 bg-center"
              src={IMG_URL + each?.card?.info?.imageId}
              alt="menuImg"
            ></img>
          </div>
        </>
      ))}
    </div>
  );
};

export default Fooditem;
