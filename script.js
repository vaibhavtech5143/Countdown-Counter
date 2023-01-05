




function countdown() {
  const newYearDate = new Date('1 Jan, 2024 12:00:00').getTime();
  const currenDate = new Date().getTime();
  const diffMilliseconds = (newYearDate - currenDate);

  const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
  // console.log(diffMilliseconds);

  const days = Math.floor(diffMilliseconds / (60 * 60 * 24 * 1000));
  // console.log(days);


  const hours = Math.floor((diffMilliseconds % (60 * 60 * 24 * 1000)) / (1000 * 60 * 60));
  // console.log(hours);

  const minutes = Math.floor(((diffMilliseconds % (60 * 60 * 1000)) / (1000 * 60)));
  // console.log(minutes);

  const seconds = Math.floor(((diffMilliseconds % (60 * 1000)) / 1000));
  //  console.log(seconds);

  // console.log(diffMilliseconds, days, hours, minutes, seconds);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);  
  secondsEl.innerHTML = formatTime(seconds);




function formatTime(time){
      return time < 10 ? '0' + time : time;

}





}

setInterval("countdown()", 1000);
