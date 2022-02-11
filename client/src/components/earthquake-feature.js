import { useEffect, useState } from "react";
import {
    interpretMagnitude,
    calculateSizeByMag,
    calculateXPosByMag,
    convertTimeToTopOffset,
} from "../utils/interpret-data";
import convertTimestampToString from "../utils/convert-timestamp-to-string";

export default function EarthquakeFeature({
    feature,
    curTime,
    featureInFocus,
    setFeatureInFocus,
    hidePanel,
    setHidePanel,
}) {
    const [panelVisible, setPanelVisible] = useState(false);

    useEffect(() => {
        //  each time the featureInFocus changes, check:
        //  if the featureInFocus matches the specific feature’s id, the feature’s info panel is shown
        //  if mismatch, the feature’s info panel is hidden
        setPanelVisible(featureInFocus === feature.id);
    }, [featureInFocus]);

    useEffect(() => {
        if (hidePanel) setPanelVisible(false);
    }, [hidePanel]);

    useEffect(() => {
        setHidePanel(false);
    }, [panelVisible]);

    const addIndividualStyling = () => {
        // add the individually calculated styling for each feature elem
        return {
            left: calculateXPosByMag(feature.properties.mag),
            height: calculateSizeByMag(feature.properties.mag),
            width: calculateSizeByMag(feature.properties.mag),
            top: convertTimeToTopOffset(feature.properties.time, curTime),
            zIndex: `${panelVisible ? "4" : "1"}`,
        };
    };

    return (
        <>
            <div
                id={feature.id}
                className={`feature${panelVisible ? " in-focus" : ""}`}
                style={addIndividualStyling()}
                onClick={(e) => {
                    setFeatureInFocus(e.target.id);
                    setPanelVisible(true);
                }}
            >
                <div className={`info-panel${panelVisible ? "" : " hidden"}`}>
                    <p className="info-time">
                        {convertTimestampToString(
                            feature.properties.time,
                            "en-US"
                        )}
                    </p>
                    <h4>{Math.round(feature.properties.mag * 1e1) / 1e1}</h4>
                    <p
                        className={`intensity-label ${interpretMagnitude(
                            feature.properties.mag
                        )}`}
                    >
                        {interpretMagnitude(feature.properties.mag)}
                    </p>
                    <p>{feature.properties.place}</p>
                    <a
                        href={feature.properties.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p>see on USGS</p>
                    </a>
                </div>
            </div>
        </>
    );
}
