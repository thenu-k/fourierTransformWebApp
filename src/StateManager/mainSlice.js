import { CaseReducer, CaseReducerWithPrepare, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
    name: 'mainSlice',
    initialState:{
        isMobile: null,
        isLoggedIn: null,
        tweetData: null
    },
    reducers:{
        setRawData: (state, action)=> {
            console.log('Yo')
            state.RawData = 'test'
        }
    }
})

//Exports
export const {setRawData} = mainSlice.actions
export default mainSlice.reducer