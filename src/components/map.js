import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "../styles/map.css";


export default function BeerMap() {
  const [activePark, setActivePark] = React.useState(null);

  const union = [46.0569, 14.5058]
  const lasko = [46.2397, 15.2677]

  return (
    <Map center={[46.0569, 14.5058]} zoom={8.5}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

<Marker position={union}>
      <Popup>
            Pivovarna Union <br /> Boljša kot Laško
      </Popup>
    </Marker>

    <Marker position={lasko}>
      <Popup>
            Pivovarna Laško <br /> Slabša kot Union
      </Popup>
    </Marker>

      

    </Map>
  );
}