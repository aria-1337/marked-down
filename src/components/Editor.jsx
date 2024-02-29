import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Editor() {
    const [lines, setLines] = useState([]);
    const [activeLine, setActiveLine] = useState(null);

    // Eventually this will load from saves or prior open file
    useEffect(() => {
        const l = [];
        l.push({ number: 1, active: true, content: 'Example content' });
        for (let i = 1; i < 40; i++) {
            l.push({ number: i+1, active: false, content: '' });
        }
        setLines(l);
        setActiveLine(1);
    }, []);

    function selectLine(number) {
        const oldState = lines;
        if (activeLine && number !== activeLine) { oldState[activeLine-1].active = false; }
        oldState[number-1].active = true;
        setLines(oldState);
        setActiveLine(number);
    }

    function writeToLine(number, newContent) {
        const oldState = lines;
        oldState[number-1].content = newContent;
        setLines(oldState);
    }

    return (
        <OuterContainer>
            <EditorContainer>
                { lines.map((lineState, i) => <EditorLine key={i+1} lineState={lineState} selectLine={selectLine} writeToLine={writeToLine} />)}
            </EditorContainer>
        </OuterContainer>
    );
}

const OuterContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;

const EditorContainer = styled.div`
    width: 50%;
    height: 100%;
    border-right: 5px solid #ebeae8;
    border-bottom: 5px solid #ebeae8;
    padding-left: 10px;
`;

function EditorLine({ lineState: { number, active, content }, selectLine, writeToLine }) {
    const [internalContent, setInternalContent] = useState(content);
    function write(e) {
        setInternalContent(e.target.value);
    }

    // When leaving line write to it
    useEffect(() => {
        writeToLine(number, internalContent);
    }, [active]);

    return (
        <EditorLineContainer active={active.toString()} onClick={() => selectLine(number)}>
            { number }
            <EditorLineContent value={internalContent} onChange={write}/>
        </EditorLineContainer>
    );
}

const EditorLineContent = styled.input`
    padding-left: 10px;
    color: black;
    border: transparent;
    background-color: transparent;
    font-size: 14px;

`;

const EditorLineContainer = styled.div`
    height: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${props => props.active === 'true' ? 'white' : 'black' };
    background-color: ${props => props.active === 'true' ? '#94b8f2' : 'transparent'};
    padding: ${props => props.active === 'true' ? '4px 10px' : '0px' };
`;
