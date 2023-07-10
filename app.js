/* Set the actual date of the giveaway ending. */
let days =[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
], months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
let more = new Date().getDate() + 10;
const futureDate = new Date(2023,6,more,17,30);
let date = futureDate.getDate();
let year = futureDate.getFullYear();
let month = futureDate.getMonth();
let day = futureDate.getDay();
let hour = futureDate.getHours();
let minutes = futureDate.getMinutes();


/* Select the element that is to display the real ending date. */
let content = document.querySelector('.content h4');
content.innerHTML = `<h4 class="text-slate-950 text-xl font-semibold">Giveaway Ends on ${days[day]}, ${date} ${months[month]} ${year} ${hour}:${minutes}</h4>`;


function getRemainingTime(){

/* Get the remaining time in milliseconds using futureDate*/
let fmilli = futureDate.getTime();
let nmilli = new Date().getTime();
let Rmilli = fmilli - nmilli;


/* convert all units to milliseconds to get the different units right. */

let oneDay = 24*60*60*1000;
let oneHour = 60*60*1000;
let oneMinute = 60*1000;
let oneSecond = 1000;

/* Convert all the remaining units into milliseconds. */

let Rdays = Rmilli/oneDay;
Rdays = Math.floor(Rdays);
let Rhours = (Rmilli%oneDay)/oneHour;
Rhours = Math.floor(Rhours);
let Rminutes = (Rmilli%oneHour)/oneMinute;
Rminutes = Math.floor(Rminutes);
let Rseconds = (Rmilli%oneMinute)/oneSecond;
Rseconds = Math.floor(Rseconds);

/* Select the elements where the time will be shown */
let overallTime = document.querySelector(".times");
let deadline = document.querySelectorAll(".deadline-time h4");
let arrayTimes = [Rdays,Rhours,Rminutes,Rseconds];
deadline.forEach(function(item,index){
    /* Check if the array's value is less than 10 to prepend it with a zero to look better */
    if(arrayTimes[index]<10){
        item.textContent = "0"+arrayTimes[index];
    }
    else {
        item.textContent = arrayTimes[index];
    }
});
if(Rmilli<0){
    clearInterval(countdown);
   overallTime.innerHTML = ` <h4 class="text-slate-950 text-xl font-semibold">Sorry This giveaway Ended</h4>`
}

}
let countdown = setInterval(getRemainingTime,1000);
getRemainingTime();