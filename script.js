document.getElementById('calculate-btn').addEventListener('click', function() {
  var height = parseFloat(document.getElementById('height').value);
  var weight = parseFloat(document.getElementById('weight').value);

  // Validate the input values
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.getElementById('result-container').innerHTML = '<p class="error">Please enter valid positive numbers for both height and weight.</p>';
    document.getElementById('result-container').style.display = 'block';
    return;
  }

  // Calculate BMI
  var bmi = weight / (height * height);

  // Categorize BMI
  var category = '';
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 24.9) {
    category = 'Normal weight';
  } else if (bmi < 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obesity';
  }

  // Display the result
  var resultText = 'Your BMI: ' + bmi.toFixed(2) + '<br>Category: ' + category;
  document.getElementById('result-container').innerHTML = resultText;
  document.getElementById('result-container').style.display = 'block';
});
