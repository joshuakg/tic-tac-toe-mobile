import { MainReducer } from "../reducer";
import * as actions from "../actions";

describe("Main Reducer", () => {
  test("Reducer Sets O as winner", () => {
    const state = { winner: null };
    const desiredState = { winner: 0 };
    const action = { type: actions.O_WIN };
    expect(MainReducer(state, action)).toEqual(desiredState);
  });

  test("Reducer Sets X as winner", () => {
    const state = { winner: null };
    const desiredState = { winner: 1 };
    const action = { type: actions.X_WIN };
    expect(MainReducer(state, action)).toEqual(desiredState);
	});

	test("Reducer Sets Grid lock as true", () => {
    const state = { gridLock: false };
    const desiredState = { gridLock: true };
    const action = { type: actions.GRID_LOCK };
    expect(MainReducer(state, action)).toEqual(desiredState);
	});
	
	test("Reducer resets state", ()=>{
		const state = {}
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
		const action = { type: actions.RESET_STATE }
		expect(MainReducer(state, action)).toEqual(desiredState)
	})

	test("Reducer set's correct board index value, and toggles turn", () => {
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
		const info = {
			index: 0,
			value: 0
		}
		const action = {type: actions.PLAYER_TURN, info}
		expect(MainReducer(state, action)).toEqual(desiredState)
	})
});
