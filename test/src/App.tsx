import "./App.css";
import { MapContainer, TileLayer, Marker, VideoOverlay } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React, { useState } from "react";

function App() {
  const position = [25, -100];
  const [play, setPlay] = useState(true);

  function onTogglePlay() {
    setPlay(!play);
  }
  return (
    <div id="container">
      <MapContainer center={[20.5937, 78.9629]} zoom={6} onClick={onTogglePlay}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[12.9716, 77.5946]} />
        <VideoOverlay
          bounds={[
            [8, 65],
            [36, 97],
          ]}
          play={play}
          url="/assets/map2.html.mp4"
          opacity={0.5}
        />
      </MapContainer>
      <button onClick={onTogglePlay} className="play-toggle-button">
        {play ? "Pause Video" : "Play Video"}
      </button>
    </div>
  );
}

export default App;
