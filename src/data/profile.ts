// Single source of truth for the portfolio — content mirrors src/assets/documents/CV_V11.pdf

export type LinkKind = 'github' | 'linkedin' | 'live' | 'video';

export interface ProjectLink {
  label: string;
  url: string;
  kind: LinkKind;
}

export interface Project {
  name: string;
  tagline: string;
  summary: string;
  points?: string[];
  tech: string[];
  org?: string;
  status?: string;
  image?: string;
  images?: string[];
  videos?: string[];
  links?: ProjectLink[];
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  points: string[];
  tags: string[];
}

const storage =
  'https://firebasestorage.googleapis.com/v0/b/myportfolio-ee5f2.appspot.com/o/';

export const profile = {
  name: 'Sachindu Kavishka',
  firstName: 'Sachindu',
  title: 'Backend Developer',
  headline: '.NET & ASP.NET Core  ·  Spring Boot  ·  Mobile Apps',
  roles: [
    'Backend Developer',
    'ASP.NET Core Engineer',
    'Spring Boot Developer',
    'Mobile App Developer',
    'Clean Architecture Advocate',
    'Full Stack Builder',
  ],
  location: 'Negombo, Western Province, Sri Lanka',
  phone: '+94 76 431 4505',
  email: 'sachindu38@gmail.com',
  photo: '/images/profile.webp',
  links: {
    linkedin: 'https://www.linkedin.com/in/sachindukavishka7070/',
    github: 'https://github.com/sachinduKavi',
    portfolio: 'https://sachindukavishka.netlify.app/',
  },
  summary: [
    'Backend Developer specialising in API development with Clean Architecture principles, with ASP.NET Core / .NET as the primary stack and further backend experience across Spring Boot (Java), NestJS and Node.js.',
    'I build scalable, maintainable services using layered design, dependency injection and repository patterns — including .NET microservices for enterprise ERP systems.',
    'I complement backend work with cross-platform mobile development in React Native (Expo) and Flutter, with apps published to the Google Play Store, and a full-stack foundation across Next.js, SQL/NoSQL databases, Redis and AWS serverless.',
  ],
  stats: [
    { value: 3, suffix: '+', label: 'Years building software' },
    { value: 4, suffix: '', label: 'Companies worked with' },
    { value: 10, suffix: '+', label: 'Production projects' },
    { value: 3.86, suffix: '', label: 'Current GPA', decimals: 2 },
  ],
};

export const experience: Experience[] = [
  {
    company: 'QrioMatrix (Pvt) Ltd',
    role: 'Software Engineer Intern',
    location: 'Kottawa, Sri Lanka',
    start: 'Mar 2026',
    end: 'Sep 2026',
    points: [
      'Contributed to a scalable ERP and POS platform serving restaurants, textiles, optical, and communication businesses, building modules for user management, tax handling, authentication, and role-based access control.',
      'Integrated serverless backend services using AWS CDK and developed the supporting frontend features with Next.js.',
    ],
    tags: ['AWS CDK', 'Serverless', 'Next.js', 'RBAC', 'ERP / POS'],
  },
  {
    company: 'CSI Dev Team',
    role: 'Trainee Backend Developer',
    location: 'Badulla, Uva Province, Sri Lanka',
    start: 'Jun 2025',
    end: 'Mar 2026',
    points: [
      'Developed and maintained backend services and REST APIs following clean code and structured API design practices.',
    ],
    tags: ['REST APIs', 'Clean Code', 'Backend Services'],
  },
  {
    company: 'Nanosoft Solutions (Pvt) Ltd',
    role: 'Intern Mobile / Web Application Developer',
    location: 'Kurunegala, Sri Lanka',
    start: 'Feb 2024',
    end: 'Aug 2025',
    points: [
      'Built scalable NestJS APIs powering production cross-platform mobile applications developed with React Native (Expo).',
      'Delivered a cooperative mobile banking app (QR transactions, payment and SMS gateways) and a two-part agricultural data platform on a unified Node.js backend.',
    ],
    tags: ['NestJS', 'React Native', 'Expo', 'Node.js', 'Payment Gateways'],
  },
  {
    company: 'Soft Detroits (Pvt) Ltd',
    role: 'Full Stack Developer',
    location: 'Battaramulla, Colombo, Sri Lanka',
    start: 'Mar 2023',
    end: 'Oct 2025',
    points: [
      'Engineered .NET microservices with Clean Architecture for fingerprint-based biometric authentication using the ZKTeco SDK within an enterprise ERP system, designing layered APIs for maintainability and testability.',
      'Delivered five full-stack corporate and e-commerce platforms with React.js, Node.js, Express, and MySQL, integrating Redis caching, Twilio SMS, and Nodemailer services.',
    ],
    tags: [
      '.NET Microservices',
      'Clean Architecture',
      'ZKTeco SDK',
      'React',
      'Redis',
    ],
  },
];

export const shippedSites = [
  { name: 'Sabari Holdings', url: 'https://sabariholdings.com' },
  { name: 'Saravana Flora', url: 'https://saravanaflora.lk' },
  { name: 'MAS Impex', url: 'https://masimpex.lk' },
  { name: 'G Capital Trading', url: 'https://gcapitaltrading.com' },
  { name: 'Soft Detroits', url: 'https://softdetroits.com' },
  { name: 'Govisarana', url: 'https://www.govisarana.org' },
  { name: 'Thinaya Travels', url: 'https://thinayatravels.lk' },
];

export const skillGroups = [
  {
    name: 'Backend & APIs',
    color: '#22d3ee',
    items: [
      'ASP.NET Core',
      '.NET Microservices',
      'Spring Boot',
      'NestJS',
      'Node.js',
      'Express',
      'REST APIs',
    ],
  },
  {
    name: 'Architecture',
    color: '#a78bfa',
    items: [
      'Clean Architecture',
      'Layered Design',
      'Dependency Injection',
      'Repository Pattern',
      'Microservices',
      'Caching',
    ],
  },
  {
    name: 'Languages',
    color: '#f472b6',
    items: ['C#', 'Java', 'JavaScript', 'TypeScript', 'Dart', 'Python', 'PHP'],
  },
  {
    name: 'Databases',
    color: '#34d399',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL', 'Redis'],
  },
  {
    name: 'Cloud & DevOps',
    color: '#fbbf24',
    items: ['AWS', 'AWS CDK', 'Docker', 'Kubernetes', 'Nginx', 'Git'],
  },
  {
    name: 'Mobile & Frontend',
    color: '#60a5fa',
    items: [
      'React Native',
      'Flutter',
      'Play Store',
      'Next.js',
      'React.js',
      'Tailwind CSS',
    ],
  },
  {
    name: 'Integrations',
    color: '#fb923c',
    items: ['Payment Gateways', 'Twilio SMS', 'Nodemailer', 'ZKTeco SDK'],
  },
];

export const projects: Project[] = [
  {
    name: 'Cognito ERP',
    tagline: 'Enterprise Resource Planning System',
    org: 'Soft Detroits',
    status: 'In Progress',
    featured: true,
    summary:
      'Fingerprint-based authentication with .NET microservices on Clean Architecture, plus biometric attendance, payroll, inventory and finance modules.',
    points: [
      'Implemented fingerprint-based authentication using the ZKTeco SDK with .NET microservices designed on Clean Architecture principles, separating domain logic, application services, and infrastructure layers.',
      'Engineered the supporting backend (Node.js, Express, MySQL) for biometric attendance, payroll, inventory, and finance modules, with Redis caching and Nodemailer payroll distribution; built a responsive React.js UI.',
    ],
    tech: ['.NET', 'ZKTeco SDK', 'React.js', 'Node.js', 'MySQL', 'Redis'],
    videos: ['vtEACRJViTY'],
    image: `${storage}images%2FCognito-ERP%2FScreenshot%202026-10-01%20123619.png?alt=media&token=3da3b076-0261-461e-bad5-0052ed9578ed`,
    images: [
      `${storage}images%2FCognito-ERP%2FScreenshot%202026-10-01%20123442.png?alt=media&token=bcb187af-96dd-40b9-b7f9-67933f7e3af5`,
      `${storage}images%2FCognito-ERP%2FScreenshot%202026-10-01%20123627.png?alt=media&token=8c7c6183-22e0-467f-8f13-5e78b29440ac`,
      `${storage}images%2FCognito-ERP%2FScreenshot%202026-10-01%20123639.png?alt=media&token=8244f8fd-d310-4507-b754-16d4ad2fd225`,
      `${storage}images%2FCognito-ERP%2FScreenshot%202026-10-01%20123649.png?alt=media&token=9cdbdae3-40c0-4f56-809f-af8023408ea5`,
      `${storage}images%2FCognito-ERP%2FScreenshot%202026-10-01%20123717.png?alt=media&token=fcabf4e6-2ebc-4836-8318-f0441ae18d6e`,
    ],
  },
  {
    name: 'COOP Digital',
    tagline: 'Cooperative Banking Mobile App',
    org: 'Nanosoft Solutions',
    featured: true,
    summary:
      'Secure cooperative banking with direct and QR-based transactions, payment gateways and instant SMS notifications.',
    points: [
      'Built a scalable NestJS backend for a cooperative banking app, prioritising reliability and data security across account, transaction, and activity-tracking services.',
      'Delivered the React Native (Expo) client with direct and QR-based transactions, integrating payment gateways for secure transfers and SMS gateways for instant notifications.',
    ],
    tech: ['React Native', 'Expo', 'NestJS', 'Payment Gateway', 'SMS Gateway'],
    image: `${storage}images%2FCoopDigital%2FWhatsApp%20Image%202026-10-01%20at%2013.06.59.jpeg?alt=media&token=7a12c3fc-b24c-4843-ab79-fb8d5adf58c4`,
    images: [
      `${storage}images%2FCoopDigital%2FWhatsApp%20Image%202026-10-01%20at%2013.06.55%20(1).jpeg?alt=media&token=b9ef0c2a-9f05-4bc6-85be-2d888190c6a5`,
      `${storage}images%2FCoopDigital%2FWhatsApp%20Image%202026-10-01%20at%2013.06.55.jpeg?alt=media&token=69718113-6b34-48b2-a502-64a2e25fdbd3`,
      `${storage}images%2FCoopDigital%2FWhatsApp%20Image%202026-10-01%20at%2013.06.56%20(1).jpeg?alt=media&token=b3e6c789-bbdd-422f-9401-54c4262a347f`,
      `${storage}images%2FCoopDigital%2FWhatsApp%20Image%202026-10-01%20at%2013.06.57%20(2).jpeg?alt=media&token=d047cc4f-7501-4d13-84a9-eab8937dbd5b`,
      `${storage}images%2FCoopDigital%2FWhatsApp%20Image%202026-10-01%20at%2013.06.58%20(2).jpeg?alt=media&token=6fd62537-e2d3-4cfb-beed-2c7763cfd1a8`,
    ],
  },
  {
    name: 'Govisarana',
    tagline: 'Agricultural Community Digital Platform',
    org: 'Nanosoft Solutions',
    featured: true,
    summary:
      'A two-part platform for a rural-farmer data collection initiative — a field submission app and a promotional site on one backend.',
    points: [
      'Built a two-part platform for a rural-farmer data collection initiative: a React Native (Expo) app for secure field submissions plus a Next.js promotional site.',
      'Engineered a unified Node.js backend managing collected data and serving both digital properties.',
    ],
    tech: ['Next.js', 'React Native', 'Expo', 'Node.js'],
    links: [
      {
        label: 'govisarana.org',
        url: 'https://www.govisarana.org',
        kind: 'live',
      },
    ],
    image: `${storage}images%2FGovisarana%2FScreenshot%202026-10-01%20124952.png?alt=media&token=33a89f6b-070a-47b7-8cd4-5790580236f3`,
    images: [
      `${storage}images%2FGovisarana%2FScreenshot%202026-10-01%20125003.png?alt=media&token=13e5b839-4345-41e4-a9ce-23a5d10b6329`,
      `${storage}images%2FGovisarana%2FScreenshot%202026-10-01%20125037.png?alt=media&token=19cafa34-5cc9-40be-91e5-ac02c0c08924`,
      `${storage}images%2FGovisarana%2FScreenshot%202026-10-01%20125049.png?alt=media&token=e080490d-9110-4cf3-a29e-7ef86fc8f229`,
      `${storage}images%2FGovisarana%2FScreenshot%202026-10-01%20125059.png?alt=media&token=94c19617-a1cb-42fe-b5d8-ed26321e6e79`,
      `${storage}images%2FGovisarana%2FScreenshot%202026-10-01%20125107.png?alt=media&token=2440d62c-f1da-45ba-a9df-378e729a50c4`,
    ],
  },
  {
    name: 'Thinaya Travels',
    tagline: 'Tour Booking Platform',
    org: 'Nanosoft Solutions',
    featured: true,
    summary:
      'Tour booking and order management for a Sri Lankan travel agency, with a full admin portal.',
    points: [
      'Engineered a scalable NestJS API with MySQL behind a responsive Next.js frontend, streamlining tour bookings and order management for a Sri Lankan travel agency.',
      'Built an admin portal managing packages, orders, locations, promotional offers, and customer feedback.',
    ],
    tech: ['Next.js', 'NestJS', 'MySQL'],
    links: [
      {
        label: 'thinayatravels.lk',
        url: 'https://thinayatravels.lk',
        kind: 'live',
      },
    ],
    image: `${storage}images%2FThinayaTravels%2FScreenshot%202026-10-01%20131446.png?alt=media&token=32d5004a-37cb-4c5b-99ad-40ecdf9a7835`,
    images: [
      `${storage}images%2FThinayaTravels%2FScreenshot%202026-10-01%20131456.png?alt=media&token=17679c45-4c73-4403-9148-1fb41737cb68`,
      `${storage}images%2FThinayaTravels%2FScreenshot%202026-10-01%20131508.png?alt=media&token=8aa2f152-fd00-4a40-8c50-c113c735817a`,
      `${storage}images%2FThinayaTravels%2FScreenshot%202026-10-01%20131520.png?alt=media&token=b6590b9b-0c80-463e-83bf-7d106ada1823`,
      `${storage}images%2FThinayaTravels%2FScreenshot%202026-10-01%20131530.png?alt=media&token=020d6bbf-2b17-4cde-b659-b929b5f8ddb8`,
      `${storage}images%2FThinayaTravels%2FScreenshot%202026-10-01%20131547.png?alt=media&token=5d3ac98f-dfd0-4b46-82b5-e4a1d8a3dbe6`,
    ],
  },
  {
    name: 'Open Ledger',
    tagline: 'Treasury Management System',
    featured: true,
    summary:
      'Real-time visibility into organisational treasury — transactions, budgets and fraud-resistant reporting.',
    points: [
      'Engineered a secure Node.js API over an SQL database for organisational financial transactions and budgets, bringing real-time visibility to treasury operations.',
      'Built a React.js frontend with dynamic data visualisation for budget and transaction reporting.',
    ],
    tech: ['React.js', 'Node.js', 'SQL'],
    image: `${storage}images%2Fopen_ledger%2Flinkdn%20project%201%20(9).png?alt=media&token=3d6cdff3-89b5-4db1-a0b0-a224a73679b1`,
    images: [
      `${storage}images%2Fopen_ledger%2FScreenshot%202024-10-23%20175356.png?alt=media&token=081aa393-7f12-45b6-a329-e0497e16862a`,
      `${storage}images%2Fopen_ledger%2FScreenshot%202024-10-23%20175456.png?alt=media&token=3ee8393c-64d4-4c6c-86a8-00392388e213`,
      `${storage}images%2Fopen_ledger%2FScreenshot%202024-10-23%20175510.png?alt=media&token=7b81ae29-1e33-485a-b3b9-df5da8fd9747`,
      `${storage}images%2Fopen_ledger%2FScreenshot%202024-10-23%20175524.png?alt=media&token=36fb5231-edcb-45eb-8f09-37743ecab10e`,
      `${storage}images%2Fopen_ledger%2FScreenshot%202024-10-23%20175537.png?alt=media&token=0bbd586e-e84b-4a40-87f0-819c025902db`,
      `${storage}images%2Fopen_ledger%2FScreenshot%202024-10-23%20175546.png?alt=media&token=c8e98796-49ff-4b90-8661-e13b0bf5d7be`,
      `${storage}images%2Fopen_ledger%2FScreenshot%202024-10-23%20175558.png?alt=media&token=405b5a8f-44cf-466b-81f8-03e8e4719008`,
      `${storage}images%2Fopen_ledger%2FScreenshot%202024-10-23%20175608.png?alt=media&token=5c71dda9-6ef7-4bbc-ad42-407675836c97`,
    ],
    videos: ['ec3ODumTg9g', 'yqqtGps6ktU'],
  },
  {
    name: 'QR Flash',
    tagline: 'ERP & POS Platform',
    org: 'QrioMatrix',
    featured: true,
    summary:
      'A scalable ERP and POS platform supporting restaurants, textiles, optical, and communication services.',
    points: [
      'Contributed to a scalable ERP and POS platform supporting restaurants, textiles, optical, and communication services.',
      'Integrated serverless backend services using AWS CDK and developed frontend features with Next.js; worked on user management, tax handling, authentication, and role-based access control modules.',
    ],
    tech: ['Next.js', 'AWS CDK', 'Serverless', 'RBAC', 'Authentication'],
  },
  {
    name: 'Sabari Holdings',
    tagline: 'Corporate & E-commerce Platform',
    org: 'Soft Detroits',
    summary:
      'Landing page, shop portal, admin panel and real-time order notifications for Sabari Holdings.',
    points: [
      'Dynamic e-commerce portal with categorised products, detailed product pages, cart and secure checkout.',
      'Admin panel to manage inventory, track orders and review sales history, with real-time email order notifications.',
    ],
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    image: `${storage}images%2Fsabariholdings%2FScreenshot%202024-12-31%20001543.png?alt=media&token=b59335f7-cdef-42b0-85f2-7e7887bbf40e`,
    images: [
      `${storage}images%2Fsabariholdings%2FScreenshot%202024-12-31%20001559.png?alt=media&token=ea1f6590-c40d-401c-9929-c65b503bf286`,
      `${storage}images%2Fsabariholdings%2FScreenshot%202024-12-31%20001610.png?alt=media&token=3b1e15c3-a491-43bc-bfa5-46e613a7136a`,
      `${storage}images%2Fsabariholdings%2FScreenshot%202024-12-31%20001636.png?alt=media&token=a6ec7947-aae8-4e8c-ae85-0c8b9522d41d`,
      `${storage}images%2Fsabariholdings%2FScreenshot%202024-12-31%20001647.png?alt=media&token=cc79cee4-e297-4ec4-badc-11e4afc48b6d`,
      `${storage}images%2Fsabariholdings%2FScreenshot%202024-12-31%20001659.png?alt=media&token=87e4eada-98dc-48a9-aa1f-af4c5c3f3881`,
    ],
    videos: ['U9isXl4P9Uo'],
    links: [
      {
        label: 'sabariholdings.com',
        url: 'https://sabariholdings.com/',
        kind: 'live',
      },
    ],
  },
  {
    name: 'GPA Calculator',
    tagline: 'Flutter Mobile App · Play Store',
    summary:
      'Helps students calculate and track their GPA with real-time calculation, validation, and dark/light modes.',
    points: [
      'Flutter frontend with a responsive course input form, real-time GPA calculation and validation checks.',
      'Node.js Express backend providing weighted GPA calculations through RESTful API endpoints.',
    ],
    tech: ['Flutter', 'Dart', 'Node.js', 'Express'],
    image: `${storage}WhatsApp%20Image%202024-10-02%20at%2015.28.36_c1cb021e.jpg?alt=media&token=0e90fc0f-9fd3-44a9-b692-312e5735c4de`,
    images: [
      `${storage}images%2Fgpa-calculator%2FScreenshot%202024-10-13%20140014.png?alt=media&token=56c08d36-d079-427b-9805-cf8fae84aeee`,
      `${storage}images%2Fgpa-calculator%2FScreenshot%202024-10-13%20140311.png?alt=media&token=fb07c451-aea9-4f17-ad68-96e8a73fc9df`,
      `${storage}images%2Fgpa-calculator%2FScreenshot%202024-10-13%20140321.png?alt=media&token=42d81607-d8f9-41e7-8cc6-e93a4fdde87a`,
      `${storage}images%2Fgpa-calculator%2FScreenshot%202024-10-13%20140330.png?alt=media&token=a6630183-a74d-40c3-8965-fd8a2b80a217`,
      `${storage}images%2Fgpa-calculator%2FScreenshot%202024-10-13%20140338.png?alt=media&token=85fea5c1-e68d-4b67-8b37-7fee7349cbcc`,
    ],
    videos: ['BPG3qaSogXQ', '2_stkJaAXgE'],
    links: [
      {
        label: 'LinkedIn post',
        kind: 'linkedin',
        url: 'https://www.linkedin.com/posts/sachindukavishka7070_happy-to-announce-the-new-app-released-on-activity-7195620718519177216-zQbc',
      },
      {
        label: 'Frontend',
        kind: 'github',
        url: 'https://github.com/sachinduKavi/GPA_Calculator.git',
      },
      {
        label: 'Backend',
        kind: 'github',
        url: 'https://github.com/sachinduKavi/GpaCalculator_api.git',
      },
    ],
  },
  {
    name: 'Bouncy Ball',
    tagline: 'Flutter Mobile Game',
    summary:
      'A lively arcade game — keep the ball bouncing through levels of obstacles while collecting rewards.',
    tech: ['Flutter', 'Dart'],
    image: `${storage}images%2Fbouncy_ball%2FIMG-20241028-WA0043.jpg?alt=media&token=5627c4d3-f168-4a97-9c6a-1e1e3bae36d0`,
    images: [
      `${storage}images%2Fbouncy_ball%2FIMG-20241028-WA0040.jpg?alt=media&token=ae9c7cad-9526-42d4-bf41-849ed4302e26`,
      `${storage}images%2Fbouncy_ball%2FIMG-20241028-WA0041.jpg?alt=media&token=8f91fdf8-b00a-4583-bd28-0f7bfbcd55a8`,
      `${storage}images%2Fbouncy_ball%2FIMG-20241028-WA0042.jpg?alt=media&token=c8e228cd-45c6-4993-8fac-c9d1e027628c`,
      `${storage}images%2Fbouncy_ball%2FIMG-20241028-WA0044.jpg?alt=media&token=21f68a68-cc35-4cb7-b757-d130c6a47207`,
    ],
    videos: ['tFdGiNaHWdU'],
    links: [
      {
        label: 'LinkedIn post',
        kind: 'linkedin',
        url: 'https://www.linkedin.com/posts/sachindukavishka7070_flutter-mobilegame-uiux-activity-7184806234892505089-ZnkC',
      },
      {
        label: 'Source',
        kind: 'github',
        url: 'https://github.com/sachinduKavi/bouncy-ball.git',
      },
    ],
  },
  {
    name: 'Music Player',
    tagline: 'Java Streaming Application',
    summary:
      'A Java music streaming application offering a seamless listening experience across devices.',
    tech: ['Java'],
    image: `${storage}images%2Fmusic_player%2FScreenshot%202024-10-24%20225625.png?alt=media&token=36335d3a-0947-4bfd-af8b-ce569c50bd71`,
    images: [
      `${storage}images%2Fmusic_player%2FScreenshot%202024-10-24%20225611.png?alt=media&token=ff480862-7a47-4e07-b7c9-e44f28ca21eb`,
      `${storage}images%2Fmusic_player%2FScreenshot%202024-10-24%20225639.png?alt=media&token=5f964113-d1e0-4e10-b269-32fdfd9e3eda`,
      `${storage}images%2Fmusic_player%2FScreenshot%202024-10-24%20225650.png?alt=media&token=8b3d398b-714a-4956-b9d5-5d2f68501cc7`,
    ],
  },
  {
    name: 'Ride Buddy',
    tagline: 'Android Ride-Sharing App',
    summary:
      'Connects like-minded travellers in Negombo and beyond. Built with Java and Android Studio.',
    tech: ['Java', 'Android'],
    image: `${storage}WhatsApp%20Image%202024-10-02%20at%2014.13.44_be151c09.jpg?alt=media&token=a7325d78-0581-4c63-ab5e-1a4f28985175`,
  },
];

export const research = {
  title: 'A cuDNN Approach for Real-Time Classification of EEG Data',
  subtitle: 'Brain–Computer Interface for Mouse Control',
  points: [
    'Developed a real-time brain–computer interface (BCI) system classifying EEG signals to enable hands-free computer control.',
    'Integrated advanced signal processing with cuDNN-accelerated deep learning models, leveraging the OpenBCI Cyton board for EEG acquisition and translating brain activity into real-time cursor movements for assistive technology applications.',
  ],
  tags: [
    'cuDNN',
    'Deep Learning',
    'EEG',
    'OpenBCI Cyton',
    'Signal Processing',
    'Assistive Tech',
  ],
};

export const education = [
  {
    school: 'Uva Wellassa University',
    detail: 'BSc (Honours) in Computer Science & Technology',
    note: 'Current GPA: 3.86',
    location: 'Badulla, Sri Lanka',
    year: 'Expected 2026',
  },
  {
    school: 'Maris Stella College, Negombo',
    detail: 'G.C.E. Advanced Level — Physical Science Stream',
    location: 'Negombo, Sri Lanka',
    year: '2020',
  },
  {
    school: 'Nation Victory Campus',
    detail: 'Diploma in Information Technology; Diploma in English Language',
    location: 'Sri Lanka',
    year: '2017',
  },
];

export const certifications = [
  { name: 'AI/ML Engineer — Stage 1, 2 & 3', issuer: 'University of Moratuwa' },
  { name: 'AWS Essentials', issuer: 'Udemy' },
  { name: 'Java Basics', issuer: 'HackerRank' },
  { name: 'SQL Basics', issuer: 'HackerRank' },
];

export const leadership = [
  {
    role: 'President',
    org: 'Free & Open-Source Community, Uva Wellassa University',
    year: '2025',
  },
  { role: 'Webmaster', org: 'IEEE Student Branch, Uva Wellassa University' },
  {
    role: 'Technical Lead',
    org: 'UVA Xtreme 2024 & UVA Xtreme 1.2 2025 Hackathons',
  },
  { role: 'Coding Team Lead', org: 'SheCoDress v6' },
];

export const achievements = [
  {
    title: "Dean's List",
    detail: 'Outstanding Academic Performance',
    year: '2024',
  },
  {
    title: 'Finalist',
    detail: 'IEEE Innovation Nation Sri Lanka — Business Stage (Ideation)',
  },
  {
    title: 'Finalist',
    detail: 'hackX 2022 — Inter-University Start-up Challenge',
    year: '2022',
  },
  { title: 'Finalist', detail: 'Idealize UOM 2024', year: '2024' },
];
