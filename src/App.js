import styled from "styled-components";
import DataSection from "./DataSection/DataSection";
import GraphSection from "./GraphSection/GraphSection"; 
import GraphTemplate from "./GraphSection/GraphTemplate";
import NavBar from "./NavBar/NavBar";

function App() {
  return (
    <S_App className="center">
      <NavBar/>
      <div className="firstRow center">
        <GraphTemplate/>
        <DataSection/>
      </div>
      <div className="firstRow center">
        <GraphTemplate/>
      </div>
      <div className="firstRow center">
        <GraphTemplate/>
      </div>
    </S_App>
  );
}

const S_App = styled.section`
  width: 100%;
  background-color: black;
  flex-direction: column;
  min-height: 100vh;
  color: white;
  & .firstRow{
    width: 95%;
    flex-direction: row;
    justify-content: space-between;
    margin: 50px 0;
    align-items: center;
  }
`

export default App;
