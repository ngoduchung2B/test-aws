import styled from 'styled-components'
import Header from './Header'
import InfoLine from './InfoLine'

const InfoBox = ({ props }) => {
    const { name, icon, data } = props
    return <Wrapper>
        <Header name={name} icon={icon} />
        {
            data.map((lineData, index) => {
                return <InfoLine key={index} name={lineData.name} icon={lineData.icon} />
            })
        }
    </Wrapper>
}

const Wrapper = styled.div`
    padding: 10px 0px
`

export default InfoBox