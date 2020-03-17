import React from 'react';
import { Jumbotron } from 'reactstrap';

const GBSJumbotron = (props) => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">(React) Google Book Search!</h1>
                <p className="lead">Search for and save books of interest</p>
            </Jumbotron>
        </div>
    );
};

export default GBSJumbotron;