// Get elements
const form = document.getElementById("bmi-form");
const resetButton = document.getElementById("reset-btn");
const resultContainer = document.getElementById("result-container");
const bmiResult = document.getElementById("bmi-result");
const category = document.getElementById("category");

// Event listener for BMI calculation
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get weight and height from input fields
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters

  // Calculate BMI
  const bmi = (weight / (height * height)).toFixed(2);

  // Display BMI result
  bmiResult.textContent = `Your BMI is: ${bmi}`;

  // Determine BMI category and apply styling
  let bmiCategory = "";
  let color = "";

  if (bmi < 18.5) {
    bmiCategory = "Underweight";
    color = "blue";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiCategory = "Normal weight";
    color = "green";
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiCategory = "Overweight";
    color = "orange";
  } else {
    bmiCategory = "Obese";
    color = "red";
  }

  category.textContent = bmiCategory;
  category.style.color = color;

  resultContainer.style.display = "block"; // Show result
});

// Event listener for reset button
resetButton.addEventListener("click", function() {
  // Reset input fields
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";

  // Hide the result and reset the category
  resultContainer.style.display = "none";
  category.textContent = "";
});
