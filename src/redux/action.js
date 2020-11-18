import { ADD, EDIT, DELETE, CLEAR, UPDATE_EDIT } from './actionTypes';

export const addTask = (title) => {
	return {
		type: ADD,
		payload: title,
	};
};

export const editTask = (item, title, pos) => {
	return {
		type: EDIT,
		payload: { id: item.id, title: title, pos: pos },
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

export const updateEditTask = (id, title) => {
	return {
		type: UPDATE_EDIT,
		payload: { id, title },
	};
};
