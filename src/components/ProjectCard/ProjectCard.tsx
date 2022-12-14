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
                    <a
                        href={demo}
                        aria-label='Check project demo'
                        target='_blank'>
                        <img
                            src={img}
                            alt={`${name}-img`}
                            className='card__img'
                        />
                    </a>
                </div>
                <div className='card__info'>
                    <div className='project-info'>
                        <h3 className='project-info__name'>{name}</h3>
                        <div className='project-info__technologies'>
                            {technologies.map((technology, index) => (
                                <span
                                    className='project-info__technology'
                                    key={`technology-${index}`}>
                                    {technology}
                                </span>)
                            )}
                        </div>
                        <p className='project-info__description'>{description}</p>
                    </div>
                    <div className='project-links'>
                        <a
                            href={demo}
                            className='project-links__link'
                            aria-label='Check project demo'
                            target='_blank'>
                            demo
                        </a>
                        <a
                            href={github}
                            className='project-links__link'
                            aria-label='Check project code'
                            target='_blank'>
                            code
                        </a>
                    </div>
                </div>
            </motion.div >
        </motion.div >
    )
}

export default ProjectCard