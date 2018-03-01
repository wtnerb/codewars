// the sane solution that I would use anywhere remotely near production code
function mutateMyStrings(s1, s2){
  let out = s1 + '\n';
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) out += `${s2.slice(0,i+1)}${s1.slice(i+1)}\n`
    }
  return out;
}

// insane solution I never want to read/debug/put into a codebase, but is technically a one-liner.
function mutateMyStrings(s1, s2){
  return ((s1[0] !== s2[0]) ? s1 + '\n' : '' ) + s1.split('') // if first char is identical initialize empty string. Uniqueness filter later on does not have access to this initial value. This line begs for refactoring, but per above comment, I don't want to debug this.
    .map((val, ind, arr) => arr.map((v, i) => (i>ind)? v : s2[i]).join('') + '\n')// nested maps with ternary to generate string at every pivot
    .filter((current, index, array) => !array.includes(current, index + 1)) // no repeats in array
    .join(''); // the only readable part of the entire solution
}