const btn_calculate = document.querySelector('#btn_calculate');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const bmi_result = document.querySelector('#bmi_result');
const bmi_type = document.querySelector('#bmi_type');
const btn_clear = document.querySelector('#btn_clear');
const gender = document.querySelector('#gender');
const age = document.querySelector('#age');


btn_calculate.addEventListener('click', e => {
  e.preventDefault();
  var h = height.value  / 100;
  var w = weight.value;
  console.log(h);
  console.log(w);
  
  var bmi = w / (h * h);
  console.log(parseInt(bmi));

  bmi_result.value = parseInt(bmi);
  bmi_type.value = getResult(bmi);
});

btn_clear.addEventListener('click', e => {
  e.preventDefault();

  height.value = '';
  weight.value = '';
  gender.value = '';
  age.value = '';
  bmi_result.value = '';
  bmi_type.value = '';
});

const getResult = (bmi) => {
  if (bmi >= 30) {
    return 'Obesity';
  } else if (bmi >= 25 && bmi <= 29.9) {
    return 'Overweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return 'Normal weight';
  } else if (bmi < 18.5) {
    return 'Underweight';
  }
};
