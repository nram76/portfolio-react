import './about.scss';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(()=> {
        setLetterClass('text-animate-hover')
    }, []);

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','M','e',]}
                        idx={10}
                    />
                </h1>
                <p>
                    Ambitous Software Engineer from West Chester University. 
                    Currently working at the Oklahoma Blood Institute and developing 
                    innovative Full Stack applications, responsive web sites, 
                    and NestJs servers following SOLID principles within sprint cycles. 
                    Publishing code to repositories which are managed with Azure DevOps.
                </p>
                <p>
                    {' '}
                    Currently implementing node.Js with React, React Native, and Angular while
                    maintaing C# APIs as well as integragting NestJs servers and Apis with 
                    technologies such as Stripe and OpenAi
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faNodeJs} color='#EFD81D' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About;