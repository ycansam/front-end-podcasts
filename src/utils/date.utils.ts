class DateUtils {
    public parseDateToYearMonthDate(stringDate: string): string {
        const date = new Date(stringDate);

        const day = date.getUTCDate();
        const month = date.getUTCMonth() + 1; // el mes empieza en 0. Se añade 1
        const year = date.getUTCFullYear();

        return `${day}/${month}/${year}`;
    }

    public parseMillisToHoursMinutesSeconds(milliseconds: number): string {

        const hours = Math.floor(milliseconds / 3600000); // divide by 3,600,000 to get the number of hours
        const minutes = Math.floor((milliseconds % 3600000) / 60000); // divide by 60,000 to get the number of minutes
        const seconds = Math.floor((milliseconds % 60000) / 1000); // divide by 1,000 to get the number of seconds

        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }

    public parseMillisToMinutesSeconds(milliseconds: number): string {
        const minutes = Math.floor(milliseconds / 60);
        const seconds = Math.floor(milliseconds % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
}

const dateUtils = new DateUtils();
export default dateUtils;