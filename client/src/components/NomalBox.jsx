import styled from 'styled-components'
import Header from './Header'

const NomalBox = ({ props }) => {
    const { name, icon, data } = props
    return <Wrapper>
        <Header name={name} icon={icon} />
        <DataCover>{data}</DataCover>
    </Wrapper>
}

const Wrapper = styled.div`
    padding: 10px 0px;
`

const DataCover = styled.div`
    padding: 10px 0px 10px 15px;
    div {
        strong {
            font-weight: 700;
        }
    }
`

export default NomalBox