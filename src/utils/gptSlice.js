import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        isGPTPage:false,
        gptArray:['Veer-Zaara', 'Kuch Kuch Hota Hai', 'Pathaan', 'Jawan', 'My Name Is Khan']
    },
    reducers:{
        toggleGPTPage:(state, action)=>{
            state.isGPTPage = !state.isGPTPage
        },
        addGptArray:(state, action) => {
            state.gptArray = action.payload
        }
    }
})

export const {toggleGPTPage, addGptArray} = gptSlice.actions
export default gptSlice.reducer