setInterval(() => {
  let date = new Date();
  let day = date.getDay();
  let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let night = 'AM';
  const time = document.querySelector('#time');

  if (hours > 12) {
    hours = hours - 12;
    night = 'PM';
  }

  if (hours < 10) {
    hours = '0' + hours;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  time.textContent = days[day] + ' ' + hours + ' : ' + minutes + ' : ' + night;

  setTimeout(setInterval, 200);
});
