import configureStore from "redux-mock-store";
import * as actions from "../actions";
import thunkMiddleware from "redux-thunk";

// inital application state
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

// create mock store and apply middle ware
const mockStore = configureStore([thunkMiddleware]);
// set mock store equal to store and initalize the state
const store = mockStore(initialState);

describe("Action Tests", () => {
  beforeEach(() => {
    // clears the stored actions for clearer testing.
    store.clearActions();
  });

  test("Action should dispatch Reset State Action", () => {
    // Expected type dispatched RESET_STATE
    const expectedActions = [
      {
        type: actions.RESET_STATE
      }
    ];
    // dispatch resetState action
    store.dispatch(actions.resetState());
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("Action should dispatch Player turn action, with board info", () => {
    // Expected type dispatched PLAYER_TURN
    const expectedActions = [
      {
        type: actions.PLAYER_TURN,
        info: {
          index: 0,
          value: 0
        }
      }
    ];
    // dispatch action
    store.dispatch(actions.playerTurn(0, 0));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("Action should check winner for X to win", () => {
    // Expected type dispatched X_WIN
    const expectedActions = [{ type: actions.X_WIN }];
    // array of objects that mock board combinations values
    const combinations = [ [{value: 1}, {value: 1}, {value: 1}] ]
    // dispatch action
    store.dispatch(actions.checkWinner(combinations))
    expect(store.getActions()).toEqual(expectedActions)
  });
  
  test("Action should check winner for O to win", () => {
    // Expected type dispatched O_WIN
    const expectedActions = [{ type: actions.O_WIN }];
    // array of objects that mock board combinations values
    const combinations = [ [{value: 0}, {value: 0}, {value: 0}] ]
    // dispatch action
    store.dispatch(actions.checkWinner(combinations))
    expect(store.getActions()).toEqual(expectedActions)
  });

  test("Action should check for Grid Lock", () => {
    // Expected type dispatched GRID_LOCK
    const expectedActions = [{ type: actions.GRID_LOCK }];
    // array of objects that mock board combinations values
    const combinations = [ [{value: 1}, {value: 0}, {value: 1}] ]
    // dispatch action
    store.dispatch(actions.checkWinner(combinations))
    expect(store.getActions()).toEqual(expectedActions)
  });

  // test("Check for correct possible combinations parsing", () => {
    // store.dispatch(actions.parseCombinations())
    // console.log(store.getActions())
    // expect(store.getActions()).toEqual(expectedActions)
  // })
});
