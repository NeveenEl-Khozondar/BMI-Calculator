var btn_calculate = document.getElementById('btn_calculate'); // equal $("#btn_calculate")
var height = document.getElementById('height');
var weight = document.getElementById('weight');
var bmi_result = document.getElementById('bmi_result');
var bmi_type = document.getElementById('bmi_type');
var btn_clear = document.getElementById('btn_clear');
var gender = document.getElementById('gender');
var age = document.getElementById('age');

var res = " " //global variable
btn_calculate.addEventListener('click', function(e)  {  //e ->Acronym for event
  e.preventDefault();
  var h = height.value  / 100;
  var w = weight.value;

  console.log(h);
  console.log(w);
  
  var bmi = w / (h * h);
  console.log(parseInt(bmi));

  bmi_result.value = parseInt(bmi); //take th bmi(The equation)as string argument and returns integer of the specified radix  and put it as value(input) inside the result 
  bmi_type.value = getResult(bmi);
  result = getResult(bmi)
  situation();
});

btn_clear.addEventListener('click', e => { // it's arrow funsction equal document.addEventListener('click', function(){})  
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


function pop(){
    
    $(".div2").show();
    $(".bt").show();


    $(".div2").click(function(){
        $(".div2").hide(); 
    });
}
function situation(){

    if(result === 'Obesity' ){
   var contentDiv = document.getElementById("popshow")
        contentDiv.textContent='';
        var subDiv=document.createElement('div');
        var a=document.createElement('a');
        var name=document.createElement('h1');
        subDiv.id='sub';
  name.textContent ="Overweight? No worries! "+ "\n" +"Here are some of the best steps to take :"+ "\n" + "1.Eat three meals and two small snacks each day."+'\n' +"2.Never skip breakfast."+ "\n" +"3.Eat x number of calories per day."+ "\n" +"4.Avoid eating after dinner1.";
  subDiv.appendChild(name);
  contentDiv.appendChild(subDiv);
    
     }  
    }
  
