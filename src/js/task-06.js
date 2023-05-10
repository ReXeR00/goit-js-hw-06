const inputEl = document.querySelector('#validation-input');

const onInputBlur = () => {
  const requiredLength = Number(inputEl.dataset.length);
  const inputLength = inputEl.value.length;

  if (inputLength === requiredLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
};

inputEl.addEventListener('blur', onInputBlur);