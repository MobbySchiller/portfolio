import { FC } from 'react'
import './About.scss'

const About: FC = () => {

    return (
        <section className='section' id='about'>
            <h2 className='section__title'>About</h2>
            <div className='about__content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quasi necessitatibus quidem fuga. Eum assumenda explicabo illum perferendis aliquid ullam nisi nihil distinctio ea, laborum qui reprehenderit similique quibusdam tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repellat corporis debitis nulla voluptatem officiis impedit cupiditate id, dolores vel tempore aliquam non reprehenderit tenetur quam corrupti velit voluptatum eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores ad quia. Voluptatem totam eligendi, ipsum error sint non maiores excepturi soluta autem ea impedit delectus voluptatum consequuntur laborum at.</div>
            <div className='about__square'></div>
        </section>
    )
}

export default About