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
        description: 'Planets Facts is a site where you can find information about the solar system. Click on one of the planets in orbit and you will be moved to the section dedicated to the selected planet.',
        technologies: ['TypeScript', 'React', 'Framer Motion'],
        demo: 'https://mobbyschiller.github.io/planets-facts/',
        github: 'https://github.com/MobbySchiller/planets-facts',
        img: 'assets/projects/planets-facts.webp'
    },
    {
        name: 'Epidemic Simulator',
        description: 'Epidemic Simulator is an application with which you can simulate the course of an epidemic. The simulation is based on the data you enter. The results are presented on graphs.',
        technologies: ['TypeScript', 'React', 'Material UI'],
        demo: 'https://mobbyschiller.github.io/epidemic-simulator/',
        github: 'https://github.com/MobbySchiller/epidemic-simulator',
        img: 'assets/projects/epidemic-simulator.webp'
    },
    {
        name: 'In Case It Rains',
        description: 'It Case It Rains is an app which, allows you to check the weather for current of any selected location. Due to the lack of a backend, read the README posted on github to know how to use it.',
        technologies: ['Vanilla JS', 'Sass', 'REST API'],
        demo: 'https://www.in-case-it-rains.online/',
        github: 'https://github.com/MobbySchiller/in-case-it-rains',
        img: 'assets/projects/in-case-it-rains.webp'
    },
    {
        name: 'Memory',
        description: 'Memory is a simple logic game which test your intelectual skills. Select difficulty level, flip the cards and try to find their pairs in the shortest possible time',
        technologies: ['Vanilla JS', 'Sass', 'Webpack'],
        demo: 'https://www.mobbyschiller.com/',
        github: 'https://github.com/MobbySchiller/memory',
        img: 'assets/projects/memory.webp'
    },
    {
        name: "Don't Touch the Rock",
        description: "Don't Touch The Rock is a simple game that involves avoiding obstacles. Use the arrow keys and spacebar to avoid being touched by the rocks in your path.",
        technologies: ['Vanilla JS', 'Sass'],
        demo: 'https://mobbyschiller.github.io/',
        github: 'https://github.com/MobbySchiller/mobbyschiller.github.io',
        img: 'assets/projects/dtr.webp'
    },
    {
        name: "Password Generator",
        description: 'Password Generator is an app, which helps you to easily generate passwords. Choose its length from 4 to 16 characters, including lowercase, uppercase, numbers and/or symbols.',
        technologies: ['Vanilla JS', 'Sass', 'Webpack'],
        demo: 'https://mobbyschiller.github.io/password-generator/',
        github: 'https://github.com/MobbySchiller/password-generator',
        img: 'assets/projects/password-generator.webp'
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