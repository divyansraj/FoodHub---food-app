import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import Location from "./Location";

const Title = () => {
  return (
    <div className="flex">
      <Link to={"/"} className="flex">
        <img
          className="w-48"
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
    <header className="bg-[#0b1419] text-white py-2 px-10 flex justify-between items-center shadow-md">
      <Title />
      <Location />
      <div data-testid="onlineStatus" className="absolute top-0 left-0">
        {isonline ? "📶" : "⛔"}
      </div>
      <nav>
        <ul className="flex space-x-4 text-lg">
          <li className="hover:text-gray-400">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link to={"/recipes"}>Recipes</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link to={"/instamart"}>InstaMart</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <div className="relative flex items-center">
          <span
            data-testid="cartItem"
            className="absolute -top-2 -right-2 bg-orange-700 text-white rounded-full px-2 text-sm"
          >
            {cartItems.length}
          </span>
          <Link to={"/cart"} className="flex items-center hover:text-gray-400">
            Cart
          </Link>
        </div>
        {isLoggedIn ? (
          <button
            className="py-1 px-5 border border-gray-500 rounded-sm hover:bg-gray-700 transition duration-300"
            onClick={() => setIsLoggedIn(false)}
          >
            LogOut
          </button>
        ) : (
          <button
            className="py-1 px-5 border border-gray-500 rounded-sm hover:bg-gray-700 transition duration-300"
            onClick={() => setIsLoggedIn(true)}
          >
            LogIn
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
