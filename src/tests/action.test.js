import configureStore from "redux-mock-store";
import * as actions from "../actions";
import thunkMiddleware from "redux-thunk";

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

const mockStore = configureStore([thunkMiddleware]);
const store = mockStore(initialState);

describe("Action Tests", () => {
  beforeEach(() => {
    store.clearActions();
  });

  test("Dispatches Reset State Action", () => {
    const expectedActions = [
      {
        type: actions.RESET_STATE
      }
    ];
    store.dispatch(actions.resetState());
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("Dispatches Player turn action, with board info", () => {
    const expectedActions = [
      {
        type: actions.PLAYER_TURN,
        info: {
          index: 0,
          value: 0
        }
      }
    ];
    store.dispatch(actions.playerTurn(0, 0));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("Check winner for X to win", () => {
    const expectedActions = [{ type: actions.X_WIN }];
    const combinations = [ [{value: 1}, {value: 1}, {value: 1}] ]
    store.dispatch(actions.checkWinner(combinations))
    expect(store.getActions()).toEqual(expectedActions)
  });
  test("Check winner for O to win", () => {
    const expectedActions = [{ type: actions.O_WIN }];
    const combinations = [ [{value: 0}, {value: 0}, {value: 0}] ]
    store.dispatch(actions.checkWinner(combinations))
    expect(store.getActions()).toEqual(expectedActions)
  });
  test("Check for Grid Lock", () => {
    const combinations = [ [{value: 1}, {value: 0}, {value: 1}] ]
    const expectedActions = [{ type: actions.GRID_LOCK }];
    store.dispatch(actions.checkWinner(combinations))
    expect(store.getActions()).toEqual(expectedActions)
  });
});
