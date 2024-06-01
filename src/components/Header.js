import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { baseUrl } from "../config";
import { useSelector } from "react-redux";
import Location from "./Location";
// const loggedInUser = () => {
//   //authetication api
//   return true;
// };

const Title = () => {
  return (
    <div className="flex">
      <Link to={baseUrl + "/"} className="flex">
      <img
        className=" w-48 "
        src="https://foodhub.modeltheme.com/wp-content/themes/foodhub/images/logo.png"
        alt="logo"
      />
    </Link>

    </div>
    
  );
};

const Header = () => {
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isonline = useOnline();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
    
      <div className="bg-[#0b1419] flex justify-between items-center py-2 px-10">
        <Title />
        <Location/>
        <div data-testid="onlineStatus" className="absolute top-0 left-0">{isonline ? "📶" : " ⛔"}</div>
        <div>
          <ul className="nav-items flex text-white p-1">
            <li className=" m-2 font-medium cursor-pointer  ">
              <Link to={baseUrl + "/"}>Home</Link>
            </li>
            <li className=" m-2 font-medium cursor-pointer  ">
              <Link to={baseUrl + "/recipes"}>Recipes</Link>
            </li>
            {/* <li className=" m-2 font-medium cursor-pointer  ">Pages</li>
            <li className=" m-2 font-medium cursor-pointer  ">Blog</li> */}
            <li className=" m-2 font-medium cursor-pointer  ">
              <Link to={baseUrl + "/contact"}>Contact</Link>
            </li>
            <li className=" m-2 font-medium cursor-pointer  ">
              <Link to={baseUrl + "/about"}>About</Link>
            </li>
            <li className=" m-2 font-medium cursor-pointer  ">
              <Link to={baseUrl + "/instamart"}>InstaMart</Link>
            </li>
          </ul>
        </div>
        <div className=" w-52 flex justify-center items-center gap-5">
          <div className="flex items-center text-stone-200 m-2 font-medium cursor-pointer ">
          <div data-testid="cartItem" className="p-2 h-[20px] mx-1 bg-orange-700 rounded-t-lg   flex items-center">
            {cartItems.length}
          </div>
          <Link to={baseUrl + "/cart"}>Cart</Link>
          
            
          </div>
          {isLoggedIn ? (
            <button
              className="py-1 px-5 rounded-sm border-2 border-solid border-gray-500 text-white bg-transparent   "
              onClick={() => setIsLoggedIn(false)}
            >
              LogIn
            </button>
          ) : (
            <button
              className="py-1 px-3 rounded-sm border-2 border-solid border-gray-500 text-white bg-transparent   "
              onClick={() => setIsLoggedIn(true)}
            >
              LogOut
            </button>
          )}
        </div>
      </div>
       
      
    </div>
  );
};

export default Header;
