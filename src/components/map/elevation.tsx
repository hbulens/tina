import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ElevationChart = (props: any) => {
    const [data, setData] = useState([]);

    function calculateDistance(lat1: any, lon1: any, lat2: any, lon2: any) {
        const R = 6371; // Radius of the Earth in kilometers
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; // Distance in kilometers
        return distance;
    }

    useEffect(() => {
        // Extract track points from GPX (assuming a standard GPX format)
        const trackPoints = props.track.tracks?.[0].points ?? [];

        // Map track points to distance and altitude data
        let cumulativeDistance = 0;
        const parsedData = trackPoints.map((point: any, index: any) => {
            if (index > 0) {
                const prevPoint = trackPoints[index - 1];
                // Calculate distance between the current and previous points
                const distanceBetweenPoints = calculateDistance(
                    prevPoint.lat, prevPoint.lon,
                    point.lat, point.lon
                );
                cumulativeDistance += distanceBetweenPoints;
            }

            return {
                distance: cumulativeDistance.toFixed(2), // Distance in kilometers
                altitude: point.ele, // Altitude in meters
            };
        });

        setData(parsedData);

    }, [])

    return (
        <div>
            {data.length > 0 && (
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={data} margin={{ left: 5, right: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="distance" label={{ value: 'Distance', position: 'insideBottomRight', offset: -10, interval: 5, allowDecimals: false }} />
                        <YAxis label={{ value: 'Altitude (m)', angle: -90, position: 'insideLeft' }} />
                        <Tooltip /> 
                        <Line type="monotone" dataKey="altitude" stroke="#e86100" activeDot={{ r: 5 }} />
                    </LineChart>
                </ResponsiveContainer>
            )}
        </div>
    );
};

export default ElevationChart;
