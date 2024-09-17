import "./App.css";
import { MapContainer, TileLayer, VideoOverlay } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <div id="container">
      <MapContainer center={[20.5937, 78.9629]} zoom={6}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <VideoOverlay
          bounds={[
            [8, 65],
            [36, 97],
          ]}
        />
      </MapContainer>
    </div>
  );
}

export default App;
