import styled from "styled-components";
import DataSection from "./DataSection/DataSection";
import GraphTemplate from "./GraphSection/GraphTemplate";
import NavBar from "./NavBar/NavBar";
import {useSelector, useDispatch } from 'react-redux'
import { setRawData } from "./StateManager/mainSlice";
import {sech, sin} from "mathjs";

function App() {
  //Generate Initial Data
  const initialRawData = generateRawData()
  //Getting graph data
  const dispatch = useDispatch()
  dispatch(setRawData(initialRawData))
  //Getting the data
  const {RawData}  = useSelector(state => state.RawData)
  const {TransformedData}  = useSelector(state => state.TransformedData)
  const {PhaseData} = useSelector(state => state.PhaseData)
  console.log(TransformedData)
  return (
    <S_App className="center">
      <NavBar/>
      <div className="firstRow center">
        <GraphTemplate data={RawData}/>
        <DataSection/>
      </div>
      <div className="firstRow center">
        <GraphTemplate data={TransformedData}/>
      </div>
      <div className="firstRow center">
        <GraphTemplate data={PhaseData}/>
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

const generateRawData = () => {
  const data = []
  for(var count = 1; count< 41; count++){
    const result = sech(count)**2 + 5*sech(count -10)**2 + 10*sech(count -20)**2 + 5*sech(count -30)**2
    data.push({
      name: count, uv:result
    })
  }
  return data
}

export default App;
