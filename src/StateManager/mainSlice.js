import { CaseReducer, CaseReducerWithPrepare, createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import * as F from './fourierFunction'

export const mainSlice = createSlice({
    name: 'mainSlice',
    initialState:{
        RawData: null,
        TransformedData: null,
        PhaseData: null
    },
    reducers:{
        setRawData: (state, action)=> {
            state.RawData = action.payload
            const [intensities, phases] = F.fourierTransform(action.payload)
            const tempTransformed = []
            const tempPhaseData = []
            for(let count = 0; count<intensities.length; count++){
                tempTransformed.push({
                    name: count,
                    uv: intensities[count]
                })
                tempPhaseData.push({
                    name: count,
                    uv: phases[count]
                })
            }
            state.TransformedData = tempTransformed
            state.PhaseData  = tempPhaseData
        }
    }
})

//Exports
export const {setRawData} = mainSlice.actions
export default mainSlice.reducer