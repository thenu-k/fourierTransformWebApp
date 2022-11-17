import { CaseReducer, CaseReducerWithPrepare, createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import * as F from './fourierFunction'

export const mainSlice = createSlice({
    name: 'mainSlice',
    initialState:{
        RawData: null,
        TransformedData: null,
        PhaseData: null,
        TransformedRawData: null
    },
    reducers:{
        setRawData: (state, action)=> {
            state.RawData = action.payload
            const [intensities, phases, realSums, imaginarySums] = F.fourierTransform(action.payload)
            const tempTransformed = []
            const tempPhaseData = []
            const tempTransformedRaw = []
            for(let count = 0; count<intensities.length; count++){
                tempTransformed.push({
                    name: count,
                    uv: intensities[count]
                })
                tempPhaseData.push({
                    name: count,
                    uv: phases[count]
                })
                tempTransformedRaw.push({
                    valueNumber: count+1,
                    realSum: realSums[count],
                    imaginarySum: imaginarySums[count],
                    intensity: intensities[count],
                    phase: phases[count]
                })
            }
            state.TransformedData = tempTransformed
            state.PhaseData  = tempPhaseData
            state.TransformedRawData = tempTransformedRaw
        }
    }
})

//Exports
export const {setRawData} = mainSlice.actions
export default mainSlice.reducer