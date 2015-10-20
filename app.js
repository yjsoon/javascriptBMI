$(function() {

  $('#calculateButton').on("click", function(e) {
    calculateBMI();
  });

});

var calculateBMI = function() {
  var weightField = $("#weightField");
  var weight = weightField.val() * 1.0;
  var heightField = $("#heightField");
  var height = heightField.val() * 1.0;

  // PART 1: Calculate BMI and show in alert
  var bmi = weight / (height * height);
  var resultDiv = $("#result");
  resultDiv.html("Your BMI is " + bmi);
  var categoryDiv = $("#category");

  // PART 2: Check for health
  if (bmi < 18.5) {
    categoryDiv.html("You are underweight plz eat more");
  } else if (bmi < 22.5) {
    categoryDiv.html("Very good plz don't get hit by a car");
  } else if (bmi < 27.5) {
    categoryDiv.html("Overweight");
  } else {
    categoryDiv.html("Obese");
  }
};

//calculateBMI();
