Fetch quotes from a remote server using XMLHttpRequest.
Display fetched quotes dynamically on the webpage.
Handle errors if there are issues with fetching or displaying quotes.
Contains the HTML structure and elements including dropdowns for selecting topic and count, a button to fetch quotes, and a div to display fetched quotes.Event Listener  Listens for the DOMContentLoaded event to ensure the DOM is fully loaded before executing.
Fetch Quotes Button Adds a click event listener to the "Fetch Quotes" button. On click, it retrieves the selected topic and count from dropdowns, then calls the `fetchQuotes` function.
`fetchQuotes(topic, count)` Function**: Uses XMLHttpRequest to make a GET request to a remote server (`https://wp.zybooks.com/quotes.php`) with parameters `topic` and `count`.
-`responseReceivedHandler()` Function: Handles the response when quotes are received. If successful, formats the quotes into HTML list items and displays them in the quotes container (`#quotes`). If there's an error, displays the error message instead.
