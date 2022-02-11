const convertTimestampToString = (timestamp, locale, format) => {
    if (format === "date") {
        return new Date(new Date(timestamp)).toLocaleString(locale, {
            year: "numeric",
            month: "numeric",
            day: "numeric",
        });
    } else if (format === "time") {
        return new Date(new Date(timestamp)).toLocaleString(locale, {
            hour: "2-digit",
            minute: "2-digit",
        });
    } else if (format === "hour") {
        return new Date(new Date(timestamp)).toLocaleString(locale, {
            hour: "numeric",
        });
    } else if (format === "day") {
        return new Date(new Date(timestamp)).toLocaleString(locale, {
            day: "numeric",
        });
    } else if (format === undefined) {
        return new Date(new Date(timestamp)).toLocaleString(locale);
    }
};

export default convertTimestampToString;
