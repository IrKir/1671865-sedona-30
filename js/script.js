const form = document.querySelector ('.indicate-form');

const button = document.querySelector('.indicate-close');

let indicateArrDate = form.querySelector('[name=indicate-arrival-date]');

let indicateDepDate = form.querySelector('[name=indicate-departure-date]');

let indicateAdult = form.querySelector('[name=number-adult]');

let indicateKids = form.querySelector('[name=number-kids]');

let isStorageSupport = true;

button.onclick = function() {
  form.classList.toggle('indicate-form-open');
  form.classList.toggle('indicate-form-close');
}

try {
  storageAdult = localStorage.getItem('adult');
} catch (err) {
  isStorageSupport = false;
}
try {
  storageKids = localStorage.getItem('kids');
} catch (err) {
  isStorageSupport = false;
}

form.addEventListener("submit", function (evt) {
    if (!indicateArrDate.value || !indicateDepDate.value || !indicateAdult.value) {
    evt.preventDefault();
    console.log('Введите данные');
    } else {
      if (isStorageSupport) {
      localStorage.setItem('adult', indicateAdult.value);
      localStorage.setItem('kids', indicateKids.value);
    }
  }
});



