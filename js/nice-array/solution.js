function isNice(arr){
    if (arr.length === 0) return false;
    for (let x = 0; x < arr.length; x++) if (!arr.includes (arr[x] + 1) && !arr.includes(arr[x] - 1)) return false;
    return true;
  }