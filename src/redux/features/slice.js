import {createSlice} from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

const items = localStorage.getItem('data') != null ? JSON.parse(localStorage.getItem('data')):[]

const catSlice = createSlice({
    name:"cat",
    initialState:{
        cats: items,
        catValue: {
            catName:"",
            catImage:"",
            catClick:""
        }
    },
    reducers:{
       addCat : (state, action) =>{
        const newData = {...action.payload, id: uuidv4()};
        state.cats =  [newData, ...state.cats]
        localStorage.setItem("data", JSON.stringify(state.cats.map(item=>item)))
       },
    }
})

export const { addCat} = catSlice.actions;

export default catSlice.reducer;