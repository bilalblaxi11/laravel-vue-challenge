export default class DateUtils {

    /**
     *
     * @param dateTimeString
     * @returns {string}
     */
    static formatDateTime(dateTimeString) {
        const dateTime = new Date(dateTimeString);
        return dateTime.toISOString().split('T')[0] + ' ' + dateTime.toTimeString().split(' ')[0];
    }

    /**
     *
     * @param dateString
     * @returns {string}
     */
    static formatDate(dateString) {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    }

}
