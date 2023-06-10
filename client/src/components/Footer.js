import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    return (
        <div className="footer">
            <div className="github-links">
                Visit the devs on Github!
                <div id="andrea-github">
                    <a href="https://github.com/andreaginn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{ color: '#f3f3f3' }} /></a></div>
                <div id="jorgen-github">
                    <a href="https://github.com/JpBaer" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{ color: "#b0bab6", }} /></a></div>
                <div id="melissa-github">
                    <a href="https://github.com/Meljska-Fawn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{ color: "#8ea574", }} /></a></div>
                <div id="brandon-github">
                    <a href="https://github.com/bruano95" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{ color: "#468247", }} /></a></div>
            </div>
            <div className="up-btn" onClick={handleScrollToTop}>
        Return to top
      </div>
            <div className="bloom-2023">Bloom 2023</div>
        </div>
    );
};

export default Footer;
