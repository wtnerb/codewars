
// a one line solution
const capitalize = (s,arr) => s.split('').reduce((out, c, i) => out += arr.includes(i) ? c.toUpperCase() : c, '');

// a more readable solution
const capitalize =  (s, arr) => {
  let out = '';
  for (let i in s) out += arr.includes(parseInt(i)) 
    ? s[i].toUpperCase()
    : s[i];
  return out;
}