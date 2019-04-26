//regex
function disemvowel(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

//functional style
function disemvowel(str) {
    const vowels = ['a','A','e','E','i','I','o','O','U','u'];
    return str.split('').filter(letter => !vowels.includes(letter)).join('');
}

//basic tools
function disemvowel(str) {
    let out = ''

    let isNotAVowel = character => {
      const vowels = ['a','A','e','E','i','I','o','O','U','u'];
      for (let i = 0; i < vowels.length; i++) if (character == vowels[i]) return false;
    return true;
    }

    for (let ii = 0; ii < str.length; ii++) if (isNotAVowel(str[ii])) out += str[ii];
    return out;
}