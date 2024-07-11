// Parses a string of scores into an array of score strings
function parseScores(scoresString) {
    return scoresString.split(" ");
 }
 
 // Builds an array representing score distribution across different ranges
 function buildDistributionArray(scoresArray) {
    const distribution = [0, 0, 0, 0, 0]; // Initialize distribution array for counts
 
    scoresArray.forEach(score => {
       const numScore = parseInt(score, 10); // Convert score string to integer
 
       // Increment corresponding index in distribution array based on score range
       if (numScore >= 90) {
          distribution[0]++;
       } else if (numScore >= 80) {
          distribution[1]++;
       } else if (numScore >= 70) {
          distribution[2]++;
       } else if (numScore >= 60) {
          distribution[3]++;
       } else {
          distribution[4]++;
       }
    });
 
    return distribution; // Return the completed distribution array
 }
 
 // Updates table content based on user input of scores
 function setTableContent(userInput) {
    const scoresArray = parseScores(userInput); // Parse scores from user input
    const distribution = buildDistributionArray(scoresArray); // Build distribution array
 
    // Get DOM elements for table rows
    const firstRow = document.getElementById("first-row");
    const thirdRow = document.getElementById("third-row");
 
    // Clear existing content in table rows
    firstRow.innerHTML = "";
    thirdRow.innerHTML = "";
 
    // Populate table rows with bar graphs and count numbers
    distribution.forEach((count, index) => {
       const barHeight = count * 10; // Calculate bar height (each count represents 10 pixels)
       const barDiv = `<div style="height:${barHeight}px" class="bar${index}"></div>`; // Create bar graph HTML
       firstRow.innerHTML += `<td>${barDiv}</td>`; // Add bar graph cell to first row
       thirdRow.innerHTML += `<td>${count}</td>`; // Add count number cell to third row
    });
 }
 
 // Example usage: change the argument to test different score inputs
 setTableContent("45 78 98 83 86 99 90 59");
 