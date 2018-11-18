import _ from "lodash";
import {
  checkVertical,
  checkHorizontal,
  checkDiagonal,
  SquareRoot,
  checkForGridlock
} from "./util";
export const TOGGLE_TURN = "TOGGLE_TURN";
export const PLAYER_TURN = "PLAYER_TURN";
export const X_WIN = "X_WIN";
export const O_WIN = "O_WIN";
export const GRID_LOCK = "GRID_LOCK";
export const RESET_STATE = "RESET_STATE";

export const handlePlayerAction = index => {
  return (dispatch, getState) => {
    dispatch({ type: PLAYER_TURN, index });
    const currentState = getState();
    if (currentState.moveCount > 4)
      dispatch(checkForWinner(index, currentState.board));
  };
};

const checkForWinner = (index, board) => {
  return dispatch => {
    SquareRoot(board.length);
    if (
      checkDiagonal(board) ||
      checkHorizontal(index, board) ||
      checkVertical(index, board)
    )
      dispatch({ type: board[index] ? X_WIN : O_WIN });
    else if (checkForGridlock(board))
      dispatch({type: GRID_LOCK})
  };
};

export const resetState = () => {
  return dispatch => {
    dispatch({ type: RESET_STATE });
  };
};
