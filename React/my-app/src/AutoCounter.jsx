import React, { useEffect, useState } from 'react'

function AutoCounter() {
    const [count , setCount] = useState(0);
    const[isRunning,setIsRunning] = useState(false);

    useEffect(()=> {
        if(!isRunning) return;

        const interval = setInterval(()=> {
            setCount(prev=> prev+1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning]);

  return (
    <div style={{
        textAlign: "center",
        marginTop: "100px"
    }}>
        <h2>Auto Counter</h2>
        <h1>{count}</h1>

        <button onClick={()=> setIsRunning(true)}>Start</button>
        <button onClick={()=> setIsRunning(false)}>Stop</button>
        <button onClick={()=> {setCount(0); setIsRunning(false);}}>Reset</button>
    </div>
  )
}

export default AutoCounter