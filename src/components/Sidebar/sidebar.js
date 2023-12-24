import { Link, NavLink } from 'react-router-dom';
import './sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGoogleDrive, faLinkedin, faReact } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
 <div className='nav-bar'>
    <Link className='logo' to='/'>
        <FontAwesomeIcon className='icon' icon={faReact} color='#5ED4F4' />
        <p className='sub-logo' alt="naveenR">Naveen Ramanjulu</p>
    </Link>
    <nav>
        <NavLink
         exact="true" 
         activeclassname="active" 
         to="/"
        >
            <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
        </NavLink>
        <NavLink
         exact="true" 
         activeclassname="active" 
         className="about-link" 
         to="/about"
        >
            <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
        </NavLink>
        <NavLink
         exact="true" 
         activeclassname="active" 
         className="contact-link" 
         to="/contact"
        >
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
        </NavLink>
    </nav>
    <ul>
    <li>
            <a
             target='_blank' 
             rel='noreferrer'
             href='https://docs.google.com/document/d/1_40TPKJBC73lFQsVpqazPONS0uVZ7zVF/'
            >
                <FontAwesomeIcon icon={faGoogleDrive} color='#4d4d4e' alt='resume'/>
            </a>
        </li>
        <li>
            <a
             target='_blank' 
             rel='noreferrer'
             href='https://www.linkedin.com/in/naveen-ramanjulu-01475073/'
            >
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
            </a>
        </li>
        <li>
            <a
             target='_blank' 
             rel='noreferrer'
             href='https://github.com/nram76?tab=repositories'
            >
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
            </a>
        </li>
    </ul>
 </div>
);

export default Sidebar;