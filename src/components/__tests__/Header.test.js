import { render } from "@testing-library/react";
import Header from "../Header";
import store from "../../utils/store";
import { Provider } from "react-redux";
import {StaticRouter} from "react-router-dom/server";
test("Loading th logo of the header section our App",() =>{
    const header = render(
        <StaticRouter>
            <Provider store={store}>
            <Header />
        </Provider>
        </StaticRouter>
        
    
    );
    //console.log(header);
    const logo = header.getAllByTestId("logo");
    //console.log(logo);
    expect(logo[0].src).toBe("http://localhost/Uplit.png");
});
test("Loading the online status to be green",() =>{
    const header = render(
        <StaticRouter>
            <Provider store={store}>
            <Header />
        </Provider>
        </StaticRouter>
        
    
    );
    //console.log(header);
    const onlineStatus = header.getByTestId("onlineStatus");
    //console.log(logo);
    expect(onlineStatus.innerHTML).toBe("📶");
})

test("teting cart shoud be 0 initially", ()=>{
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    )
    const cartItem = header.getByTestId("cartItem");
    //console.log(cartItem);
    expect(cartItem.innerHTML).toBe("0");
})