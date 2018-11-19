import _ from "lodash";

export const returnGrid = (rowCount, columnCount) => {
  let grid = [];
  for (let i = 0; i < rowCount; i++) {
    let array = [];
    for (let j = 0; j < columnCount; j++) {
      array.push(null);
    }
    grid.push(array);
  }
  return grid;
};

export const checkVertical = (cord, board) => {
  let array = [];
  for (let i = 0; i < board.length; i++) {
    array.push(board[i][cord.x]);
  }
  if (_.includes(array, null)) return false;
  if (_.sum(array) === 0) return true;
  if (_.sum(array) === board.length) return true;
  return false;
};
export const checkHorizontal = (cord, board) => {
  let array = [];
  for (let i = 0; i < board.length; i++) {
    array.push(board[cord.y][i]);
  }
  if (_.includes(array, null)) return false;
  if (_.sum(array) === 0) return true;
  if (_.sum(array) === board.length) return true;
  return false;
};
export const checkDiagonal = board => {
  let topLeft = [],
    topRight = [];
  for (let i = 0; i < board.length; i++) {
    topLeft.push(board[i][i]);
    topRight.push(board[Math.abs(i - (board.length - 1))][i]);
  }

  if (!_.includes(topLeft, null)) {
    if (_.sum(topLeft) === 0) return true;
    if (_.sum(topLeft) === board.length) return true;
  }
  if (!_.includes(topRight, null)) {
    if (_.sum(topRight) === 0) return true;
    if (_.sum(topRight) === board.length) return true;
  }
  return false;
};

export const checkForGridlock = board => {
  let array = _.flatten(board);
  if (_.includes(array, null)) return false;
  return true;
};
