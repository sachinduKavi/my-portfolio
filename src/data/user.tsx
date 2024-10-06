interface User {
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
        'Frontend/Backend Developer'
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
        }
    ]
}

export {
    user
}