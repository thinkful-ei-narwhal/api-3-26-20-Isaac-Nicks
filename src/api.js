const baseURL = 'https://thinkful-list-api.herokuapp.com/isaac';

const getItems = () => fetch(`${baseURL}/items`);

const createItem = name => {
	const newItem = JSON.stringify({ name });

	return fetch(`${baseURL}/items`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: newItem
	});
};

const updateItem = (id, updateData) => {
	const data = JSON.stringify(updateData);

	return fetch(`${baseURL}/items/${id}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json' },
		body: data
	});
};

const deleteItem = id => {
	return fetch(`${baseURL}/items/${id}`, {
		method: 'DELETE'
	});
};

export default {
	getItems,
	createItem,
	updateItem,
	deleteItem
};
