import {
  checkVertical,
  checkHorizontal,
  checkDiagonal,
  SquareRoot,
  checkForGridlock
} from "../util";
import _ from "lodash";

let initBoard = [null, null, null, null, null, null, null, null, null];

// Test for 3x3 board
SquareRoot(9);

describe("checkDiagonal function Tests", () => {
  test("Test checkDiagonal returns true, 1 vals", () => {
    let board = initBoard;
    board[0] = 1;
    board[4] = 1;
    board[8] = 1;
    expect(checkDiagonal(board)).toEqual(true);
  });
  test("Test checkDiagonal returns true, 0 vals", () => {
    let board = initBoard;
    board[0] = 0;
    board[4] = 0;
    board[8] = 0;
    expect(checkDiagonal(board)).toEqual(true);
  });
  test("Test checkDiagonal returns false, 0 and 1 vals", () => {
    let board = initBoard;
    board[0] = 0;
    board[4] = 1;
    board[8] = 0;
    expect(checkDiagonal(board)).toEqual(false);
  });
  test("Test checkDiagonal returns false, null vals", () => {
    let board = initBoard;
    expect(checkDiagonal(board)).toEqual(false);
  });
});
describe("checkVertical function Tests", () => {
  test("Test checkVertical returns true, 1 vals", () => {
    let board = _.clone(initBoard);
    board[0] = 1;
    board[3] = 1;
    board[6] = 1;
    expect(checkVertical(3, board)).toEqual(true);
  });
  test("Test checkVertical returns true, 0 vals", () => {
    let board = _.clone(initBoard);
    board[2] = 0;
    board[5] = 0;
    board[8] = 0;
    expect(checkVertical(8, board)).toEqual(true);
  });
  test("Test checkVertical returns false, 0 and 1 vals", () => {
    let board = _.clone(initBoard);
    board[1] = 0;
    board[4] = 1;
    board[7] = 0;
    expect(checkVertical(4, board)).toEqual(false);
  });
  test("Test checkVertical returns false, null vals", () => {
    let board = _.clone(initBoard);
    expect(checkVertical(8, board)).toEqual(false);
  });
});
describe("checkHorizontal function Tests", () => {
  test("Test checkHorizontal returns true, 1 vals", () => {
    let board = _.clone(initBoard);
    board[0] = 1;
    board[1] = 1;
    board[2] = 1;
    expect(checkHorizontal(2, board)).toEqual(true);
  });
  test("Test checkHorizontal returns true, 0 vals", () => {
    let board = _.clone(initBoard);
    board[6] = 0;
    board[7] = 0;
    board[8] = 0;
    expect(checkHorizontal(8, board)).toEqual(true);
  });
  test("Test checkHorizontal returns false, 0 and 1 vals", () => {
    let board = _.clone(initBoard);
    board[3] = 0;
    board[4] = 1;
    board[5] = 0;
    expect(checkHorizontal(4, board)).toEqual(false);
  });
  test("Test checkHorizontal returns false, null vals", () => {
    let board = _.clone(initBoard);
    expect(checkHorizontal(8, board)).toEqual(false);
  });
});
describe("checkForGridlock function Tests", () => {
  test("Test checkForGridlock returns true, 1 vals", () => {
    let board = [1, 1, 0, 0, 0, 1, 1, 0, 1];
    expect(checkForGridlock(board)).toEqual(true);
  });
  test("Test checkForGridlock returns true, null vals", () => {
    let board = _.clone(initBoard);
    expect(checkForGridlock(board)).toEqual(false);
  });
  test("Test checkForGridlock returns false, single null val", () => {
    let board = [1, 1, 0, 0, 0, 1, 1, 0, null];
    expect(checkForGridlock(board)).toEqual(false);
  });
});
