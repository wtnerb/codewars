// solution from over a month ago
function validatePIN (pin) {
    return  !!(pin.match(/^\d{4}$/) || pin.match(/^\d{6}$/))
}

// A more recent solution. The ?: is uneeded, but since I don't want to capture the match I put them in.
function validatePIN (pin) {
    return /^\d{4}(?:\d{2})?$/.test(pin)
}


// works in console, but codewars does not like it.
// with further testing, codewars does not like string.prototype.charCodeAt
// regardless, this works without regex.
function validatePIN (pin) {
    let allNum = true;
    for (i = 0; i < pin.length; i++){
    if (pin.charCodeAt(i) > '9'.charCodeAt(0) || pin.charCodeAt(i) < '0'.charCodeAt(0)) allNum = false}
    return (pin.length === 6 || pin.length === 4) && allNum;
}