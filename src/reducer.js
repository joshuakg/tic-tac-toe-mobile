import * as actions from "./actions.js";
import { Settings } from "react-native";
import _ from "lodash";
import Player1Symbol from "./assets/O.png";
import Player2Symbol from "./assets/X.png";

const initialState = {
  turn: 0,
  board: [
    {
      value: null,
      uri: null
    },
    {
      value: null,
      uri: null
    },
    {
      value: null,
      uri: null
    },
    {
      value: null,
      uri: null
    },
    {
      value: null,
      uri: null
    },
    {
      value: null,
      uri: null
    },
    {
      value: null,
      uri: null
    },
    {
      value: null,
      uri: null
    },
    {
      value: null,
      uri: null
    }
  ],
  winner: null,
  gridLock: false
};

export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.PLAYER_TURN: {
      const { info } = action;
      let newState = clone(state);
      newState.board[info.index].value = info.value;
      info.value
        ? (newState.board[info.index].uri = Player2Symbol)
        : (newState.board[info.index].uri = Player1Symbol);
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
      console.log(newState)
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
