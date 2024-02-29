import React from 'react';
import styled from 'styled-components';

export default function Header() {
    return (
        <Container>
            <Title>[marked-down]</Title>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 5px 10px;
    align-items: center;
    justify-content: space-between;
    background-color: #ebeae8;
`;

const Title = styled.h3`
    margin: 0;
`;
