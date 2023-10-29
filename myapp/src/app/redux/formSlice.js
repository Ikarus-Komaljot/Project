import {createSlice} from "@reduxjs/toolkit"
const initialState={
    firstName:'',
    lastName:'',
    email:'',
    urls:[],
}

const formSlice=createSlice({
    name:'form',
    initialState,
    reducers:{
        updateFirstName:(state,action)=>{
            state.firstName=action.payload;
        },
        updateLastName:(state,action)=>{
            state.lastName=action.payload;
        },
        updateEmail:(state,action)=>{
            state.email=action.payload;
        },
        updateUrls:(state,action)=>{
            state.urls=action.payload;
        },

    },

})

export const {updateFirstName,updateLastName,updateEmail,updateUrls}=formSlice.actions;
export default formSlice.reducer;
