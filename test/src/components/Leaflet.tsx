import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";

function Leaflet() {
  const position = [20.5937, 78.9629];
  return <Map className="Map" centre={position} zoom={10}></Map>;
}
export default Leaflet;
