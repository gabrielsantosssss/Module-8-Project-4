// Event listener for when the DOM content is fully loaded
window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // Register click event handler for Convert button
   const convertButton = document.getElementById('convertButton');
   convertButton.addEventListener('click', handleConvertClick);

   // Register input event handlers for Celsius and Fahrenheit input fields
   const cInput = document.getElementById('cInput');
   const fInput = document.getElementById('fInput');
   cInput.addEventListener('input', handleCelsiusInput);
   fInput.addEventListener('input', handleFahrenheitInput);
}

// Function to handle click events on the Convert button
function handleConvertClick() {
   // Retrieve and trim values from Celsius and Fahrenheit input fields
   const cInputValue = document.getElementById('cInput').value.trim();
   const fInputValue = document.getElementById('fInput').value.trim();

   // Convert Celsius to Fahrenheit if Celsius input is not empty
   if (cInputValue !== '') {
      const celsius = parseFloat(cInputValue);
      if (!isNaN(celsius)) {
         const fahrenheit = convertCtoF(celsius); // Convert Celsius to Fahrenheit
         // Update Fahrenheit input field with converted value, trim trailing zeros
         document.getElementById('fInput').value = fahrenheit.toFixed().replace(/\.0+$/, '');
         updateWeatherImage(fahrenheit); // Update weather image based on Fahrenheit temperature
         clearErrorMessage(); // Clear any existing error message
      } else {
         displayErrorMessage(`${cInputValue} is not a number`); // Display error if Celsius input is not a number
      }
   } 
   // Convert Fahrenheit to Celsius if Fahrenheit input is not empty
   else if (fInputValue !== '') {
      const fahrenheit = parseFloat(fInputValue);
      if (!isNaN(fahrenheit)) {
         const celsius = convertFtoC(fahrenheit); // Convert Fahrenheit to Celsius
         // Update Celsius input field with converted value, trim trailing zeros
         document.getElementById('cInput').value = celsius.toFixed().replace(/\.0+$/, '');
         updateWeatherImage(fahrenheit); // Update weather image based on Fahrenheit temperature
         clearErrorMessage(); // Clear any existing error message
      } else {
         displayErrorMessage(`${fInputValue} is not a number`); // Display error if Fahrenheit input is not a number
      }
   }
}

// Function to handle input events on the Celsius input field
function handleCelsiusInput() {
   // Clear Fahrenheit input field and error message when Celsius input changes
   document.getElementById('fInput').value = '';
   clearErrorMessage();
}

// Function to handle input events on the Fahrenheit input field
function handleFahrenheitInput() {
   // Clear Celsius input field and error message when Fahrenheit input changes
   document.getElementById('cInput').value = '';
   clearErrorMessage();
}

// Function to update the weather image based on Fahrenheit temperature
function updateWeatherImage(temperatureFahrenheit) {
   const weatherImage = document.getElementById('weatherImage');

   // Update weather image source based on temperature range
   if (temperatureFahrenheit < 32) {
      weatherImage.src = 'images/cold.png';
   } else if (temperatureFahrenheit >= 32 && temperatureFahrenheit <= 50) {
      weatherImage.src = 'images/cool.png';
   } else {
      weatherImage.src = 'images/warm.png';
   }
}

// Function to convert Celsius to Fahrenheit
function convertCtoF(degreesCelsius) {
   return degreesCelsius * 9 / 5 + 32;
}

// Function to convert Fahrenheit to Celsius
function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit - 32) * 5 / 9;
}

// Function to display an error message
function displayErrorMessage(message) {
   const errorMessage = document.getElementById('errorMessage');
   errorMessage.textContent = message; // Set error message content
}

// Function to clear the error message
function clearErrorMessage() {
   const errorMessage = document.getElementById('errorMessage');
   errorMessage.textContent = ''; // Clear error message content
}
