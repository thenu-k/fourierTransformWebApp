import React from 'react'
import styled from 'styled-components'

const DataSection = () => {
  return (
    <S_DataSection>
        <p>
          The Discrete Fourier Transform (DFT) converts a finite sequence of equally-spaced samples of a function into a same-length sequence of equally-spaced samples of the discrete-time Fourier transform (DTFT), which is a complex-valued function of frequency.
        </p>
    </S_DataSection>
  )
}

const S_DataSection = styled.div`
    width: 40%;
    height: 25vw;
    background-color: inherit;
    color: white;
`

export default DataSection