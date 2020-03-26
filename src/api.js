const baseURL = 'https://thinkful-list-api.herokuapp.com/isaac';

const apiFetch = (...args) => {
	let error;
	return fetch(...args)
		.then(res => {
			if (!res.ok) {
				// Valid HTTP response but non-2xx status - let's create an error!
				error = { code: res.status };
			}

			// In either case, parse the JSON stream:
			return res.json();
		})
		.then(data => {
			// If error was flagged, reject the Promise with the error object
			if (error) {
				error.message = data.message;
				return Promise.reject(error);
			}

			// Otherwise give back the data as resolved Promise
			return data;
		});
};

const getItems = () => apiFetch(`${baseURL}/items`);

const createItem = name => {
	const newItem = JSON.stringify({ name });

	return apiFetch(`${baseURL}/items`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: newItem
	});
};

const updateItem = (id, updateData) => {
	const data = JSON.stringify(updateData);

	return apiFetch(`${baseURL}/items/${id}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json' },
		body: data
	});
};

const deleteItem = id => {
	return apiFetch(`${baseURL}/items/${id}`, {
		method: 'DELETE'
	});
};

export default {
	getItems,
	createItem,
	updateItem,
	deleteItem
};
