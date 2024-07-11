This JavaScript function calculates and prints the frequency of each word in a given string. It splits the input string into individual words, counts the occurrences of each word, and outputs each word along with its frequency to the console. The `calcWordFrequencies(words)` function takes a single parameter:
`words`: A string containing words separated by spaces.
Splitting Words Use the `split(" ")` method to create an array of words from the input string.
Counting Frequencies Use an object (`wordCount`) to store each word as a key and its frequency as the corresponding value. Iterate through the array of words, updating the frequency count in `wordCount` for each word encountered.
Output Iterate through `wordCount` to log each word and its frequency to the console.
