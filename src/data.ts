import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

interface Socials {
    name: string
    link: string
    icon: IconProp
}

export const projects = [
    {
        name: 'Planets Facts',
        description: 'Planets Facts is good source of knowledge about Solar System. You can find information about every planet orbiting the sun. Choose your planet and read about its structure, surface and more.',
        technologies: ['TypeScript', 'React', 'Framer Motion'],
        demo: 'https://mobbyschiller.github.io/planets-facts/',
        github: 'https://github.com/MobbySchiller/planets-facts',
        img: '/assets/projects/planets-facts.jpg'
    },
    {
        name: 'Epidemic Simulator',
        description: 'Epidemic Simulator is a tool to check the course of the epidemic in selected conditions.',
        technologies: ['TypeScript', 'React', 'Material UI'],
        demo: 'https://mobbyschiller.github.io/epidemic-simulator/',
        github: 'https://github.com/MobbySchiller/epidemic-simulator',
        img: 'assets/projects/epidemic-simulator.jpg'
    },
    {
        name: 'In Case It Rains',
        description: '',
        technologies: ['Vanilla JS', 'Sass', 'REST API'],
        demo: 'https://mobbyschiller.github.io/epidemic-simulator/',
        github: 'https://github.com/MobbySchiller/epidemic-simulator',
        img: 'assets/projects/in-case-it-rains.jpg'
    },
    {
        name: 'Memory',
        description: 'Simple mind game to check memory.',
        technologies: ['Vanilla JS', 'Sass', 'Webpack'],
        demo: 'https://www.mobbyschiller.com/',
        github: 'https://github.com/MobbySchiller/memory',
        img: 'assets/projects/memory.jpg'
    },
    {
        name: "Don't Touch the Rock",
        description: 'Use arrows and space to avoid obstacles. Remember, you only live once.',
        technologies: ['Vanilla JS', 'Sass'],
        demo: 'https://mobbyschiller.github.io/',
        github: 'https://github.com/MobbySchiller/mobbyschiller.github.io',
        img: 'assets/projects/dtr.jpg'
    },
    {
        name: "Password Generator",
        description: 'This application helps you easly generate password. You only need to choose its length from 4 to 16 characters and include what you want - lowercase letters, uppercase letters, numbers and/or symbols.',
        technologies: ['Vanilla JS', 'Sass', 'Webpack'],
        demo: '/',
        github: 'https://github.com/MobbySchiller/password-generator',
        img: 'assets/projects/password-generator.jpg'
    },
]

export const socials: Socials[] = [
    {
        name: 'github',
        link: 'https://github.com/MobbySchiller',
        icon: faGithub
    },
    {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/krzysztof-burzy%C5%84ski-86bb79190/',
        icon: faLinkedin
    }
]