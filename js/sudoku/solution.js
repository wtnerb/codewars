function sudoku(puzzle) {

    sud = {p: puzzle,
        boxIter: function (row, col, func) {
            const boxRow = Math.floor(row/3);
            const boxCol = Math.floor(col/3);
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) func(this.p[3 * boxRow + i][3*boxCol + j]);
            }
        },

        legalOptions: function (row, col){
            let options = [];
            let forbidden = [];
            this.p[row].filter(x => x !== 0).forEach(x => forbidden.push(x));
            p.filter(x => x[row] !== 0).forEach(x => forbidden.push(x));
            this.boxIter(row, col, x => {if (x) forbidden.push(x)});
            // buildBoxArray(row, col).filter(x=> x!== 0).forEach(x=> forbidden.push(x));
            for (let i = 1; i < 10; i ++) if (!forbidden.includes(i)) options.push(i);
            return options;
        }
    }
    function checkRow (r) {
      let allowed = []
      for (let i = 0; i < 9; i++) if (r[i] === 0) {
        if (p[r][i] === 0) allowed[i] =  [];
        else allowed[i] = legalOptions(r, i);
      }
      for (let i = 1; i < 10; i++){
          if (allowed.filter(x => x.includes (i)).length == 1) {
              var place = allowed.findIndex(x=>x.includes(i));
              p[r,place] = i;
            }
        }
    }

    function legalOptions (row, col)
    var prev = []
    while (prev != p){
        prev = p;
        for (let iter = 0; iter < p.length; iter ++) checkRow(iter);
    }
    return p;
  }

const puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]];