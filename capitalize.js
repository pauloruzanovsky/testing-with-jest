function capitalize(string) {
    let upperCase = string[0].toUpperCase() + string.slice(1).toLowerCase();
    return upperCase
}

module.exports = capitalize;