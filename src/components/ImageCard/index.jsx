import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    min-width: 90px;
    height: 90px;
    border-radius: 6px;

    background-image: url(${(props) => props.photo});
    background-size: cover;
    p {
    margin-left: 6px;
    margin-top: 10px;
    }
`
const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: #ffffff;
    font-size: 16px;
`

const ImageCard = ({ photo, title }) => (
    <Card photo={photo}>
        <Title>{title}</Title>
    </Card>
);

export default ImageCard