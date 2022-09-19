function reverse(string) {
    let reversed = [];
    for(i=string.length-1; i>=0; --i) {
        reversed.push(string[i]);
    }
    return reversed.join('');
}

module.exports = reverse;