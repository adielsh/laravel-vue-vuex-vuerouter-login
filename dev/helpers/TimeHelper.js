/**
 * Created by elad on 26 דצמבר 2016.
 */
import moment from "moment";


class TimeHelper {

    static dateStringForHuman(date, oldDateFormat) {
        return moment(date, oldDateFormat).format("DD-MM-YYYY");
    }

    static getTimeNowString(second = false, addMinutes = 0) {
        let format = (second) ? "HH:mm:ss" : "HH:mm"
        return moment().add(addMinutes, "minutes").format(format);
    }

    static getTodayDateString(format = "DD-MM-YYYY", addDays = 0, addMinutes = 0) {
        return moment().add(addDays, "days").add(addMinutes, "minutes").format(format);
    }

    static getTimeForInputTimeDate(addDays = 0, addMintues = 0) {
        return TimeHelper.getTodayDateString("YYYY-MM-DDTHH:mm", addDays, addMintues);
    }

    static getAnyTimeForInputTimeDate(date) {
        return moment(date).format("YYYY-MM-DDTHH:mm")
    }
}

TimeHelper.W3C_FORMT_DATE = "YYYY-MM-DD";
TimeHelper.HUMAN_DATE = "DD-MM-YYYY";
TimeHelper.W3C_FORMT_DATE_TIME = "YYYY-MM-DD HH:mm";

export default TimeHelper;