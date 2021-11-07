import styled from 'styled-components'

const TimeProcess = ({props}) => {
    return <Wrapper>
        <Cover>
            <TimeLine>{props.time}</TimeLine>
            <Content>
            {props.data}
            </Content>
            <Circle />
        </Cover>
    </Wrapper>
}

const Content = styled.div`
    padding-top: 10px;
    strong {
        font-weight: 700;
    }
`

const TimeLine = styled.div`
    position: absolute;
    top: -10px;
    left: 15px;
    font-size: 12px;
`

const Circle = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    position: absolute;
    background-color: rgb(251,189,136); 
    top: -5px;
    left: -5px;
`

const Cover = styled.div`
    margin-top: 20px;
    position: relative;
    border-left: 1px solid rgb(251,189,136);
    padding-left: 15px;

`

const Wrapper = styled.div`
    word-break: break-word;
    margin: -5px 5px 0px 5px;
`

export default TimeProcess