import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { StaticRouter } from "react-router-dom/server"
import store from "../../utils/store"
import Body from "../Body"


test("Testing the search restaurant on the home page", () => {
    const body = render(
        <StaticRouter>
        <Provider store ={store}>
            <Body/>
        </Provider>
        </StaticRouter>
        );

        console.log(body)


})