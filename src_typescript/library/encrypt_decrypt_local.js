function decrypt25 (input) {
    return atob(input);
}

function encrypt25 (input) {
    return btoa(input);
}

module.exports = {
    decrypt25,
    encrypt25
};
