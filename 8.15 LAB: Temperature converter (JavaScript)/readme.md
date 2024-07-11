This web application allows users to convert temperatures between Celsius and Fahrenheit. It includes features such as real-time conversion, updating a weather image based on the converted temperature, and error handling for invalid input.
Conversion Buttons: Users can convert temperatures by clicking the "Convert" button after entering a value in either the Celsius or Fahrenheit input field.
Real-time Conversion: The application updates the opposite temperature field as soon as valid input is detected in the active field.
Weather Image Update: Based on the converted Fahrenheit temperature, a weather image updates to reflect whether it's cold, cool, or warm.
The JavaScript code defines functions for handling input events, converting temperatures, updating the weather image, and displaying error messages. Here’s an overview of the key functions:
domLoaded: Registers event listeners for input fields and the convert button when the DOM is fully loaded.
handleConvertClick: Converts temperatures based on user input and updates the corresponding input field and weather image.
handleCelsiusInput and handleFahrenheitInput: Handle input events and clear the opposite input field and error message.
updateWeatherImage: Updates the weather image based on the converted Fahrenheit temperature.
convertCtoF and convertFtoC: Functions to convert temperatures between Celsius and Fahrenheit.
displayErrorMessage and clearErrorMessage: Functions to display and clear error messages based on user input.