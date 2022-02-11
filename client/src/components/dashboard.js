import convertTimestampToString from "../utils/convert-timestamp-to-string";
import { intensityStatistics } from "../utils/interpret-data";

export default function Dashboard({ earthquakes, curTime }) {
    return (
        <section id="dashboard">
            <div className="time-and-count">
                <div>
                    <p>
                        <strong>From</strong>Today,{" "}
                        {convertTimestampToString(curTime, "en-US", "time")}
                    </p>
                    <p>
                        <strong>to</strong> Yesterday,{" "}
                        {convertTimestampToString(
                            curTime - 24 * 60 * 60 * 1000,
                            "en-US",
                            "time"
                        )}
                    </p>
                </div>
                <div>
                    <h4 className="earthquake-count">{earthquakes.length}</h4>
                    <h5>earthquakes detected in total</h5>
                </div>
            </div>
            <div className="intensity-statistics">
                <div className="intensity-field micro">
                    <p className="intensity-num">
                        {intensityStatistics(earthquakes).micro}
                    </p>
                    <p>Micro</p>
                </div>
                <div className="intensity-field minor">
                    <p className="intensity-num">
                        {intensityStatistics(earthquakes).minor}
                    </p>
                    <p>Minor</p>
                </div>
                <div className="intensity-field light">
                    <p className="intensity-num">
                        {intensityStatistics(earthquakes).light}
                    </p>
                    <p>Light</p>
                </div>
                <div className="intensity-field moderate">
                    <p className="intensity-num">
                        {intensityStatistics(earthquakes).moderate}
                    </p>
                    <p>Moderate</p>
                </div>
                <div className="intensity-field strong">
                    <p className="intensity-num">
                        {intensityStatistics(earthquakes).strong}
                    </p>
                    <p>Strong</p>
                </div>
                <div className="intensity-field major">
                    <p className="intensity-num">
                        {intensityStatistics(earthquakes).major}
                    </p>
                    <p>Major</p>
                </div>
                <div className="intensity-field great">
                    <p className="intensity-num">
                        {intensityStatistics(earthquakes).great}
                    </p>
                    <p>Great</p>
                </div>
            </div>
        </section>
    );
}
