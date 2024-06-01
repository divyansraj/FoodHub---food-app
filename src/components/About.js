import { Outlet } from "react-router-dom";
// import ProfileFunc from "./Profile";
import ProfileClass from "./ProfileClass";
import {Component} from "react";

class About extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name : "DK",
                location: "NaN",
            }
        }
        console.log("Parent - COnstructor");
    }
    componentDidMount(){
        console.log("Parent - componentDidMount");
    }

    render(){
        console.log("Parent - Render")
        return (
        <div>
            <h1>About us Section</h1>
            <h2>Terms of Company</h2>
            <h2>Privacy policy</h2>
            <h2>Contact us</h2>
            <ProfileClass name="Child 1" class="Calling ProfileClass" />
            {/* <ProfileClass name="Child 2" class="Calling ProfileClass 2nd time"/> */}
        </div>
    )
    }
}


export default About;