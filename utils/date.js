export function getFormatDate(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    const year = date.getFullYear();

    if(day < 10) {
        day = `0${day}`;
    } else {
        day = date.getDate();
    }

    if(month < 10) {
        month = `0${month}`;
    } else {
        month = date.getMonth() + 1;
    }

    return `${day}-${month}-${year}`
}