function high(x){
  const wordScore = w => w.split('').reduce((score, letter) => score + letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1, 0 )
  return x.split(' ').sort((a,b) => wordScore(b) - wordScore(a))[0]
}