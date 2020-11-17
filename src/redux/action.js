import { ADD, EDIT, DELETE, CLEAR, UPDATE_EDIT } from './actionTypes';

export const addTask = (title) => {
	return {
		type: ADD,
		payload: title,
	};
};

export const editTask = (itemId, title) => {
	return {
		type: EDIT,
		payload: { id: itemId, title: title },
	};
};

export const deleteTask = (itemId) => {
	return {
		type: DELETE,
		payload: itemId,
	};
};

export const clearTask = () => {
	return {
		type: CLEAR,
	};
};

export const updateEditTask = (id) => {
	return {
		type: UPDATE_EDIT,
		payload: id,
	};
};
