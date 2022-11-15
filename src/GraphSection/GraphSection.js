import styled from "styled-components"
import GraphTemplate from "./GraphTemplate"

const GraphSection = () => {
  return (
    <S_GraphSection className="center gsection">
        <GraphTemplate/>
    </S_GraphSection>
  )
}

const S_GraphSection = styled.section`
    flex-direction: column;
`

export default GraphSection