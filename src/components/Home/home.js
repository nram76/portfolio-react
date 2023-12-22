import { Link } from 'react-router-dom';
import './home.scss'

const Home = () => {
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> Naveen Ramanjulu
                <br />
                Software Engineer
                </h1>
                <h2>FrontEnd Developer / JavaScript Expert / Nest Js Servers / Stripe / Openai / Azure DevOps</h2>
                <Link to='/contact' className='flat-button' >Contact Me</Link>
            </div>

        </div>
    )
};

export default Home;