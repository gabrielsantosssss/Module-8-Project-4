This JavaScript code is designed to parse a string of scores, compute their distribution across different ranges, and dynamically update an HTML table to visualize the distribution using bar graphs.
parseScores(scoresString)
Description: Parses a string of scores into an array of score strings.
scoresString: A string containing scores separated by spaces.
Returns:
An array of score strings.
buildDistributionArray(scoresArray)
Description: Builds an array representing the distribution of scores across predefined ranges.
scoresArray: An array of score strings.
An array (distribution) where each index corresponds to a score range:
Index 0: Scores >= 90
Index 1: Scores >= 80 and < 90
Index 2: Scores >= 70 and < 80
Index 3: Scores >= 60 and < 70
Index 4: Scores < 60
setTableContent(userInput)
Updates the HTML content of a table with bar graphs and count numbers representing the score distribution.
