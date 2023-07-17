import { CiLinkedin } from 'react-icons/Ci';
import {FaGithubSquare } from 'react-icons/Fa';
import { AiOutlineInstagram } from 'react-icons/Ai'
import { PiTelegramLogoBold } from 'react-icons/Pi'
import { Link } from "react-router-dom";
import { LOGO_URL } from '../utils/constants';


const Footer =  () => {
    return(
        <div className="footer-container">
            <div className="footer-img">
                <img className='footer-icon' src={LOGO_URL} alt="footer-image"/>
            </div>
            <div className="footer-copyright">©2023 SUGGI</div>
         </div>
    );
}

export default Footer;