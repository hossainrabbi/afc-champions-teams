import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialIcon.css';

const SocialIcon = ({ mainLink, link, icon, bgColor }) => {
    return (
        <a
            href={mainLink ? `https://${mainLink}` : link}
            target="_blank"
            rel="noreferrer"
            style={{ backgroundColor: bgColor }}
            className="social-icons"
        >
            <FontAwesomeIcon icon={icon} />
        </a>
    );
};

export default SocialIcon;
