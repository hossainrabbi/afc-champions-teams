import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import maleTeam from '../../images/male.png';
import femaleTeam from '../../images/female.png';
import './TeamDetails.css';
import Header from '../Header/Header';
import {
    faClock,
    faFlag,
    faMapMarkedAlt,
    faMapMarkerAlt,
    faMars,
    faRunning,
} from '@fortawesome/free-solid-svg-icons';

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
            <Header>
                <img
                    src={strTeamBadge}
                    alt="Team Logo"
                    className="main-headding"
                />
            </Header>
            <Container>
                <Row className="teamContent py-3 my-3">
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
                                <FontAwesomeIcon icon={faRunning} /> Sport Type:{' '}
                                {strSport}
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faMars} /> Gender:{' '}
                                {strGender}
                            </li>
                        </ul>
                    </Col>
                    <Col md={6}>{teamImg}</Col>
                </Row>
                <p>{strStadiumDescription}</p>
                <p>{strDescriptionEN}</p>
                <div className="social-icons">
                    <a
                        href={`https://${strTwitter}`}
                        style={{ backgroundColor: '#1DA1F2' }}
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                        href={`https://${strYoutube}`}
                        style={{ backgroundColor: '#F70000' }}
                    >
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a
                        href={`https://${strFacebook}`}
                        style={{ backgroundColor: '#026BE4' }}
                    >
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default TeamDetails;
