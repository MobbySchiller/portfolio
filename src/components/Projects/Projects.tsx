import { FC } from 'react'
import { motion, Variants } from 'framer-motion'
import ProjectCard from '../ProjectCard/ProjectCard'
import { projects } from '../../data'
import './Projects.scss'

const Projects: FC = () => {
    const cardVariants: Variants = {
        offscreen: {
            opacity: 0,
            y: 70,
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
        <section id='projects' className='section'>
            <motion.h2
                className='title'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: .6 } }}
                viewport={{ once: true, amount: 0.8 }}>
                Projects
            </motion.h2>
            <div className='section__wrapper'>
                <div
                    className='projects'>
                    {projects.map((project, index) => <ProjectCard key={`project-${index}`} data={project} />)}
                </div>
                <motion.div
                    className='gh-ref'
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.4 }}>
                    <motion.div className='gh-ref__wrapper' variants={cardVariants}>
                        <p className='gh-ref__text'>Visit my <a href="https://github.com/MobbySchiller" className='gh-ref__link'>GitHub profile</a> to see more projects</p>
                    </motion.div>
                </motion.div>
            </div>
        </section >
    )
}

export default Projects