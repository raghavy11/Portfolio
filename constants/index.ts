export const technologies = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
{ name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
{ name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
{ name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
{ name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
{ name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
{ name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
{ name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
{ name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
{ name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
]

export const testimonials = [
  {
    name: "Aarav Mehta",
    role: "CTO at Finverse",
    image: "https://avatar.iran.liara.run/public/1",
    content:
      "Raghav played a key role in rebuilding our frontend architecture. His attention to detail, speed, and deep understanding of React and Tailwind made our product feel modern and fast.",
  },
  {
    name: "Sanya Kapoor",
    role: "Product Manager at HealthHive",
    image: "https://avatar.iran.liara.run/public/2",
    content:
      "Working with Raghav was seamless. He’s proactive, solution-oriented, and always delivers beyond expectations. Our internal tools are now significantly more efficient thanks to his work.",
  },
  {
    name: "Devansh Iyer",
    role: "Lead Developer at EduCraft",
    image: "https://avatar.iran.liara.run/public/3",
    content:
      "From backend logic to clean UI implementation, Raghav's full-stack expertise is impressive. His ability to handle complex technical challenges while keeping codebase clean is top-notch.",
  },
];

export const projects = [
  {
    title: "Event Planner Web App",
    description:
      "A full-stack event management platform that lets users create, update, and manage events in real-time with a responsive and modern UI.",
    image: "event-app-banner.jpg", 
    technologies: ["React", "Redux", "Tailwind CSS", "MongoDB", "Express"],
    liveUrl: "https://event-planner-6dwm.vercel.app/", 
    githubUrl: "https://github.com/raghavy11/Event-Planner", 
    features: [
      "Event creation & scheduling",
      "Responsive UI with Tailwind",
      "MongoDB-based storage",
      "Login & authentication",
    ],
  },
  
    {
  title: "Obys Agency",
  description:
    "A pixel-perfect creative website inspired by the Obys Agency layout. Built using modern animation libraries like GSAP and Shery.js, with smooth scroll effects powered by Locomotive Scroll. The site is fully responsive and visually engaging.",
  image: "profile-image.jpg", 
  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "GSAP",
    "Locomotive Scroll",
    "Shery.js",
    "Responsive Design",
  ],
  liveUrl: "https://obys-agency-clone-two.vercel.app/", 
  githubUrl: "https://github.com/raghavy11/Obys-agency-clone", 
  features: [
    "Smooth scrolling with Locomotive Scroll",
    "Shery.js-based 3D transitions and hover effects",
    "GSAP animations for text, images, and sections",
    "Fully responsive layout across all devices",
  ],
}
]