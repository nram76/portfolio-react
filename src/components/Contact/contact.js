import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';
import './contact.scss';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailchimp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const strArray = ['C','o','n','t','a','c','t',' ','M','e',];
    const [letterClass, setLetterClass] = useState('text-animate');
    const [disabled, setDisabled] = useState(false);
    const form = useRef();

    useEffect(()=> {
        setTimeout(() => {
        setLetterClass('text-animate-hover');
        }, 5000);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()
        setDisabled(true);
        emailjs
          .sendForm("service_ykutl2g","template_h68uvxt", form.current, 'imBNmvAh9wZuLiLaS')
          .then(
            () => {
              alert('Message successfully sent!');
              window.location.reload(false)
              setDisabled(false);
            },
            () => {
              alert('Failed to send the message, please try again')
              setDisabled(false);
            }
          ).catch(e => {console.error(e); setDisabled(false)});
      }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={strArray} 
                    idx={15}
                    />
                <FontAwesomeIcon icon={faMailchimp} color='white' className='sidemail'/>

                </h1>
                <p>
                    I am currently interested in opportunities for 
                    Senior developer roles. If you have any questions or 
                    would like to follow up with me, feel free to contact 
                    me with the form below I will reply to you ASAP! 
                </p>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                        <li className='half'>
                            <input
                                placeholder=" Your Name"
                                type="text"
                                id="name"
                                name="user_name"
                                required
                            />
                            </li>
                            <li className='half'>
                            <input
                                placeholder=" Your Email"
                                type="email"
                                id="email"
                                name="user_email"
                                required
                            />
                            </li>
                            <li>
                            <input
                                placeholder="Subject"
                                type="text"
                                id="subject"
                                name="subject"
                                required
                            />
                            </li>
                            <li>
                            <textarea
                                placeholder="Message"
                                name="message"
                                id="message"
                                required
                            ></textarea>
                            </li>
                            <li>
                            <input type="submit" disabled={disabled} className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
};

export default Contact;