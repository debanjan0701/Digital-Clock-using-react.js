import React, { useState } from 'react';

const App = () => {
    let currTime = new Date().toLocaleTimeString();
    const state = useState();

    const [Time, setTime] = useState(currTime);

    const UpdatedTime = () => {
        currTime = new Date().toLocaleTimeString();
        setTime(currTime);
    }
    setInterval(UpdatedTime, 1000)
    return (
        <>
            <h1>{Time}</h1>
        </>
    );
}

export default App;