import { Link } from 'react-router-dom';
import './home.scss'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';

const Home = () => {
    // useState for setting variables
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['n','a','v','e','e','n'];
    const jobArray = ['s','o','f','t','w','a','r','e',' ','d','e','v','e','l','o','p','e','r'];


    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={1}
                    />
                    <br/>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={jobArray}
                    idx={17}
                    />
                    
                </h1>
                <h2>FrontEnd Developer / JavaScript Expert / Nest Js Servers / Stripe / Openai / Azure DevOps</h2>
                <Link to='/contact' className='flat-button' >Contact Me</Link>
            </div>

        </div>
    )
};

export default Home;