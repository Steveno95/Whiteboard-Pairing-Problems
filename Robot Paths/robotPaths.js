function makeBoard(n) {
    let board = [];
    for (let i = 0; i < n; i++) {
      board.push([]);
      for (let j = 0; j < n; j++) {
        board[i].push(false);
      }
    }
    board.toggle = (i, j) => {
      board[i][j] = !board[i][j];
    };
    board.hasBeenVisited = (i, j) => {
      return board[i][j];
    };
    return board;
  }
  
  function paths(n) {
    let counter = 0;
    const board = makeBoard(n);
  
    const findPaths = (i, j) => {
      if(i === n - 1 && j === n - 1) {
        counter++;
        return;
      }
      if(i < 0 || i >= n || j < 0 || j >= n){
        return;
      }
      if(board.hasBeenVisited(i, j)) {
        return;
      }
      else {
        board.toggle(i, j);
        findPaths(i, j + 1);
        findPaths(i + 1, j);
        findPaths(i, j - 1);
        findPaths(i - 1, j);
        board.toggle(i, j);
      }
    }
    findPaths(0,0);
    return counter;
  }
  
  paths(3);