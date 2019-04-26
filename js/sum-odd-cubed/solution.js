const cubeOdd = arr => arr.filter(x => typeof x !== typeof 5).length ? undefined
  :arr.filter(x => x%2).reduce((accumulator, val) => accumulator + val*val*val, 0);

  //I saw an explanation in a video on youtube about automatic semicolon insertion. The speaker claimed that insertion happens by checking at end of line to see if the next line of code is a valid statement by itself. If it is, the semicolon gets inserted. I'm sure there is more to it, but it lets me split a ternary like this for readability.