var calculateBMI = function() {
  var weightField = document.getElementById("weightField");
  var weight = weightField.value;
  var heightField = document.getElementById("heightField");
  var height = heightField.value;

  // PART 1: Calculate BMI and show in alert
  var bmi = weight / (height * height);
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Your BMI is " + bmi;
  var categoryDiv = document.getElementById("category");

  // PART 2: Check for health
  if (bmi < 18.5) {
    categoryDiv.innerHTML = "You are underweight plz eat more";
  } else if (bmi < 22.5) {
    categoryDiv.innerHTML = "Very good plz don't get hit by a car";
  } else if (bmi < 27.5) {
    categoryDiv.innerHTML = "Overweight";
  } else {
    categoryDiv.innerHTML = "Obese";
  }
};

//calculateBMI();
