import styled from 'styled-components'
import InfoBox from './components/InfoBox'
import NomalBox from './components/NomalBox'
import TimeBox from './components/TimeBox'
import UserImageBox from './components/UserImageBox'
import { contactInfo, skills, objective, education, experience } from './services/const'

function App() {
  return (
    <AppWrapper>
      <Wrapper>
        <FirstColumn>
          <UserImageBox />
          <InfoBox props={contactInfo} />
          <NomalBox props={skills} />
          <NomalBox props={objective} />
        </FirstColumn>
        <SecondColumn>
          <TimeBox props={education} />
          <TimeBox props={experience} />
        </SecondColumn>
      </Wrapper>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background-color: rgb(82,86,89);
  padding-top: 30px;
  padding-bottom: 30px;
`

const Wrapper = styled.div`
  padding: 0px 15px;
  background-color: white;
  display: flex;
  width: 800px;
  height: 930px;
  margin: 0px auto;
  font-family: 'Roboto Condensed', Arial, sans-serif;
  font-weight: 100;
`

const FirstColumn = styled.div`
flex: 5;
max-width: 41.66%;
width: 41.66%;
`

const SecondColumn = styled.div`
flex: 7;
max-width: 58.33%;
width: 58.33%;
`


export default App;
