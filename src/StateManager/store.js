import {configureStore} from '@reduxjs/toolkit'
import RawData from './mainSlice'


export default configureStore({
    reducer: {
        RawData: RawData
    }
})