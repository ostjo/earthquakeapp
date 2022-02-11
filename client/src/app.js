import { useEffect, useState } from "react";
import TimeIntensityScale from "./components/time-intensity-scale";
import Dashboard from "./components/dashboard";

export default function App() {
    const curTime = new Date().getTime();
    const [earthquakes, setEarthquakes] = useState([]);

    useEffect(() => {
        /* as app mounted, fetch the earthquake data from USGS */
        fetch(
            "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
        )
            .then((resp) => resp.json())
            .then((data) => setEarthquakes(data.features))
            .catch((err) =>
                console.log("Error in App on GET USGS geojson data ", err)
            );
    }, []);

    return (
        <>
            <div className="title">
                <h1 className="underlined">Rumblin’ ’round the clock</h1>
                <h2>
                    Discover the earthquakes that have been detected by the USGS
                    in the past 24 hours
                </h2>
            </div>
            <Dashboard earthquakes={earthquakes} curTime={curTime} />
            <TimeIntensityScale earthquakes={earthquakes} curTime={curTime} />
        </>
    );
}
