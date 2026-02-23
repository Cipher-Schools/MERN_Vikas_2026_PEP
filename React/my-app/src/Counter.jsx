import React, { useState } from 'react'

function Counter() {
    const [likes,setLikes] = useState(0);
    let message;

    if(likes === 0){
        message = "Be the first to like 👍";
    } else if(likes < 5){
        message = 'People Like this 🔥';
    } else {
        message = "Trending Post 🚀"
    }
  return (
    <div style={{textAlign: "center", marginTop: "100px"}}>
        <h1>👍Likes: {likes}</h1>

        <button onClick={()=> setLikes(likes + 1)}>Like</button>
        <button onClick={()=> setLikes(likes - 1)}>Dislike</button>

        <h2>{message}</h2>
        {likes >= 10 && <h3>🎉 Viral Content!</h3>}
    </div>
  )
}

export default Counter