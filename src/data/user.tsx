import { IconType } from "antd/es/notification/interface"
import {LinkedinFilled, GithubFilled, DeploymentUnitOutlined} from '@ant-design/icons'
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
            name: 'Sabari Holdings',
            description: 'This project, undertaken through our startup Softdetriods, was designed to create a comprehensive digital platform for Sabari Holding. The goal was to establish a robust online presence, streamline e-commerce operations.',
            image: 'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fsabariholdings%2FScreenshot%202024-12-31%20001543.png?alt=media&token=b59335f7-cdef-42b0-85f2-7e7887bbf40e',
            date: '2023-10-12',
            more: {
                images: [
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fsabariholdings%2FScreenshot%202024-12-31%20001559.png?alt=media&token=ea1f6590-c40d-401c-9929-c65b503bf286',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fsabariholdings%2FScreenshot%202024-12-31%20001610.png?alt=media&token=3b1e15c3-a491-43bc-bfa5-46e613a7136a',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fsabariholdings%2FScreenshot%202024-12-31%20001636.png?alt=media&token=a6ec7947-aae8-4e8c-ae85-0c8b9522d41d',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fsabariholdings%2FScreenshot%202024-12-31%20001647.png?alt=media&token=cc79cee4-e297-4ec4-badc-11e4afc48b6d',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fsabariholdings%2FScreenshot%202024-12-31%20001659.png?alt=media&token=87e4eada-98dc-48a9-aa1f-af4c5c3f3881',

                ],
                videos: [
                    'U9isXl4P9Uo'
                ],
                detailedDescription: `
                <p>This project, undertaken through our startup Softdetriods, was designed to create a comprehensive digital platform for Sabari Holding. The goal was to establish a robust online presence, streamline e-commerce operations, and provide a seamless user experience for both customers and administrators</p>
<p><strong>Landing Page:</strong><br />An aesthetically designed front page to introduce Sabari Holding&rsquo;s unique value proposition. It features intuitive navigation, shop highlights, and essential information, such as store hours, location, and featured</p>
<p><br /><strong>Shop Portal:</strong><br />A dynamic e-commerce portal enabling customers to browse categorized products, view detailed product pages, and complete secure purchases. Features include add-to-cart functionality, secure checkout forms, and a streamlined user experience.<br /><br /><strong>Admin Panel:</strong><br />A user-friendly back-end interface for the company to efficiently manage their product inventory, track orders, and review sales history. This ensures operational efficiency and quick updates to the product catalog.<br /><br /><strong>Order Notifications:</strong><br />Real-time email notifications for order placements, ensuring Sabari Holding is promptly informed about customer activities and order details.<br /><br /><strong>About Us Page:</strong><br />A dedicated section providing insight into the company&rsquo;s mission, history, and contact details, along with links to social media platforms to build customer trust and engagement.<br /><br /><strong>Technologies and Tools:</strong><br /><em>Frontend</em>: React.js for building a responsive and interactive user interface, styled with Tailwind CSS for modern, efficient design.<br /><em>Backend</em>: Node.js and Express.js for creating a scalable and secure server-side application.&lt;/br&gt;<br /><em>Database</em>: MongoDB for handling dynamic product and order data.</p>

                `,
                linksList: [
                    {
                        icon: <DeploymentUnitOutlined/>,
                        link: 'https://sabariholdings.com/',
                        platform: 'Demo'
                    }
                ]
            }
        },

        {
            name: 'Open Ledger',
            description: 'Develop a secure, web-based Treasury Management System that revolutionizes financial transparency and empowers all organizations, from government entities to private businesses, with real-time visibility, robust controls, and collaborative tools to combat fraud and ensure efficient financial operations.',
            date: '2024-03-20',
            image: 'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fopen_ledger%2Flinkdn%20project%201%20(9).png?alt=media&token=3d6cdff3-89b5-4db1-a0b0-a224a73679b1',
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
                    'ec3ODumTg9g',
                    'yqqtGps6ktU'
                ],
                linksList: []
            }
        },

        {
            name: 'Music Player',
            description: `The Music Streaming Application is
            a digital platform developed using
            Java to provide users with access to
            a wide range of music content
            through streaming. It aims to offer
            a seamless and enjoyable music
            listening experience for users across
            various devices and platforms.
            The rise of digital music
            consumption has led to increased
            demand for convenient and
            accessible platforms for streaming
            music. Our project aims to develop
            a robust and user-friendly music
            streaming application to cater to
            this growing need.
            music streaming applications have
            become one of the fastestdeveloping
            sectors in this industry.
            Despite the high level of
            competition in the field of music
            streaming app development, there
            is still much room for another great
            music streaming app.`,
            image: 'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fmusic_player%2FScreenshot%202024-10-24%20225625.png?alt=media&token=36335d3a-0947-4bfd-af8b-ce569c50bd71',
            date: '2024-10-12',
            more: {
                images: [
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fmusic_player%2FScreenshot%202024-10-24%20225611.png?alt=media&token=ff480862-7a47-4e07-b7c9-e44f28ca21eb',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fmusic_player%2FScreenshot%202024-10-24%20225639.png?alt=media&token=5f964113-d1e0-4e10-b269-32fdfd9e3eda',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fmusic_player%2FScreenshot%202024-10-24%20225650.png?alt=media&token=8b3d398b-714a-4956-b9d5-5d2f68501cc7',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fmusic_player%2FScreenshot%202024-10-24%20225706.png?alt=media&token=b7327382-2d1b-48d7-b246-5a39af604033'
                ],
                linksList: [],
                detailedDescription: `The Music Streaming Application is
                a digital platform developed using
                Java to provide users with access to
                a wide range of music content
                through streaming. It aims to offer
                a seamless and enjoyable music
                listening experience for users across
                various devices and platforms.
                The rise of digital music
                consumption has led to increased
                demand for convenient and
                accessible platforms for streaming
                music. Our project aims to develop
                a robust and user-friendly music
                streaming application to cater to
                this growing need.
                music streaming applications have
                become one of the fastest developing
                sectors in this industry.
                Despite the high level of
                competition in the field of music
                streaming app development, there
                is still much room for another great
                music streaming app.`
            }
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
            name: 'Movie Theater',
            description: 'This project aims to develop a simple movie theater website using PHP and HTML. The website will provide users with information about upcoming movies, showtimes, ticket prices, and allow them to purchase tickets online.',
            image: 'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Ftheater%2FScreenshot%202024-10-24%20231756.png?alt=media&token=ba3d0b6a-1b97-4c29-a5f8-c24057cebd06',
            date: '2024-03-20',
            more: {
                images: [
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Ftheater%2FScreenshot%202024-10-24%20231835.png?alt=media&token=db336a86-a0e9-436f-b3b9-b931787f9a70',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Ftheater%2FScreenshot%202024-10-24%20231849.png?alt=media&token=c47dbe21-6592-41d8-b815-6117a5ec9e70',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Ftheater%2FScreenshot%202024-10-24%20231905.png?alt=media&token=181963bd-f341-4f19-9ed5-11639914fd9f',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Ftheater%2FScreenshot%202024-10-24%20231917.png?alt=media&token=5943f891-d91e-4e43-b91d-447806c3122f',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Ftheater%2FScreenshot%202024-10-24%20231930.png?alt=media&token=bdabe312-6736-4200-b135-3673fc399283',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Ftheater%2FScreenshot%202024-10-24%20231944.png?alt=media&token=4d5413dd-85ab-43a4-948e-80b7b25d1c90'
                ],
                detailedDescription: `A comprehensive movie theater website, built with PHP and HTML, can offer a seamless online experience for users. It provides essential features like movie listings, showtimes, ticket purchasing, and seat selection, while also incorporating advanced functionalities such as personalized recommendations, real-time seat availability, and social media integration. By prioritizing user experience, security, and performance, this website can become a valuable resource for movie enthusiasts and a successful platform for the theater business.`,
                linksList: [
                    
                ]
            }
        },

        {
            name: "Bouncy ball - Mobile Game",
            description: 'The Bouncy Ball Mobile Application is a fun, interactive game where players control a lively, bouncing ball, navigating it through various levels filled with obstacles and challenges. The objective is to keep the ball bouncing while avoiding obstacles and collecting points or rewards along the way.',
            image: 'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fbouncy_ball%2FIMG-20241028-WA0043.jpg?alt=media&token=5627c4d3-f168-4a97-9c6a-1e1e3bae36d0',
            date: '2024-03-20',
            more: {
                detailedDescription: `The Bouncy Ball Mobile Application, created using Flutter, is a dynamic and enjoyable game where players control a bouncing ball through levels filled with obstacles and rewards. Flutter's powerful UI capabilities enable smooth controls, vibrant graphics, and an immersive experience, making the app both visually appealing and responsive across devices. With progressively challenging levels, the game offers an engaging experience ideal for casual gameplay.`,
                linksList: [
                    {
                        platform: 'LinkedIn',
                        link: 'https://www.linkedin.com/posts/sachindukavishka7070_flutter-mobilegame-uiux-activity-7184806234892505089-ZnkC?utm_source=share&utm_medium=member_desktop',
                        icon: <LinkedinFilled/>
                    },

                    {
                        platform: 'GitHub',
                        link: 'https://github.com/sachinduKavi/bouncy-ball.git',
                        icon: <GithubFilled/>
                    }
                ],
                images: [
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fbouncy_ball%2FIMG-20241028-WA0040.jpg?alt=media&token=ae9c7cad-9526-42d4-bf41-849ed4302e26',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fbouncy_ball%2FIMG-20241028-WA0041.jpg?alt=media&token=8f91fdf8-b00a-4583-bd28-0f7bfbcd55a8',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fbouncy_ball%2FIMG-20241028-WA0042.jpg?alt=media&token=c8e228cd-45c6-4993-8fac-c9d1e027628c',
                    'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/images%2Fbouncy_ball%2FIMG-20241028-WA0044.jpg?alt=media&token=21f68a68-cc35-4cb7-b757-d130c6a47207'
                ],
                videos: [
                    'tFdGiNaHWdU'
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
            title: "Webmaster IEEE Student Branch",
            description: 'Proud to serve as the Webmaster of IEEE Student Branch!',
            start: '2025',
            end: null
        },
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