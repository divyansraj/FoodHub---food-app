import UserContext from "../utils/UserContext";
import { useContext } from "react";
import Location from "./Location";
const HeroSection = () => {
    const {user} =useContext(UserContext);
    return(
        <div
        className="bg-[url(https://foodhub.modeltheme.com/wp-content/uploads/2020/02/foodhub-slider-main-food-v4.jpg?id=20741)]
        bg-cover bg-no-repeat h-[50vh] overflow-hidden flex flex-row gap-12 justify-center items-center leading-10 text-white  "
      >
        <div className="hero-section-left">
          <h1 className=" text-3xl font-semibold">It is even better than</h1>
          <h1 className=" text-3xl font-semibold">
            an expensive cookery book{" "}
          </h1>
          <p>Learn how to make your favorite restaurant’s dishes</p>
          <div>
            <h1 className="font-bold">
              {user.name} - {user.email}{" "}
            </h1>
          </div>
        </div>
        <div className="hero-section-right">
          <div className="flex">
            <input
              type="text"
              className=" rounded-l-2xl py-1 px-3 border-2 border-solid outline-none text-black bg-white "
              placeholder="I want to make..."
            ></input>
            <button className="rounded-r-2xl py-1 px-3 border-2 border-solid  text-white bg-transparent ">
              Search
            </button>
          </div>
        </div>
        
      </div>
    )
}

export default HeroSection;