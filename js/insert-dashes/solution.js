function insertDash(num) {
    return num.toString().split('').reduce((accum, curr, ind, arr) => accum 
        += (curr%2 && arr[ind+1]%2) ? curr + '-' : curr, '' );
  }