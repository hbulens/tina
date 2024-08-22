import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Polyline } from 'react-leaflet'
import gpxParser from 'gpxparser';
import type { LatLngExpression } from 'leaflet';
import { useState, useEffect } from 'react';
import ElevationChart from '@/components/map/elevation';

const RouteVisualizer = ({ route }: { route: string }) => {

    const [coordinates, setCoordinates] = useState<LatLngExpression[]>([]);
    const [track, setTrack] = useState<any>(null);
    const [center, setCenter] = useState<any>(null);

    useEffect(() => {
        const getRoute = async () => {
            const response = await fetch("/the-average-cyclist/routes/" + route + ".gpx");
            const text = await response.text();
            var gpx = new gpxParser();
            gpx.parse(text);

            const positions: LatLngExpression[] = gpx?.tracks[0].points?.map((p: any) => [p.lat, p.lon]);
            setCoordinates(positions);

            setCenter(positions[0])
            setTrack(gpx);
        }

        getRoute();
    }, []);

    if (!center)
        return <></>;

    return (
        <div className="mt-8 mt-8">
            <div style={{ height: "300px", width: "100%" }}>
                <MapContainer style={{ width: "100%", height: "100%" }} center={center} zoom={11} scrollWheelZoom={false}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Polyline
                        pathOptions={{ fillColor: 'red', color: 'blue' }}
                        positions={coordinates}
                    />
                </MapContainer>
            </div >
            <div style={{ height: "150px" }} className='mt-2'>
                <ElevationChart track={track} />
            </div>
        </div>
    )
}

export default RouteVisualizer