import React, { useState } from 'react'

function Number() {
    const [number] = useState(Math.floor(Math.random() * 5) + 1);

    const [guess, setGuess] = useState("");
    const[result, setResult] = useState(null);

    const checkGuess = () => {
        if(parseInt(guess) === number) {
            setResult("win");
        } else {
            setResult("lose");
        }
    };

  return (
    <div>
        <h1>Guess Number (1-5)</h1>
        <input type="number"
        onChange={(e) => setGuess(e.target.value)}
        />
        <button onClick={checkGuess}>Check</button>

        {result && (
            <h2>
                {result === 'win' ? '🎉 Correct!' : "❌ wrong! Try Again"}
            </h2>
        )}

    </div>
  )
}

export default Number