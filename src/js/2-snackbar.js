import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const delayValue = Number(form.elements['delay'].value);
    const stateValue = form.state.value;
    
    const promise = new Promise((resolve, reject) => {
        
        setTimeout(()=>{
            if(stateValue === 'fulfilled') {
                resolve(delayValue);
            } else {
                reject(delayValue);
            }
        }, delayValue);

    });

promise.then ((delayValue)=>{
       iziToast.success({
        message: `✅ Fulfilled promise in ${delayValue}ms`,
        position: 'topRight',
    })
}).catch(()=>{
       iziToast.error({
        message: `❌ Rejected promise in ${delayValue}ms`,
        position: 'topRight',
    })
});


}