import { createSlice } from "@reduxjs/toolkit"
//reducers are called on the dispatch on the action like additems
        //here is the place where what action will call what reducer function 
        //reduces are functions only
        //mapping b/w actions and reducer funcrttion

        //reducer functon takes in two parameters i.e . 
        //state(_ this is the initial state of the slice i.e it is empty [] initially )  data sending initial data
        // actionpayload(_this is the place where i will get the items which we added by clicking on add button )--data comin in 
const cartSlice = createSlice({
    name : 'Cart',
    initialState : {
        items : [],
    },
    reducers : { //reducers
        addItem : (state,action) => { 
            state.items.push(action.payload)
        },
        removeItem : (state,action) => {
            state.items = state.items.filter(item => item.card.info.id !== action.payload.card.info.id);
        },
        clearCart:(state) =>{ 
            state.items = [];
        },
    },
})

export const { addItem,removeItem,clearCart } =cartSlice.actions;//plural

export default cartSlice.reducer;

//export also the actions from here
//export the reducers functions here reducer
// cartSlice = {
//     actions;{
//         addItem,
//         removeItems,
//         clearCart,
//     }
//     reducer : reducers
// }