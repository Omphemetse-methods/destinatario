/* eslint-disable */
import React, { useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl";
import destinatarioIcon from "./destinatario.png";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESSTOKEN;

function App() {
  // map utilitis
  //
  const map = useRef(null);
  const mapContainer = useRef(null);

  // check if map is already intialized
  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [28.04363, -26.20227],
      zoom: 14,
    });

    map.current.on("load", () => {
      map.current.addControl(
        new window.MapboxDirections({ accessToken: mapboxgl.accessToken }),
        "top-right"
      );
    });
  }, []);

  console.log("window", window.MapboxDirections);

  return (
    <div className="relative max-w-screen max-h-screen">
      <section
        ref={mapContainer}
        className="fixed w-screen h-screen max-w-screen max-h-screen"
      />
      <section className="fixed z-50 top-0 left-0 px-4 py-2">
        <img
          src={destinatarioIcon}
          alt="src"
          className="w-12 h-12 rounded-full objec-cover"
        />
      </section>
    </div>
  );
}

export default App;
