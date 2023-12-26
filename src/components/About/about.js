import './about.scss';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import TTT1 from '../../assets/projects/ttt-1.png';
import TTD1 from '../../assets/projects/ttd-1.png';
import Don from '../../assets/projects/Donable-2.png'
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
                <p>
                    {' '}
                    Below are several Projects that I have worked in my tenure with the Oklahoma
                    Blood Institute.
                </p>
                <div className='projects'>
                    <div className='project-desc'>
                        <h3>Tic-Tac-Trivia</h3>
                        <img src={TTT1} alt='Tic Tac Trivia'/>
                        <p>
                            Tic Tac trivia is an html project 
                            integrating an angular framework and
                            firebase functions and the firebase SDK.
                            This is a trivia game with responsive design.
                        </p>
                        <a href='https://tic-tac-trivia.com' target='_new'>Visit</a>
                    </div>
                    <div className='project-desc'>
                        <h3>Thank the Donor</h3>
                        <img src={TTD1} alt='Thank The Donor'/>
                        <p>
                            Thank the Donor is an electron app with an
                            info site which is integrated with an angular framework
                            as well. The app makes use of a rest api integrated with C# 
                            ASP.net core. 
                        </p>
                        <a href='https://info.thankthedonor.org' target='_new'>Visit</a>
                    </div>
                    <div className='project-desc'>
                        <h3>Donable</h3>
                        <img src={Don} alt='Donable' />
                        <p>
                            Thank the Donor is an electron app with an
                            info site which is integrated with an angular framework
                            as well. The app makes use of a rest api integrated with C# 
                            ASP.net core. 
                        </p>
                        <a href='https://apps.apple.com/us/app/donable/id1634709654' target='_new'>Visit</a>
                    </div>                
                </div>
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