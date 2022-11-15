import styled from "styled-components";
import GraphSection from "./GraphSection/GraphSection"; 

function App() {
  return (
    <S_App className="center">
      <GraphSection/>
    </S_App>
  );
}

const S_App = styled.section`
  width: 100%;
`

export default App;
