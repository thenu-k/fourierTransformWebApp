import styled from "styled-components";
import DataSection from "./DataSection/DataSection";
import GraphTemplate from "./GraphSection/GraphTemplate";
import NavBar from "./NavBar/NavBar";
import {useSelector, useDispatch } from 'react-redux'
import { setRawData } from "./StateManager/mainSlice";
import {sech, sin} from "mathjs";
import SummationTable from "./DataSection/SummationTable";

function App() {
  const dispatch = useDispatch()
  //Generate Initial Data
  const {RawData} = useSelector(state => state.RawData)
  if(RawData===null){
    const initialRawData = generateRawData()
    dispatch(setRawData(initialRawData))
  }

  //Getting the data
  const {TransformedData}  = useSelector(state => state.TransformedData)
  const {PhaseData} = useSelector(state => state.PhaseData)
  return (
    <S_App className="center">
      <NavBar/>
      <div className="firstRow center">
        <GraphTemplate data={RawData} title={`Amplitude V Time`}/>
        <DataSection/>
      </div>
      <div className="firstRow center">
        <GraphTemplate data={TransformedData} title={`Intensity V Freq`}/>
        <SummationTable/>
      </div>
      <div className="firstRow center">
        <GraphTemplate data={PhaseData} title={`Phase V Freq`}/>
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
