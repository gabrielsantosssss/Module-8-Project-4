// Event listener when the DOM content is fully loaded
window.addEventListener("DOMContentLoaded", function () {
    // Event listener for the "Fetch Quotes" button click
    document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {
       // Get values from topic and count drop-downs
       const topicDropdown = document.querySelector("#topicSelection");
       const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
       const countDropdown = document.querySelector("#countSelection");
       const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
 
       // Call fetchQuotes function with selected topic and count
       fetchQuotes(selectedTopic, selectedCount);
    });
 });
 
 // Function to fetch quotes based on topic and count
 function fetchQuotes(topic, count) {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json'; // Set response type to JSON
    xhr.addEventListener('load', responseReceivedHandler); // Event listener for when response is received
 
    // Construct URL with topic and count parameters
    const url = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;
    xhr.open('GET', url); // Open a GET request to the specified URL
    xhr.send(); // Send the request
 }
 
 // Handler function for when the XMLHttpRequest response is received
 function responseReceivedHandler() {
    const quotesDiv = document.querySelector("#quotes"); // Get the quotes container div
    const response = this.response; // Get the JSON response from the XMLHttpRequest
 
    // Check if there's an error in the response
    if (response.error) {
       quotesDiv.innerHTML = response.error; // Display the error message in the quotes container
    } else {
       let html = "<ol>"; // Start an ordered list for the quotes
       // Iterate through each quote in the response and create list items
       for (let i = 0; i < response.length; i++) {
          html += `<li>${response[i].quote} - ${response[i].source}</li>`; // Format each quote with its source
       }
       html += "</ol>"; // Close the ordered list
       quotesDiv.innerHTML = html; // Display the formatted quotes in the quotes container
    }
 }
 