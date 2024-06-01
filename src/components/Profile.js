import { useState } from "react";
const Profile = (props) => {
    const [count,setCount] =useState(0);
    function news(){
        const data = count + 1 ;
        return data;
    }
    return( 
        <div>
            <h1>NEW PROFILE FUNCTIONAL COMPONENT</h1>
            <p>{props.name} , {props.class+" "+"class"}</p>
            <button onClick={
                ()=> {
                    setCount(news());
                }
            }>COUNT</button>
            <h4>Clicking : {count}</h4>
        </div>
    )
}
export default Profile;