import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TeamCard from '../TeamCard/TeamCard';

const Teams = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const apiUrl =
            'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain';
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => setTeams(data.teams))
            .catch((err) => console.log(err));
    }, []);

    return (
        <Container>
            <Row className="mt-3">
                {teams.map((team) => (
                    <Col md={4} sm={6} className="my-3" key={team.idTeam}>
                        <TeamCard team={team} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Teams;
