import styled from 'styled-components'
import Header from './Header'
import TimeProcess from './TimeProcess'

const TimeBox = ({ props }) => {
    const {name, icon, data} = props
    return <Wrapper>
        <Header name={name} icon={icon} />
        {data.map((lineData, index) => {
            return <TimeProcess key={index} props={lineData} />
        })}
    </Wrapper>
}

const Wrapper = styled.div`
    padding: 30px 0px 0px 30px;
`

export default TimeBox