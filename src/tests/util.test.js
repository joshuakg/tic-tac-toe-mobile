import {
  checkVertical,
  checkHorizontal,
  checkDiagonal,
  SquareRoot,
  checkForGridlock
} from "../util";
import _ from "lodash";

let initBoard = [[null, null, null], [null, null, null], [null, null, null]];

describe("checkDiagonal function Tests", () => {
  test("Test checkDiagonal returns true, 1 vals", () => {
    let board = _.cloneDeep(initBoard);
    board[0][0] = 1;
    board[1][1] = 1;
    board[2][2] = 1;
    expect(checkDiagonal(board)).toEqual(true);
  });
  test("Test checkDiagonal returns true, 0 vals", () => {
    let board = _.cloneDeep(initBoard);
    board[0][0] = 0;
    board[1][1] = 0;
    board[2][2] = 0;
    expect(checkDiagonal(board)).toEqual(true);
  });
  test("Test checkDiagonal returns false, 0 and 1 vals", () => {
    let board = _.cloneDeep(initBoard);
    board[0][0] = 0;
    board[1][1] = 1;
    board[2][2] = 0;
    expect(checkDiagonal(board)).toEqual(false);
  });
  test("Test checkDiagonal returns false, null vals", () => {
    let board = _.cloneDeep(initBoard);
    expect(checkDiagonal(board)).toEqual(false);
  });
});
describe("checkVertical function Tests", () => {
  test("Test checkVertical returns true, 1 vals", () => {
    let board = _.cloneDeep(initBoard);
    board[0][0] = 1;
    board[1][0] = 1;
    board[2][0] = 1;
    let cord = {
      x: 0,
      y: 1
    };
    expect(checkVertical(cord, board)).toEqual(true);
  });
  test("Test checkVertical returns true, 0 vals", () => {
    let board = _.cloneDeep(initBoard);
    board[0][2] = 0;
    board[1][2] = 0;
    board[2][2] = 0;
    let cord = {
      x: 2,
      y: 2
    };
    expect(checkVertical(cord, board)).toEqual(true);
  });
  test("Test checkVertical returns false, 0 and 1 vals", () => {
    let board = _.cloneDeep(initBoard);
    board[0][1] = 0;
    board[0][1] = 1;
    board[0][1] = 0;
    let cord = {
      x: 1,
      y: 0
    };
    expect(checkVertical(cord, board)).toEqual(false);
  });
  test("Test checkVertical returns false, null vals", () => {
    let board = _.cloneDeep(initBoard);
    let cord = {
      x: 1,
      y: 2
    };
    expect(checkVertical(cord, board)).toEqual(false);
  });
});
describe("checkHorizontal function Tests", () => {
  test("Test checkHorizontal returns true, 1 vals", () => {
    let board = _.cloneDeep(initBoard);
    board[0][0] = 1;
    board[0][1] = 1;
    board[0][2] = 1;
    let cord = {
      x: 2,
      y: 0
    };
    expect(checkHorizontal(cord, board)).toEqual(true);
  });
  test("Test checkHorizontal returns true, 0 vals", () => {
    let board = _.cloneDeep(initBoard);
    board[2][0] = 0;
    board[2][1] = 0;
    board[2][2] = 0;
    let cord = {
      x: 1,
      y: 2
    };
    expect(checkHorizontal(cord, board)).toEqual(true);
  });
  test("Test checkHorizontal returns false, 0 and 1 vals", () => {
    let board = _.cloneDeep(initBoard);
    board[1][0] = 0;
    board[1][1] = 1;
    board[1][2] = 0;
    let cord = {
      x: 1,
      y: 1
    };
    expect(checkHorizontal(cord, board)).toEqual(false);
  });
  test("Test checkHorizontal returns false, null vals", () => {
    let board = _.cloneDeep(initBoard);
    let cord = {
      x: 1,
      y: 2
    };
    expect(checkHorizontal(cord, board)).toEqual(false);
  });
});
describe("checkForGridlock function Tests", () => {
  test("Test checkForGridlock returns true", () => {
    let board = [[1, 1, 0], [0, 0, 1], [1, 0, 1]];
    expect(checkForGridlock(board)).toEqual(true);
  });
  test("Test checkForGridlock returns false, null vals", () => {
    let board = _.cloneDeep(initBoard);
    expect(checkForGridlock(board)).toEqual(false);
  });
  test("Test checkForGridlock returns false, single null val", () => {
    let board = [[1, 1, 0], [0, 0, 1], [1, 0, null]];
    expect(checkForGridlock(board)).toEqual(false);
  });
});
