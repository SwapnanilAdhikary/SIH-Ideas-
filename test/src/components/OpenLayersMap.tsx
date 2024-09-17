import { useEffect, useRef, useState } from "react";
import { Map, View } from "ol";
import "ol/ol.css";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { Coordinate } from "ol/coordinate";

const OpenLayersMap = () => {
  const mapDivRef = useRef<HTMLDivElement>(null);
  const [olMap, setOlMap] = useState<Map>();
  const [clickedCoordinate, setClickedCoordinate] = useState<Coordinate>();

  useEffect(() => {
    if (mapDivRef.current) {
      const map = new Map({
        target: mapDivRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [20.5937, 78.9629],
          zoom: 6,
        }),
      });

      map.on("click", (e) => {
        setClickedCoordinate(e.coordinate);
      });

      setOlMap(map);

      return () => {
        map.setTarget(undefined);
      };
    }
  }, []);

  useEffect(() => {
    if (olMap && clickedCoordinate) {
      olMap.getView().setCenter(clickedCoordinate);
      olMap.getView().setZoom(4);
    }
  }, [clickedCoordinate, olMap]);

  const addLayer = () => {
    if (olMap) {
      const newLayer = new TileLayer({
        source: new OSM(),
      });
      olMap.addLayer(newLayer);
    }
  };

  return (
    <>
      <div
        ref={mapDivRef}
        className="map"
        style={{ width: "100%", height: "1500px" }}
      />
      {clickedCoordinate && (
        <span className="coordinates-container">
          You clicked at: {clickedCoordinate[0]} / {clickedCoordinate[1]}
        </span>
      )}
      <button onClick={addLayer}>Add New Layer</button>
    </>
  );
};

export default OpenLayersMap;
