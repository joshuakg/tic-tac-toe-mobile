import _ from "lodash";
let sqrt;

export const SquareRoot = length => {
  sqrt = Math.sqrt(length);
};

export const checkVertical = (index, board) => {
  let columnIndex = index % sqrt, // Find column index
    array = [];

  // Create column array
  for (let i = 0; i < sqrt; i++) {
    array.push(board[columnIndex + sqrt * i]);
  }

  // Check array for any null values
  if (_.includes(array, null)) return false;

  // Check if column contains winning values
  if (!_.sum(array) || _.eq(_.sum(array), sqrt)) return true;
  return false;
};

export const checkHorizontal = (index, board) => {
  let rowIndex = 0,
    tempValue = index;

  // Find row index
  while (tempValue - sqrt > -1) {
    tempValue -= sqrt;
    rowIndex++;
  }

  // Create row array
  let array = _.slice(
    board,
    [(start = rowIndex * sqrt)],
    [(end = rowIndex * sqrt + 3)]
  );

  // Check array for any null values
  if (_.includes(array, null)) return false;

  // Check if row contains winning values
  if (!_.sum(array) || _.eq(_.sum(array), sqrt)) return true;

  return false;
};

export const checkDiagonal = board => {
  let topLeft = [],
    topLeftStep = sqrt + 1,
    topRight = [],
    topRightStep = sqrt - 1;

  // Create diagonal array starting from top left to bottom right
  for (let i = 0; i < board.length; i = i + topLeftStep) {
    topLeft.push(board[i]);
  }
  // Create diagonal array starting from top right to bottom left
  for (let i = sqrt - 1; i <= board.length - sqrt; i = i + topRightStep) {
    topRight.push(board[i]);
  }

  // Check array for any null values
  if (_.includes(topRight, null) && _.includes(topLeft, null)) return false;
  if (
    !_.sum(topLeft) ||
    !_.sum(topRight) ||
    _.eq(_.sum(topLeft), sqrt) ||
    _.eq(_.sum(topRight), sqrt)
  )
    return true;

  return false;
};

export const checkForGridlock = board => {
  if (_.includes(board, null)) return false;
  return true;
};
