function removeZeros(arr) {
    let numZero = 0;
    for (let i = arr.length - 1; i >= 0; i--){
        if (arr[i] == 0){
            let zero = arr[i]
            let j = i;
            numZero++;
            for (j; j < arr.length - numZero; j++){
                arr[j] = arr [j + 1];
            }
            arr[j] = zero;
        } 
    }
    return arr;
}