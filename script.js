// Get references to the DOM elements
const calculateBtn = document.getElementById("calculate-btn");
const resultContainer = document.getElementById("result-container");

// Function to calculate BMI
function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    resultContainer.innerHTML = "<p class='error'>Please enter valid height and weight values.</p>";
    return;
  }

  const bmi = weight / (height * height);
  let bmiCategory = '';

  if (bmi < 18.5) {
    bmiCategory = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = "Overweight";
  } else {
    bmiCategory = "Obese";
  }

  resultContainer.innerHTML = `
    <h3>Your BMI: ${bmi.toFixed(2)}</h3>
    <p>Category: <strong>${bmiCategory}</strong></p>
  `;
}

// Add event listener to the button
calculateBtn.addEventListener("click", calculateBMI);
