var btn_calculate = document.getElementById('btn_calculate');
var height = document.getElementById('height');
var weight = document.getElementById('weight');
var bmi_result = document.getElementById('bmi_result');
var bmi_type = document.getElementById('bmi_type');
var btn_clear = document.getElementById('btn_clear');
var gender = document.getElementById('gender');
var age = document.getElementById('age');


btn_calculate.addEventListener('click', e => { // it's arrow funsction equal document.addEventListener('click', function(){})
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

var getResult = (bmi) => {
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
