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
        name: string,
        description: string,
        image: string,
        date: Date
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
        }
    ],
    projects: [
        {
            name: 'GPA Calculator',
            description: "Mobile application developed to support students' academic journeys. Our aim is to simplify the often-complex task of GPA calculation and management. This app provides a user-friendly solution that allows students to calculate and keep track of their GPA effortlessly.",
            image: 'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/WhatsApp%20Image%202024-10-02%20at%2015.28.36_c1cb021e.jpg?alt=media&token=0e90fc0f-9fd3-44a9-b692-312e5735c4de',
            date: new Date('2024-03-20')
        },

        {
            name: 'Ride Buddy Mobile App',
            description: 'RideBuddy is a mobile application designed to revolutionize the way you travel in Negombo and beyond. Developed using Java and Android Studio, RideBuddy connects you with like-minded individuals.',
            image: 'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/WhatsApp%20Image%202024-10-02%20at%2014.13.44_be151c09.jpg?alt=media&token=a7325d78-0581-4c63-ab5e-1a4f28985175',
            date: new Date('2024-03-20')
        },

        {
            name: 'Tic Tak Toe Mobile Game',
            description: 'Tic Tak Toe mobile game developed using Flutter where 2 players can play and mark their score',
            image: 'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/WhatsApp%20Image%202024-10-01%20at%2019.27.52_5852f167.jpg?alt=media&token=49974b53-4bfa-4f80-9992-eb0df3b340a7',
            date: new Date('2024-03-20')
        },

        
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
            description: '',
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
            title: 'National Victory Campus',
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