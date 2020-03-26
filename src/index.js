import $ from 'jquery';

import shoppingList from './shopping-list';
import store from './store';
import api from './api';

import './index.css';

const main = function() {
	api
		.getItems()
		.then(res => res.json())
		.then(items => {
			items.forEach(item => store.addItem(item));
			shoppingList.render();
		});

	shoppingList.bindEventListeners();
	shoppingList.render();
};

$(main);
