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
        <Container className="TeamDetails">
            <Row className="teamContent py-3 my-3">
                <Col md={6}>
                    <h3>{strTeam}</h3>
                    <ul>
                        <li>Founded: {intFormedYear}</li>
                        <li>Country: {strCountry}</li>
                        <li>Sport Type: {strSport}</li>
                        <li>Gender: {strGender}</li>
                    </ul>
                </Col>
                <Col md={6}>{teamImg}</Col>
            </Row>
            <p>{strStadiumDescription}</p>
            <p>{strDescriptionEN}</p>
            <div className="social-icons">
                <a href={strTwitter} style={{ backgroundColor: '#1DA1F2' }}>
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href={strYoutube} style={{ backgroundColor: '#F70000' }}>
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href={strFacebook} style={{ backgroundColor: '#026BE4' }}>
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
            </div>
        </Container>
    );
};

export default TeamDetails;
