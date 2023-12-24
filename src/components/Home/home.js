import { Link } from 'react-router-dom';
import './home.scss'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';
import Profile from '../../assets/images/profile.png'
import Loader from 'react-loaders';

const Home = () => {
    // useState for setting variables
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['N','a','v','e','e','n'];
    const lastNameArray = [' ','R','a','m','a','n','j','u','l','u '];
    const jobArray = ['S','o','f','t','w','a','r','e',' ','D','e','v','e','l','o','p','e','r'];


    useEffect(()=> {
        setTimeout(() => {
        setLetterClass('text-animate-hover');
        }, 5000);
    }, [])

    
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArray.concat(lastNameArray)}
                    idx={1}

                    />
                    <br/>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={jobArray}
                    idx={17}
                    />
                    <br />
                    
                </h1>
                <h2>FrontEnd Developer / JavaScript Expert / Nest Js Servers / Stripe / Openai / Azure DevOps</h2>
                <Link to='/contact' className='flat-button' >Contact Me</Link>
            </div>
            <Link to='/about'>
            <div className='profile-pic'>
                <img src={Profile} className='profile' />
            </div>
            </Link>
        </div>
        <Loader type='pacman' />
        </>
    )
};

export default Home;