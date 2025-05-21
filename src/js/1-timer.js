import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const startButton = document.querySelector('.btn');


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0].getTime() < Date.now()) {
        alert("Please choose a date in the future");
        startButton.disabled = true;
    } else {
        startButton.disabled = false;
    }
  },
};

let fp = flatpickr('#datetime-picker', options);



// let Calendar = document.querySelector(".btn");
// let fpCalendar = flatpickr(Calendar, {});
// fpCalendar.toggle();
