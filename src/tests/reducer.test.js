import { MainReducer } from "../reducer";
import * as actions from "../actions";

describe("Main Reducer", () => {
  test("Reducer should set O as winner", () => {
		// initalize state with winner null
		const state = { winner: null };
		// set desired state with winner = 0
		const desiredState = { winner: 0 };
		// set action to be O_WIN
    const action = { type: actions.O_WIN };
    expect(MainReducer(state, action)).toEqual(desiredState);
  });

  test("Reducer should set X as winner", () => {
		// initalize state with winner null
		const state = { winner: null };
		// set desired state with winner = 1
		const desiredState = { winner: 1 };
		// set action to be X_WIN
    const action = { type: actions.X_WIN };
    expect(MainReducer(state, action)).toEqual(desiredState);
	});

	test("Reducer should set gridlock as true", () => {
		// initalize state with gridlock false
		const state = { gridLock: false };
		// set desired state with gridlock as true
		const desiredState = { gridLock: true };
		// set action to be GRID_LOCK
		const action = { type: actions.GRID_LOCK };
    expect(MainReducer(state, action)).toEqual(desiredState);
	});
	
	test("Reducer should reset state", ()=>{
		// initalize "modified state"
		const state = {}
		// set desired state to be inital state
		const desiredState = {
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
		// set action to be RESET_STATE
		const action = { type: actions.RESET_STATE }
		expect(MainReducer(state, action)).toEqual(desiredState)
	})

	test("Reducer should set correct board index value, and toggle turn", () => {
		// initalize state to board array
		const state = {
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
			]
		}
		// set desired state to be modified board
		const desiredState = {
			turn: 1,
			board: [
				{
					value: 0,
					uri: {}
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
			]
		}
		// create object with "player actions" values and grid index selected
		const info = {
			index: 0,
			value: 0
		}
		// set action to be PLAYER_TURN
		const action = {type: actions.PLAYER_TURN, info}
		expect(MainReducer(state, action)).toEqual(desiredState)
	})
});
