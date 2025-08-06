function removeDuplicates(input) {
    let newWord = "";
    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        if (newWord.includes(char)) {
            newWord += char;
        }
    }
    return newWord;
}
console.log(removeDuplicates("banana"));
console.log(removeDuplicates("hello world"));
export {};
