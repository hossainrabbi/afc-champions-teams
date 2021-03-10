import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './TeamCard.css';

const TeamCard = ({ team }) => {
    const { strTeamBadge, strTeam, strSport, idTeam } = team;

    return (
        <Card className="TeamCard pt-3">
            <div className="team-img">
                <Card.Img variant="top" src={strTeamBadge} />
            </div>
            <Card.Body>
                <Card.Title>{strTeam}</Card.Title>
                <Card.Text>Sports type: {strSport}</Card.Text>
                <Link to={`/team/${idTeam}`}>
                    <Button variant="primary">
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default TeamCard;
