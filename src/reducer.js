import * as actions from "./actions.js";
import { Settings } from "react-native";
import _ from "lodash";
let Player2Symbol = {}
let Player1Symbol = {}

const initialState = {
  turn: 0,
  board: [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  winner: null,
  gridLock: false
};

export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.PLAYER_TURN: {
      const { index } = action;
      const { turn } = state
      let newState = clone(state);
      newState.board[index] = turn;      
      newState.turn ? (newState.turn = 0) : (newState.turn = 1);
      return newState;
    }
    case actions.X_WIN: {
      let newState = clone(state)
      newState.winner = 1
      return newState
    }
    case actions.O_WIN: {
      let newState = clone(state)
      newState.winner = 0      
      return newState
    }
    case actions.GRID_LOCK:{
      let newState = clone(state)
      newState.gridLock = true
      return newState
    }
    case actions.RESET_STATE: {
      let newState = clone(state)
      newState = initialState
      return newState
    }
    default:
      console.log(`Unknown Action Type: ${action.type}`);
      return state;
  }
};

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
