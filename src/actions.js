import _ from "lodash";
import {
  checkVertical,
  checkHorizontal,
  checkDiagonal,
  checkForGridlock,
  returnGrid
} from "./util";
export const TOGGLE_TURN = "TOGGLE_TURN";
export const PLAYER_TURN = "PLAYER_TURN";
export const X_WIN = "X_WIN";
export const O_WIN = "O_WIN";
export const GRID_LOCK = "GRID_LOCK";
export const RESET_STATE = "RESET_STATE";
export const CREATE_GRID = "CREATE_GRID";

export const handlePlayerAction = (x, y) => {
  return (dispatch, getState) => {
    let cord = {
      x: x,
      y: y
    };
    dispatch({ type: PLAYER_TURN, cord });
    const currentState = getState();
    if (currentState.moveCount > 4)
      dispatch(checkForWinner(cord, currentState.board));
  };
};

const checkForWinner = (cord, board) => {
  return dispatch => {
    if (
      checkDiagonal(board) ||
      checkHorizontal(cord, board) ||
      checkVertical(cord, board)
    )
      dispatch({ type: board[cord.y][cord.x] ? X_WIN : O_WIN });
    else if (checkForGridlock(board)) dispatch({ type: GRID_LOCK });
  };
};

export const resetState = () => {
  return dispatch => {
    dispatch({ type: RESET_STATE });
  };
};
