import React from 'react';
import { Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import AppLogo from '../assets/AppLogo.jpg'

const Styles = styled.div`
.jumbo{
    background: url(${AppLogo}) no-repeat  bottom;
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
    top: 0px;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
`
;


export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <container>
            </container>
        </Jumbo>
    </Styles>
)