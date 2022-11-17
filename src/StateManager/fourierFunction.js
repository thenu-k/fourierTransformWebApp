import { arg, complex } from "mathjs"

export const fourierTransform = (rawData, samplingRate) => {
    const rawAmplitudes = []
    rawData.forEach(element => {
        rawAmplitudes.push(element.uv)
    })
    const numSamples = rawAmplitudes.length

    const realSums = []
    const imaginarySums = []
    let k = 0
    
    for(let outerCount = 0; outerCount<numSamples; outerCount++){
        let realSum = 0
        let imaginarySum = 0
        for(let innerCount = 0; innerCount<numSamples; innerCount++){
            realSum = realSum+ rawAmplitudes[innerCount] * Math.cos((2*Math.PI*innerCount*k)/numSamples)
            imaginarySum = imaginarySum -rawAmplitudes[innerCount] * Math.sin((2*Math.PI*innerCount*k)/numSamples)
        }
        realSums.push(realSum)
        imaginarySums.push(imaginarySum)
        k++
    }
    const intensities = []
    const phases = []
    for(let newCount = 0; newCount< numSamples/2 +1; newCount++){
        const currentPhase = arg(complex(`${realSums[newCount]} + ${imaginarySums[newCount]}i`))*(180/Math.PI)
        const currentIntensity = (Math.pow( ( Math.pow(realSums[newCount],2) + Math.pow(imaginarySums[newCount],2)), 0.5)) /numSamples
        phases.push(currentPhase)
        intensities.push(currentIntensity)
    }
    return [intensities, phases, realSums, imaginarySums]
}