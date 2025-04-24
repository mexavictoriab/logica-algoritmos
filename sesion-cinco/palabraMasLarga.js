function findLongestWord(text) {

    const words = text.split(' ');

    let longestWord = '';

    for (let i = 0; i < words.length; i++) {
        const cleanWord = words[i].replace(/[.,!?;:()]/g, '');

        if (cleanWord.length > longestWord.length) {
            longestWord = cleanWord;
        }
    }

    return longestWord;
}

const ejemplo = "El dos de febrero se comen tamales";
console.log(findLongestWord(ejemplo)); 