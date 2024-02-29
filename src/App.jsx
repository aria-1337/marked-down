import React from "react";
import styled from 'styled-components';
import Header from './components/Header.jsx';
import Editor from './components/Editor.jsx';

export default function App() {
  return (
    <Container>
      <Header />
      <Editor />
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
