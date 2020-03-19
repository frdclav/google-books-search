import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const ResultCard = (props) => {


    return (
        <div className="container-fluid p-2 border ">
            <Container>
                <Row className=" ">
                    <Col xs="8" className=" p-1"><h5>{props.data.title}</h5>
                        <h6>{props.data.subtitle}</h6>
                        <p>{props.data.authors}</p></Col>
                    <Col xs="4" className=" p-1 text-right">
                        {props.data.btn1}
                        {props.data.btn2}
                    </Col>
                </Row>
                <Row className="">
                    <Col xs="3" >
                        <img src={props.data.image} alt='book' />
                    </Col>
                    <Col xs="9">
                        <p>
                            {props.data.description}
                        </p>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default ResultCard
