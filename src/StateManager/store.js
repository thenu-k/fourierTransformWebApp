import {configureStore} from '@reduxjs/toolkit'
import RawData from './mainSlice'
import TransformedData from './mainSlice'
import PhaseData from './mainSlice'
import TransformedRawData from './mainSlice'


export default configureStore({
    reducer: {
        RawData: RawData,
        TransformedData: TransformedData,
        PhaseData: PhaseData,
        TransformedRawData: TransformedRawData
    }
})