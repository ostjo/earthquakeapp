const interpretMagnitude = (magnitude) => {
    const roundedMagn = Math.round(magnitude * 1e2) / 1e2;
    if (roundedMagn < 2.0) {
        return "micro";
    } else if (roundedMagn < 4.0) {
        return "minor";
    } else if (roundedMagn < 5.0) {
        return "light";
    } else if (roundedMagn < 6.0) {
        return "moderate";
    } else if (roundedMagn < 7.0) {
        return "strong";
    } else if (roundedMagn < 8.0) {
        return "major";
    } else if (roundedMagn >= 8.0) {
        return "great";
    } else {
        return "not on scale";
    }
};

const calculateSizeByMag = (mag) => {
    return Math.abs(Math.floor(mag * 10)) + "px";
};

const calculateXPosByMag = (mag) => {
    const roundedMag = (Math.round(mag * 1e1) / 1e1) * 8.555555555555556;
    return roundedMag + "%";
};

const convertTimeToTopOffset = (unixTimestamp, curTime) => {
    // 0 hours (now) represent 0% top offset.
    // 25 hours represent 100% top offset.
    // the unix timestamp value for 25 hours is 90000000 (with milliseconds)
    const totalDistance = 90000000;
    const factor = 100 / totalDistance;

    // calculate the difference of curTime (now) and the timestamp of the feature
    const timePassed = curTime - unixTimestamp;

    // calculate the top offset by multiplying the timePassed with our factor
    // and rounding to 2 decimals (e.g.: 2.45)
    const topOffsetPercentage = Math.round(timePassed * factor * 1e2) / 1e2;
    return topOffsetPercentage + "%";
};

const intensityStatistics = (earthquakes) => {
    const intensityStatistic = {
        micro: 0,
        minor: 0,
        light: 0,
        moderate: 0,
        strong: 0,
        major: 0,
        great: 0,
    };

    earthquakes.forEach((feature) => {
        const mag = interpretMagnitude(feature.properties.mag);

        if (intensityStatistic[mag] >= 0) {
            intensityStatistic[mag]++;
        }
    });
    return intensityStatistic;
};

export {
    interpretMagnitude,
    calculateSizeByMag,
    calculateXPosByMag,
    convertTimeToTopOffset,
    intensityStatistics,
};
