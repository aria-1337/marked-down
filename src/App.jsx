import React from "react";
import styled from 'styled-components';
import Header from './components/Header.jsx';

export default function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
