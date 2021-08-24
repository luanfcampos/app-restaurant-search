import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Card = styled.div`
    min-width: 90px;
    height: 90px;
    border-radius: 8px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
    p {
    margin-left: 6px;
    margin-top: 10px;
    }
`
const ImageCard = ({ photo }) => <Card photo={photo} />

export default ImageCard