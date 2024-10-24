import { IconType } from "antd/es/notification/interface"
import {LinkedinFilled, GithubFilled} from '@ant-design/icons'
import { ReactElement } from "react"

export default interface User {
    name: string
    age: number
    degree: string
    about: string
    describeWords: Array<string>
    keyPoints: Array<{
        count:number,
        description: string
    }>

    projects: Array<{
        name: string
        description: string
        image: string | null
        date: Date | string | null
        more?: {
            images: Array<string>,
            detailedDescription?: string | null,
            linksList?: Array<{
                platform: string
                icon: ReactElement<any, any>
                link: string
            }>
            videos?: Array<string>
        }
    }>,
    timeline: Array<{
        title: string,
        description: string,
        start: string,
        end: string | null
    }>

}

const user : User = {
    name: "Sachindu Kavishka",
    age: 23,
    degree: "Computer Science",
    about: `I’m Sachindu Kavishka, a 3rd-year Computer Science & Technology undergraduate at Uva Wellassa University. My passion lies in both frontend and backend development, where I enjoy creating web and mobile applications using modern frameworks like React, Node.js, and Flutter. I'm always excited by the challenge of turning ideas into impactful software solutions.
With a deep interest in Information and Communication Technology, particularly in software engineering, I thrive on learning and exploring new technologies. I take a proactive approach to solving problems and continuously seek ways to enhance my skills, whether it’s through academic projects or hands-on assignments.`,
    describeWords: [
        'Coder',
        'Programmer',
        'Tech Enthusiast',
        'Problem Solver',
        'React Developer',
        'Flutter Developer',
        'Software Creator',
        'Tech Learner',
        'Engineer',
        'Frontend Developer',
        'Backend Developer',
        'Freelancer'
    ],
    keyPoints: [
        {
            count: 2,
            description: 'Years Experience'
        },
        {
            count: 1,
            description: 'Companies Worked'
        },
        {
            count: 5,
            description: 'Technologies'
        }, 
        {
            count: 15,
            description: 'Projects'
        }
    ],
    projects: [
        {
            name: 'Open Ledger',
            description: 'Develop a secure, web-based Treasury Management System that revolutionizes financial transparency and empowers all organizations, from government entities to private businesses, with real-time visibility, robust controls, and collaborative tools to combat fraud and ensure efficient financial operations.',
            date: '2024-03-20',
            image: 'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fopen_ledger%2FScreenshot%202024-10-23%20175546.png?alt=media&token=c8e98796-49ff-4b90-8661-e13b0bf5d7be',
            more: {
                images: [
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fopen_ledger%2FScreenshot%202024-10-23%20175356.png?alt=media&token=081aa393-7f12-45b6-a329-e0497e16862a',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fopen_ledger%2FScreenshot%202024-10-23%20175456.png?alt=media&token=3ee8393c-64d4-4c6c-86a8-00392388e213',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fopen_ledger%2FScreenshot%202024-10-23%20175510.png?alt=media&token=7b81ae29-1e33-485a-b3b9-df5da8fd9747',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fopen_ledger%2FScreenshot%202024-10-23%20175524.png?alt=media&token=36fb5231-edcb-45eb-8f09-37743ecab10e',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fopen_ledger%2FScreenshot%202024-10-23%20175537.png?alt=media&token=0bbd586e-e84b-4a40-87f0-819c025902db',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fopen_ledger%2FScreenshot%202024-10-23%20175546.png?alt=media&token=c8e98796-49ff-4b90-8661-e13b0bf5d7be',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fopen_ledger%2FScreenshot%202024-10-23%20175558.png?alt=media&token=405b5a8f-44cf-466b-81f8-03e8e4719008',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fopen_ledger%2FScreenshot%202024-10-23%20175608.png?alt=media&token=5c71dda9-6ef7-4bbc-ad42-407675836c97',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fopen_ledger%2FScreenshot%202024-10-23%20175622.png?alt=media&token=ef418ee8-b95d-4474-9e86-ed300f5b34a5',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fopen_ledger%2FScreenshot%202024-10-23%20175631.png?alt=media&token=ac88f77c-5e3e-43c7-aac7-1a799395ff8c',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fopen_ledger%2FScreenshot%202024-10-23%20175637.png?alt=media&token=b853fb4d-3f18-4a5e-893f-c061c438c956',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fopen_ledger%2FScreenshot%202024-10-23%20175649.png?alt=media&token=b7662460-ad1a-4591-b3dc-3e2f2b9e0b10',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fopen_ledger%2FScreenshot%202024-10-23%20175658.png?alt=media&token=a703866b-7a66-45d3-ae5c-833de4a862ab',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fopen_ledger%2FScreenshot%202024-10-23%20175710.png?alt=media&token=d5e39888-a88d-4e0d-aa82-c8c3b2e75819',
                ],
                detailedDescription: `The primary objective of the Treasury Management System is to promote financial transparency and efficiency by providing users with intuitive tools for managing their accounts, accessing treasury groups, and participating in budget estimation and distribution processes. By enabling users to create and modify their accounts securely, facilitating seamless communication within treasury groups, and generating customizable budget estimation reports, the Treasury Management System aims to empower users with the information and resources needed to make informed financial decisions. Additionally, by incorporating features for recording cash flow transactions and identifying potential fraud, the system further enhances transparency and accountability, fostering a culture of trust and integrity within the financial ecosystem.
2. To Provide Facilitate Collaboration and Compliance
Another key objective of the Treasury Management System is to facilitate collaboration and compliance among users and institutions through effective communication tools and auditing mechanisms. By providing notification systems and collaborative tools, such as announcements, chat discussions, and partnership functionalities with auditing firms, the Treasury Management System aims to streamline communication channels and promote collaboration among stakeholders. Additionally, by integrating a secure payment gateway and implementing robust auditing registration processes, the system ensures compliance with regulatory standards and safeguards against fraudulent activities, thereby enhancing the overall integrity and reliability of financial operations within the ecosystem.`,
                videos: [
                    'ec3ODumTg9g'
                ],
                linksList: []
            }
        },

        {
            name: 'Music Player',
            description: '',
            image: null,
            date: '2024-10-12'
        },

        {
            name: 'GPA Calculator',
            description: "Mobile application developed to support students' academic journeys. Our aim is to simplify the often-complex task of GPA calculation and management. This app provides a user-friendly solution that allows students to calculate and keep track of their GPA effortlessly.",
            image: 'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/WhatsApp%20Image%202024-10-02%20at%2015.28.36_c1cb021e.jpg?alt=media&token=0e90fc0f-9fd3-44a9-b692-312e5735c4de',
            date: '2024-03-20',
            more: {
                images: [
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fgpa-calculator%2FScreenshot%202024-10-13%20140014.png?alt=media&token=56c08d36-d079-427b-9805-cf8fae84aeee',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fgpa-calculator%2FScreenshot%202024-10-13%20140311.png?alt=media&token=fb07c451-aea9-4f17-ad68-96e8a73fc9df',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fgpa-calculator%2FScreenshot%202024-10-13%20140321.png?alt=media&token=42d81607-d8f9-41e7-8cc6-e93a4fdde87a',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fgpa-calculator%2FScreenshot%202024-10-13%20140330.png?alt=media&token=a6630183-a74d-40c3-8965-fd8a2b80a217',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fgpa-calculator%2FScreenshot%202024-10-13%20140338.png?alt=media&token=85fea5c1-e68d-4b67-8b37-7fee7349cbcc',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fgpa-calculator%2FScreenshot%202024-10-13%20140345.png?alt=media&token=1bced4e4-5a2c-4d99-9cc5-c435b962071c',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fgpa-calculator%2FScreenshot%202024-10-13%20140351.png?alt=media&token=4ce8b1ce-96f1-4594-9fa2-d681783e935b',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fgpa-calculator%2FScreenshot%202024-10-13%20140407.png?alt=media&token=35e4c981-9369-4caa-884b-d6972167b4b3',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fgpa-calculator%2FScreenshot%202024-10-13%20140413.png?alt=media&token=9234cb57-e684-473c-b51f-7a80f2925e98',
                ],
                videos: [
                    'BPG3qaSogXQ',
                    '2_stkJaAXgE'
                ],
                detailedDescription: 'The GPA Calculator is a highly functional and user-friendly application developed using Flutter for the frontend and Node.js Express for the backend. Designed to assist students in calculating their Grade Point Average (GPA), the app allows users to input course details, grades, and credits with ease. The Flutter frontend ensures a responsive design across mobile and web platforms, featuring an intuitive course input form, real-time GPA calculation, and validation checks to enhance user experience. The app also supports dark and light modes, offering an accessible and interactive interface with smooth animations. On the backend, Node.js Express powers the server-side logic, providing secure and efficient GPA calculations through RESTful API endpoints. The backend processes the input data, performs weighted GPA calculations, and can be scaled to support a large number of users. The architecture also allows for optional database integration to store user data and GPA history. With a focus on performance, error handling, and extensibility, the GPA Calculator is a reliable and scalable tool for students to track their academic progress, with potential for future enhancements like custom grading scales and multiple grading schemes.',
                linksList: [
                    {
                        platform: 'LinkedIn',
                        link: 'https://www.linkedin.com/posts/sachindukavishka7070_happy-to-announce-the-new-app-released-on-activity-7195620718519177216-zQbc?utm_source=share&utm_medium=member_desktop',
                        icon: <LinkedinFilled/>
                    },

                    {
                        platform: 'GitHub frontend',
                        link: 'https://github.com/sachinduKavi/GPA_Calculator.git',
                        icon: <GithubFilled/>
                    },

                    {
                        platform: 'GitHub backend',
                        link: 'https://github.com/sachinduKavi/GpaCalculator_api.git',
                        icon: <GithubFilled/>
                    }
                ] 
            }
            
        },

        {
            name: 'Ride Buddy Mobile App',
            description: 'RideBuddy is a mobile application designed to revolutionize the way you travel in Negombo and beyond. Developed using Java and Android Studio, RideBuddy connects you with like-minded individuals.',
            image: 'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/WhatsApp%20Image%202024-10-02%20at%2014.13.44_be151c09.jpg?alt=media&token=a7325d78-0581-4c63-ab5e-1a4f28985175',
            date: '2024-03-20'
        },

        {
            name: 'Tic Tak Toe Mobile Game',
            description: 'Tic Tak Toe mobile game developed using Flutter where 2 players can play and mark their score',
            image: 'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/WhatsApp%20Image%202024-10-01%20at%2019.27.52_5852f167.jpg?alt=media&token=49974b53-4bfa-4f80-9992-eb0df3b340a7',
            date: '2024-03-20'
        },

        {
            name: 'Divisional Budget Management System',
            description: 'This desktop application is designed to streamline the management of divisional budgets for electronic items within the Negombo Municipal Council.',
            date: '2024-03-20',
            image: 'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2FMuncipalCouncil%2F31-min-1024x637.png?alt=media&token=b091cc65-72ae-4a3c-9c64-00204ddd33b2'
        },

        {
            name: 'Fuel Management System',
            description: 'In response to the past economic crisis in Sri Lanka, a fuel usage tracking system has been implemented by me for vehicles operated by the Negombo Municipal Council.',
            date: '2024-03-20',
            image: 'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2FMuncipalCouncil%2F31-min-1024x637.png?alt=media&token=b091cc65-72ae-4a3c-9c64-00204ddd33b2'
        }

        
    ],

    timeline: [
        {
            title: 'FOSS Technical Team',
            description: 'A free and open-source community fosters collaboration, allowing anyone to use, modify, and improve software freely for the benefit of all.',
            start: '2024',
            end: null
        },

        {
            title: 'Uva Xtreame Hackathon',
            description: 'I served as the Technical Lead for for the Uva Xtreme Hackathon in 2024',
            start: '2024',
            end: null
        }, 

        {
            title: 'CST LAN Challenge',
            description: '',
            start: '2022',
            end: null
        },

        {
            title: 'HackX 2022',
            description: 'Me & my team successfully secured a place in the top 10 finalists of the HackX App Development Competition in 2022',
            start: '2022',
            end: null
        },

        {
            title: 'Uva Wellassa University',
            description: 'I have started my degree in Computer Science and Technology at Uva Wellassa University, with a passion for developing innovative software solutions.',
            start: '2021',
            end: 'present'
        },

        {
            title: 'Negombo Municipal Council',
            description: 'Worked as a Staff Assistant at the Negombo Municipal Council Engineering division.',
            start: '2020',
            end: '2022'
        },

        {
            title: 'Advance Level',
            description: 'I have completed my Advanced Level studies in the Physical Science stream from Maris Stella College.',
            start: '2020',
            end: null
        },

        {
            title: 'Nation Victory Campus',
            description: 'I have achieved a diploma in Information Communication Technology from Nation Victory Campus.',
            start: '2017',
            end: null
        },

        {
            title: 'Ordinary Level',
            description: 'I have completed my Ordinary Level studies from Maris Stella College.',
            start: '2017',
            end: null
        }
    ]
}

export {
    user
}