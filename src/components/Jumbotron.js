import React from 'react';
import { Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import AppLogo from '../assets/AppLogo.jpg'

const Styles = styled.div`
.jumbo{
    background: no-repeat fixed  bottom;
    background-size: cover;
    color: #ccc;
    height: 350px;
    position: relative;
    z-index: -1;
}
.overlay{
    background-color: #000;
    opacity: 0.1;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
h1{
    position: center;
    opacity: 0.4;
    top: 10;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    margin-top:70px;
}

`
;


export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid>
            <div className="overlay"></div>
            <Container>
                <h1 className="display-4">Welcome to the Home Page</h1>
                
            </Container>
            
        </Jumbo>
    </Styles>
)