import styled from 'styled-components'

const InfoLine = ({icon, name}) => {
    return <Wrapper>
        {icon} {name}
    </Wrapper>
}

const Wrapper = styled.div`
display: flex;
align-items: center;
padding-left: 16px;
line-height: 18px;
padding-top: 5px;
padding-bottom: 5px;
span {
    margin-right: 15px;
    svg {
        height: 17px;
    }
}
`

export default InfoLine