//first solution. Did this in 20 seconds before whiteboarding. This can't really count.
function fixTheMeerkat(arr) {
    return arr.reverse();
}

//second solution.This one is more intersting, though it only work with an array that contains no 'falsy' values.
function fixTheMeerkat(arr) {
    let out = [];
    while (arr[0]) out.push(arr.pop());
    return out;
}

//demonstrating a way to solve this using forEach because a classmate was curious.
function fixTheMeerkat(arr) {
    let out = [];
    arr.forEach((x,y) => out[arr.length - 1 - y] = x);
    return out;
}