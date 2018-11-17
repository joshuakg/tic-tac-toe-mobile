import _ from "lodash";

export const TOGGLE_TURN = "TOGGLE_TURN";
export const PLAYER_TURN = "PLAYER_TURN";
export const X_WIN = "X_WIN";
export const O_WIN = "O_WIN";
export const GRID_LOCK = "GRID_LOCK"
export const RESET_STATE = 'RESET_STATE'

export const playerTurn = (index, turn) => {
  return (dispatch, getState) => {
    let info = {
      index: index,
      value: turn
    };
    dispatch({ type: PLAYER_TURN, info });
    dispatch(parseCombinations());
  };
};

export const parseCombinations = () => {
  return (dispatch, getState) => {    
    let state = getState();
    let board = state.board;
    let length = Math.sqrt(board.length);
    // Total winning combinations: (length * 2) + 2

    // Parse Vertical Array's
    let verticalArrays = _.chunk(board, length);
    // Parse Horizontal Array's
    let horizontalArrays = [];
    for (let i = 0; i < verticalArrays.length; i++) {
      horizontalArrays.push([]);
      for (let j = 0; j < verticalArrays[i].length; j++) {
        horizontalArrays[i].push(verticalArrays[j][i]);
      }
    }
    // Parse diagonal arrays
    let topLeft = [];
    let topRight = [];
    for (let i = 0; i < horizontalArrays.length; i++) {
      topLeft.push(horizontalArrays[i][i]);
      topRight.push(horizontalArrays[length - 1 - i][i]);
    }
    let Diagonal = [topLeft, topRight];
    let combinations = _.concat(verticalArrays, horizontalArrays, Diagonal);
    dispatch(checkWinner(combinations));
  };
};

export const checkWinner = combinations => {
  return (dispatch, getState) => {
    let arrays = [];
    for (let i = 0; i < combinations.length; i++) {
      let tempArray = _.map(combinations[i], n => {
        if (n.value !== null) {
          return n.value;
        } else {
          return -10;
        }
      });      
      arrays.push(tempArray);
    }
    for (let i = 0; i < arrays.length; i++) {          
      if (_.sum(arrays[i]) === 0){
        dispatch({type: O_WIN})
        return
      } else if (_.sum(arrays[i]) === 3){
        dispatch({type: X_WIN})
        return
      }
    }
    let allPos = true
    for (let i = 0; i < arrays.length; i++) {          
      if (_.sum(arrays[i]) < 0){
        allPos = false
      }
    }
    if (allPos) dispatch({type: GRID_LOCK})
  };
};

export const resetState =() => {
  return (dispatch, getState) => {
    dispatch({type: RESET_STATE})
  }  
}