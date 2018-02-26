/*jshint esversion: 6 */
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 
              'Saturday', 'Sunday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'];
const getDays = () => { return days;};
const getMonths = () => { return months;};
const getDay = (dayNumber) => { 
    const d = (Number.isInteger(dayNumber) && 
    (dayNumber <= (days.length - 1))) ? days[dayNumber] : '';
    return d;
};
const getMonth = (monthNumber) => {
    const d = (Number.isInteger(monthNumber) && 
    (monthNumber <= (months.length - 1))) ? months[monthNumber] : '';
    return d;
};
module.exports = {
    getDays,
    getMonths,
    getDay,
    getMonth
};