export function timeConversion(millisec: number) {
    var seconds = (millisec / 1000).toFixed(1);
    var minutes = (millisec / (1000 * 60)).toFixed(1);
    var hours = (millisec / (1000 * 60 * 60)).toFixed(1);
    var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

    if (parseInt(seconds) < 60) {
        return seconds + " Sec";
    } else if (parseInt(minutes) < 60) {
        return minutes + " Min";
    } else if (parseInt(hours) < 24) {
        return hours + " Hrs";
    } else {
        return days + " Days"
    }
}
