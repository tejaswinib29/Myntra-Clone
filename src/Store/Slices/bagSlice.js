import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
    name: 'bag',
    initialState: {
        bagItems: [],
        loading: false,
        error: false,
        noofItemsInBag: 0
    },
    reducers: {
        addItemToBag: (state, action) => {
            // state will contain initialstate
            // action will be an object which will have type and payload parameters 

            state.bagItems.push(action.payload)
            state.noofItemsInBag++

            // this action will add item in the cart
            // eventually in the bagItems array in bag slice 
            
         },

        removeItemFromBag: (state,action) => {
            // this action will remove items from the cart 
            // eventually remove value from bagItems array in bag slice 
        }
    }
})

export const { addItemToBag ,  removeItemFromBag } = bagSlice.actions

export default bagSlice.reducer