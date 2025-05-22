import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as m}from"./assets/vendor-CCO2o_no.js";const o=document.querySelector(".btn"),d={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(console.log(t[0]),t[0].getTime()<Date.now())window.alert("Please choose a date in the future"),o.disabled=!0;else{o.disabled=!1,console.log(t[0].getSeconds(),t[0].getMinutes(),t[0].getHours(),t[0].getDay());const e=t[0].getTime()-Date.now();let a=Math.trunc(e/(24*60*60*1e3)),s=Math.trunc((e-a*24*60*60*1e3)/(60*60*1e3)),n=Math.trunc((e-a*24*60*60*1e3-s*60*60*1e3)/(60*1e3)),r=Math.trunc((e-a*24*60*60*1e3-s*60*60*1e3-n*60*1e3)/1e3);console.log(r,n,s,a);const i=document.querySelector(".timer"),c=`
      <div class="timer">
  <div class="field">
    <span class="value" data-days>${a}</span>
    <span class="label">Days</span>
  </div>
  <div class="field">
    <span class="value" data-hours>${s}</span>
    <span class="label">Hours</span>
  </div>
  <div class="field">
    <span class="value" data-minutes>${n}</span>
    <span class="label">Minutes</span>
  </div>
  <div class="field">
    <span class="value" data-seconds>${r}</span>
    <span class="label">Seconds</span>
  </div>
</div>
      `;i.innerHTML=c,document.querySelector(".btn").addEventListener("click",l=>{formData[l.target.name]=l.target.value.trim(),localStorage.setItem(storageKey,JSON.stringify(formData))})}}},u=document.querySelector(".btn");u.addEventListener("click",t=>{formData[t.target.name]=t.target.value.trim(),localStorage.setItem(storageKey,JSON.stringify(formData))});m("#datetime-picker",d);
//# sourceMappingURL=1-timer.js.map
