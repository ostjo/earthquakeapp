import { useState } from "react";
import EarthquakeFeature from "./earthquake-feature";
import convertTimestampToString from "../utils/convert-timestamp-to-string.js";

export default function TimeIntensityScale({ earthquakes, curTime }) {
    const [featureInFocus, setFeatureInFocus] = useState(false);
    const [hidePanel, setHidePanel] = useState(false);

    const createRowsForHours = () => {
        const rowsForHours = [];
        /* to cover the time from 8 to 8 inclusively, we need to count with 25h instead of 24h */
        const hoursSinceYesterday = 24 + 1;
        const today = convertTimestampToString(curTime, "en-US", "day");

        for (let i = 0; i < hoursSinceYesterday; i++) {
            const relativeTime = curTime - 60 * 60 * 1000 * i;
            const day = convertTimestampToString(relativeTime, "en-US", "day");

            // for each hour, add a div to the rowsForHours Array
            rowsForHours.push(
                <div
                    key={"trow " + i}
                    className={`time-date${day !== today ? " yesterday" : ""}`}
                >
                    <p className="date">
                        {convertTimestampToString(
                            relativeTime,
                            "en-US",
                            "date"
                        )}
                    </p>
                    <p className="time">
                        {convertTimestampToString(
                            relativeTime,
                            "en-US",
                            "time"
                        )}
                    </p>
                </div>
            );
        }
        return rowsForHours;
    };

    const closePanelFromParent = (e) => {
        if (!e.target.classList.contains("feature")) {
            setHidePanel(true);
        }
    };

    return (
        <>
            <ul className="intensity">
                <li>Micro</li>
                <li>Minor</li>
                <li>Light</li>
                <li>Moderate</li>
                <li>Strong</li>
                <li>Major</li>
                <li>Great</li>
            </ul>
            <ul
                className="scale-time-axis"
                onClick={(e) => closePanelFromParent(e)}
            >
                {createRowsForHours()}
                {earthquakes.length > 0 &&
                    earthquakes.map((feature) => {
                        return (
                            <EarthquakeFeature
                                key={feature.id}
                                feature={feature}
                                curTime={curTime}
                                featureInFocus={featureInFocus}
                                setFeatureInFocus={setFeatureInFocus}
                                hidePanel={hidePanel}
                                setHidePanel={setHidePanel}
                            />
                        );
                    })}
            </ul>
        </>
    );
}
