function caesarCipher(string,shift) {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let newString = "";

    for(i=0;i<string.length;i++) {
        index = characters.indexOf(string[i].toUpperCase());
        newIndex = (index + shift) % 26 

        if(!charIsLetter(string[i])) {
            newString += string[i];

        } else if(string[i].toUpperCase() === string[i]) {
            newString += characters[newIndex];

        } else {
            newString += characters[newIndex].toLowerCase();
        }
    }
    return newString;
}

console.log(caesarCipher('!ZzZa0b!',2))

function charIsLetter(char) {
    if(typeof char !== 'string') {
        return false;
    }

    return char.toLowerCase() !== char.toUpperCase();
}

module.exports = caesarCipher;