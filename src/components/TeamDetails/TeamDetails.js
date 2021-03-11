import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
    faClock,
    faFlag,
    faMars,
    faRunning,
} from '@fortawesome/free-solid-svg-icons';
import maleTeam from '../../images/male.png';
import femaleTeam from '../../images/female.png';
import './TeamDetails.css';
import Header from '../Header/Header';
import SocialIcon from '../SocialIcon/SocialIcon';

const TeamDetails = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const apiUrl = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => setTeam(data.teams[0]))
            .catch((err) => console.log(err));
    }, [teamId]);

    const {
        strTeamBadge,
        strTeamBanner,
        strTeam,
        intFormedYear,
        strCountry,
        strSport,
        strGender,
        strStadiumDescription,
        strDescriptionEN,
        strTwitter,
        strYoutube,
        strFacebook,
    } = team;

    const teamImg =
        strGender === 'Male' ? (
            <img src={maleTeam} alt="Male Team" />
        ) : (
            <img src={femaleTeam} alt="Female Team" />
        );

    return (
        <div className="TeamDetails">
            {strTeamBanner ? (
                <img
                    src={strTeamBanner}
                    alt="Banner-img"
                    className="banner-img"
                />
            ) : (
                <Header>
                    <img
                        src={strTeamBadge}
                        alt="Team Logo"
                        className="main-headding"
                    />
                </Header>
            )}
            <div className="team-content-area">
                <Container>
                    <Row className="team-content py-3 my-4">
                        <Col md={6}>
                            <h3>{strTeam}</h3>
                            <ul>
                                <li>
                                    <FontAwesomeIcon icon={faClock} /> Founded:{' '}
                                    {intFormedYear}
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faFlag} /> Country:{' '}
                                    {strCountry}
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faRunning} /> Sport
                                    Type: {strSport}
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faMars} /> Gender:{' '}
                                    {strGender}
                                </li>
                            </ul>
                        </Col>
                        <Col md={6}>{teamImg}</Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <p>{strStadiumDescription}</p>
                <p>{strDescriptionEN}</p>
                <div className="social">
                    <SocialIcon
                        mainLink={strTwitter}
                        link="https://twitter.com"
                        icon={faTwitter}
                        bgColor="#1DA1F2"
                    />
                    <SocialIcon
                        mainLink={strYoutube}
                        link="https://www.youtube.com"
                        icon={faYoutube}
                        bgColor="#F70000"
                    />
                    <SocialIcon
                        mainLink={strFacebook}
                        link="https://www.facebook.com"
                        icon={faFacebookF}
                        bgColor="#026BE4"
                    />
                </div>
            </Container>
        </div>
    );
};

export default TeamDetails;
