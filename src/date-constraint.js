const date = document.querySelector('#dueDate');
let minDate = new Date().toISOString();
let dateString = minDate.split('T')[0];
let timeString = minDate.split('T')[1];

let timeArr = timeString.split(':')
timeArr.splice(2,1);

timeString = timeArr.join(':');

let newMinString = dateString + 'T' + timeString;
date.min = newMinString;

export function setDateMin(){
    return newMinString;
}