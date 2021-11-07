import { ShoppingOutlined, ExclamationCircleOutlined, UserOutlined, InsertRowAboveOutlined, MailOutlined, PhoneOutlined, HomeOutlined, ReadOutlined, AimOutlined, BankOutlined } from '@ant-design/icons';

export const contactInfo = {
    name: "CONTACT INFORMATION",
    icon: <ExclamationCircleOutlined />,
    data: [
        {
            name: 'Male',
            icon: <UserOutlined />
        },
        {
            name: 'Sep 06, 1998',
            icon: <InsertRowAboveOutlined />
        },
        {
            name: 'ngoduchungnaruto@gmail.com',
            icon: <MailOutlined />
        },
        {
            name: '0394524455',
            icon: <PhoneOutlined />
        },
        {
            name: 'Hanoi, Vietnam',
            icon: <HomeOutlined />
        },
    ]
} 

export const skills = {
    name: "SKILLS",
    icon: <ReadOutlined />,
    data: <div><strong>Language:</strong><br />English, javascript<br /><br /><strong>framework:</strong><br />reactJS, vueJS, expressJS</div>
}

export const objective = {
    name: "OBJECTIVE",
    icon: <AimOutlined />,
    data: <div>I'm a student at Bach Khoa university with a major in automation. In the third year, I found out that I have great passion in developing website so I decide to pursue dream, that this becoming a great developer.</div>
}

export const education = {
    name: "EDUCATION",
    icon: <BankOutlined />,
    data: [
        {
            data: <div><strong>Bach Khoa university</strong>, Major: automation <br/>
            I'm haven't graduated yet. I'm doing my graduation thesis</div>,
            time: 'Aug 2016  -  PRESENT'
        }
    ]
}

export const experience = {
    name: "WORK EXPERIENCE",
    icon: <ShoppingOutlined />,
    data: [
        {
            data: <div><strong>NTQ</strong>, fulltime developer<br/>
            Main responsibilities:<br/>
            - develop and maintain shopify application.<br/>
            technologies:<br/>
            - ReactJS,typescript,  javascript, css, HTML, nodejs, liquid</div>,
            time: 'DEC 2020  -  PRESENT'
        },
        {
            data: <div><strong>REACT PLUS,</strong>, Part-time developer<br/>
            Main responsibilities:<br/>
            - develop and maintain projects about website<br/>
            technologies:<br/>
            - ReactJS, javascript, CSS, HTMl, nodejs, vueJS:</div>,
            time: 'APR 2020  -  NOV 2020'
        },
        {
            data: <div><strong>BACH KHOA HA NOI</strong>, student<br/>
            Project about Fingerprint attendance in class<br/>
            - create hardware for getting-fingerprint fingerprint and build a server by nodejs, graphql, appollo reactTS to handle the data those can be gotten from fingerprint module <br/>
            - link video<br/> demo: https://drive.google.com/file/d/1KpaMWLoQFh7X16HbA3fvikH0hQIlzqr5/view?usp=sharing</div>,
            time: 'DEC 2019  -  APR 2020'
        }
    ]
}