import React, {useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux"; 
import store from "./utils/store";

function App() {
  const [user, setUser] = useState({
    name: "Divyanshu",
    email: "user@example.com",
  });
  useEffect(() => {
    // autheticatation
    //setuser
  });
  return (
    <Provider store={store}>
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser,
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
    </Provider>
  );
};


export default App;