import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer, Polyline } from 'react-leaflet'
import gpxParser from 'gpxparser';
import type { LatLngExpression } from 'leaflet';
import { useState, useEffect } from 'react';

const RouteVisualizer = () => {

    const [coordinates, setCoordinates] = useState<LatLngExpression[]>([]);
    const [center, setCenter] = useState<any>(null);

    useEffect(() => {
        const getRoute = async () => {
            const response = await fetch("/the-average-cyclist/routes/puertoleon.gpx");
            const text = await response.text();
            var gpx = new gpxParser();
            gpx.parse(text);

            const positions: LatLngExpression[] = gpx?.tracks[0].points?.map((p: any) => [p.lat, p.lon]);
            setCoordinates(positions);

            setCenter(positions[0])
        }

        getRoute();
    });

    if (!center)
        return <></>;


    return (
        <div style={{ height: "500px", width: "100%" }}>
            <MapContainer style={{ width: "100%", height: "100%" }} center={center} zoom={11} scrollWheelZoom={false}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Polyline
                    pathOptions={{ fillColor: 'red', color: 'blue' }}
                    positions={coordinates}
                />
            </MapContainer>
        </div >
    )
}

export default RouteVisualizer