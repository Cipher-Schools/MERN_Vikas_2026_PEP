import { useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const skipForward = () => {
    videoRef.current.currentTime += 5;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>🎬 Mini Video Controller</h2>

      <video
        ref={videoRef}
        width="400"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={playVideo}>▶ Play</button>
        <button onClick={pauseVideo}>⏸ Pause</button>
        <button onClick={skipForward}>⏩ Skip 5s</button>
      </div>
    </div>
  );
}

export default VideoPlayer;