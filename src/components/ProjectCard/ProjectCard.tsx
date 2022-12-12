import { FC } from 'react'
import { motion, Variants } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import './ProjectCard.scss'

interface Data {
    name: string
    description: string
    technologies: string[]
    demo: string
    github: string
    img: string
}

const ProjectCard: FC<{ data: Data }> = ({ data }) => {
    const { name, description, technologies, demo, github, img } = data
    const cardVariants: Variants = {
        offscreen: {
            opacity: 0,
            y: 100,
        },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.2,
                duration: 0.6
            }
        }
    }

    return (
        <motion.div
            className='card'
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}>
            <motion.div
                className='card__wrapper'
                variants={cardVariants}>
                <div className='card__img-container'>
                    <img src={img}
                        alt={`${name}-img`}
                        className='card__img' />
                </div>
                <h3 className='card__name'>{name}</h3>
                <div className='card__technologies'>
                    {technologies.map((technology, index) => (
                        <span
                            className='card__technology'
                            key={`technology-${index}`}>
                            {technology}
                        </span>)
                    )}
                </div>
                <p className='card__description'>{description}</p>
                <div className='card__links'>
                    <a
                        href={demo}
                        className='card__link'
                        aria-label='Check project demo'
                        target='_blank'>
                        <FontAwesomeIcon icon={faLink} />
                    </a>
                    <a
                        href={github}
                        className='card__link'
                        aria-label='Check project code'
                        target='_blank'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </motion.div >
        </motion.div >
    )
}

export default ProjectCard