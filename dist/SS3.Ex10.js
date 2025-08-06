function hasDuplicateChars(word) {
    const charSet = new Set();
    for (let char of word) {
        if (charSet.has(char)) {
            return true;
        }
        charSet.add(char);
    }
    return false;
}
function findLongestUniqueWord(sentence) {
    const words = sentence.split(" ");
    let longest = "";
    for (let word of words) {
        if (!hasDuplicateChars(word) && word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
const sentence = "hello world apple banana orange pumpkin cucumber";
const result = findLongestUniqueWord(sentence);
console.log(result); // output: "orange"
export {};
