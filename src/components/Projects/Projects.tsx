import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import './Projects.scss'
import { projects } from '../../projectsData'

const Projects: FC = () => {

    const cards = projects.map((project, index) => {
        const { name, description, technologies, demo, github, img } = project
        return (
            <div className='card' key={`project-${index}`}>
                <div className='card__img-container'>
                    <a href={demo}>
                        <img src={img} alt={`${name}-img`} className='card__img' />
                    </a>
                </div>
                <h3 className='card__name'>{name}</h3>
                <div className='card__technologies'>
                    {technologies.map((technology, index) => <span className='card__technology' key={`technology-${index}`}>{technology}</span>)}
                </div>
                <p className='card__description'>{description}</p>
                <div className='card__links'>
                    <a href={demo} className="card__link"> <FontAwesomeIcon icon={faLink} />
                    </a>
                    <a href={github} className="card__link"> <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div >
        )
    })


    return (
        <section id='projects' className='section'>
            <h2 className='section__title'>Projects</h2>
            <div className='projects'>
                {cards}
            </div>
        </section>
    )
}

export default Projects