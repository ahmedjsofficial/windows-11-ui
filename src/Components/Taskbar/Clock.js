import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Clock = () => {
    const [TimeState, setTimeState] = useState();
    const [DateState, setDateState] = useState();

    useEffect(() => {
        setInterval(() => {
            const timeStamp = new Date();
            setTimeState(timeStamp.toLocaleTimeString());
        }, 1000);
    }, [])

    useEffect(() => {
        setInterval(() => {
            const DateStamp = new Date();
            setDateState(DateStamp.toLocaleDateString());
        }, 1000);
    }, [])
    return (
        <>
            <WindowsClock>
                <div>{TimeState}</div>
                <div>{DateState}</div>
            </WindowsClock>
        </>
    );
};
const WindowsClock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 15vw;

    div{
        font-size: 0.85rem;
        display: flex;
        align-items: center;
        margin: 0.3vh 0;
    }
`;
export default Clock;
