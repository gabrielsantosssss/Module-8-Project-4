function calcWordFrequencies(words) {
    // Split the input string into an array of words
    let wordsArray = words.split(" ");
    
    // Initialize an object to store the word counts
    let wordCount = {};

    // Iterate over each word in the array
    for (let word of wordsArray) {
        // If the word is already in the object, increment its count
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            // Otherwise, add the word to the object with a count of 1
            wordCount[word] = 1;
        }
    }

    // Iterate over the wordCount object and print each word and its frequency
    for (let word in wordCount) {
        console.log(word + " " + wordCount[word]);
    }
}

console.log("Testing calcWordFrequencies()...");
calcWordFrequencies("hey hi Mark hi mark");

// Do NOT remove the following line:
export default calcWordFrequencies;
