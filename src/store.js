const items = [];
const hideCheckedItems = false;
let error = null;

function findById(id) {
	return this.items.find(item => item.id === id);
}

function addItem(itemName) {
	this.items.push(itemName);
}

function findAndUpdate(id, newData) {
	const currentItem = this.findById(id);
	Object.assign(currentItem, newData);
}

function findAndDelete(id) {
	this.items = this.items.filter(item => item.id !== id);
}

function toggleCheckedFilter() {
	this.hideCheckedItems = !this.hideCheckedItems;
}

const setError = error => (this.error = error);

export default {
	items,
	hideCheckedItems,
	findById,
	addItem,
	findAndUpdate,
	findAndDelete,
	toggleCheckedFilter,
	error,
	setError
};
