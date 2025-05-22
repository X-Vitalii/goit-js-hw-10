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
      window.alert('Please choose a date in the future');
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
      console.log(
        selectedDates[0].getSeconds(),
        selectedDates[0].getMinutes(),
        selectedDates[0].getHours(),
        selectedDates[0].getDay()
      );

      const elapsedTime = selectedDates[0].getTime() - Date.now();

      let tmrDays = Math.trunc(elapsedTime / (24 * 60 * 60 * 1000));
      let tmrHour = Math.trunc(
        (elapsedTime - tmrDays * 24 * 60 * 60 * 1000) / (60 * 60 * 1000)
      );
      let tmrMin = Math.trunc(
        (elapsedTime -
          tmrDays * 24 * 60 * 60 * 1000 -
          tmrHour * 60 * 60 * 1000) /
          (60 * 1000)
      );
      let tmrSec = Math.trunc(
        (elapsedTime -
          tmrDays * 24 * 60 * 60 * 1000 -
          tmrHour * 60 * 60 * 1000 -
          tmrMin * 60 * 1000) /
          1000
      );

      console.log(tmrSec, tmrMin, tmrHour, tmrDays);

      const divTimer = document.querySelector('.timer');

      const markup = `
      <div class="timer">
  <div class="field">
    <span class="value" data-days>${tmrDays}</span>
    <span class="label">Days</span>
  </div>
  <div class="field">
    <span class="value" data-hours>${tmrHour}</span>
    <span class="label">Hours</span>
  </div>
  <div class="field">
    <span class="value" data-minutes>${tmrMin}</span>
    <span class="label">Minutes</span>
  </div>
  <div class="field">
    <span class="value" data-seconds>${tmrSec}</span>
    <span class="label">Seconds</span>
  </div>
</div>
      `;

      divTimer.innerHTML = markup;

      const timerStart = document.querySelector('.btn');

      timerStart.addEventListener('click', event => {
        formData[event.target.name] = event.target.value.trim();
        localStorage.setItem(storageKey, JSON.stringify(formData));
      });
    }
  },
};

const timerStart = document.querySelector('.btn');

timerStart.addEventListener('click', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(storageKey, JSON.stringify(formData));
});

let fp1 = flatpickr('#datetime-picker', options);

// let Calendar = document.querySelector(".btn");
// let fpCalendar = flatpickr(Calendar, {});
// fpCalendar.toggle();
