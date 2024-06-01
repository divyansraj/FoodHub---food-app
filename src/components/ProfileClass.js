import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "any",
      },
    };
    console.log("Child - Constructor");
  }
 /* async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/divyansraj"
    );
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("Child - componentDidmount");
  }*/
  componentDidMount(){
    this.timer = setInterval(()=>{
        console.log(" Child - componentDidMount")
    },1000)
    // console.log("Child - componentDidMount");
  }
  componentDidUpdate(){
    console.log("Child - componentDidUpdate");
  }
  componentWillUnmount(){
    clearInterval(this.timer);
    console.log("Child - componentWillUnmount");
  }

  render() {
    const { count } = this.state;
    console.log("Child - render");
    return (
      <div>
        <h1>PROFILE CLASS COMPONENT</h1>
        <h2>
          {this.state.userInfo.id},{this.state.userInfo.name}
        </h2>
        <img src="{this.state.userInfo.avatar_url}"></img>
        <h4>{this.state.userInfo.created_at}</h4>
        {/* <button
          onClick={() => {
            this.setState((props) => ({
              count: props.count + 1,
            }));
          }}
        >
          COUNT
        </button>
        <h4>Clicking : {count}</h4> */}
      </div>
    );
  }
}
export default ProfileClass;
