import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./AddItem";

export default configureStore ({
    reducer:{
        cart:CartReducer
    }
})