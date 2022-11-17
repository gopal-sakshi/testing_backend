const formatAMPM = (date) => {
    date = new Date(date);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';

    hours %= 12;
    hours = hours || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    const strTime = `${hours}:${minutes} ${ampm}`;

    return strTime;
};

// const blah23 = formatAMPM(new Date('2022-08-10T07:36:00.000Z').toLocaleDateString(undefined, {timezone: 'Asia/Kolkata'}));

const blah23 = new Date('2022-08-10T14:36:00.000Z')
console.log(blah23);

let hour = blah23.getUTCHours();
let minute = blah23.getUTCMinutes();

console.log(hour, minute);


