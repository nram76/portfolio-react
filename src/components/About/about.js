import './about.scss';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';

const About = () => {
    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        strArray={[]}
                    />
                </h1>
            </div>
        </div>
    )
}

export default About;