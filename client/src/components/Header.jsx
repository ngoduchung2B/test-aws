import styled from 'styled-components'

const Header = ({name, icon}) => {
    return <Wrapper>
        <HeaderName>
            {icon}
            {name}
        </HeaderName>
        <Triangle />
    </Wrapper>
}

const Triangle = styled.div`
  width: 0; 
  height: 0; 
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent; 
  border-right:15px solid white; 
`

const HeaderName = styled.div`
    font-family: 'Roboto Condensed', Arial, sans-serif;
    margin-left: 15px;
    color: #333;
    text-transform: uppercase;
    line-height: 32px;
    font-size: 18px;
    font-weight: 300;
    font-style: inherit;
    vertical-align: baseline;
    span {
        margin-right: 10px;
        svg {
            height: 17px;
        }
    }
`

const Wrapper = styled.div`
    background-color: #FBBD88;
    width: 95%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 20px;
`

export default Header