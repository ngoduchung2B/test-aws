import styled from 'styled-components'

const UserImageBox = () => {
    return <Wrapper>
        <Ribbon />
        <Name>Ngô Đức Hùng</Name>
        <Occupation>Developer</Occupation>
        <Image src={'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/165014563_818267502107787_4065962110945429089_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=ms6FA4S3EgoAX8bZZs-&_nc_ht=scontent.fhan5-8.fna&oh=512fdeba136a19fcb82bedc18c2d74db&oe=61AE601E'} />
    </Wrapper>
}

const Ribbon = styled.div`
width: 40%;
height: 200px;
background-color: #ffe1cc;
position: absolute;
top: 0;
`

const Image = styled.img`
background: black;
height: 180px;
width: 180px;
border-radius: 50%;
margin: 10px;
z-index: 2;
`

const Occupation = styled.div`
margin: 10px;
font-size: 16px;
z-index: 2;
`

const Name = styled.div`
margin-top: 10px;
font-weight: 500;
font-size: 24px;
text-transform: uppercase;
line-height: 42px;
z-index: 2;
font-style: inherit;
vertical-align: baseline;
`

const Wrapper = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
padding: 20px;
position: relative;
`

export default UserImageBox