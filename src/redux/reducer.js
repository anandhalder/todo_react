import { ADD, EDIT, DELETE, UPDATE_EDIT, CLEAR } from './actionTypes';
import { v1 as uuid } from 'uuid';

// Defining initial state for the Redux Store !
const initialState = { tasks: [], editItem: { id: '', title: '' } };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD: {
			return {
				...state,
				tasks: [...state.tasks, { id: uuid(), title: action.payload }],
			};
		}
		case EDIT: {
			return {
				...state,
				tasks: [
					state.tasks.map((task) =>
						task.id === action.payload.id
							? (task.title = action.payload.title)
							: task
					),
				],
			};
		}
		case DELETE: {
			return {
				...state,
				tasks: state.tasks.filter((task) => task.id !== action.payload),
			};
		}
		case CLEAR: {
			return { ...state, tasks: [], editItem: { id: '', title: '' } };
		}
		case UPDATE_EDIT: {
			return { ...state, editItem: action.payload };
		}
		default:
			return state;
	}
};

export default reducer;
