import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import usersListPage from './pages/usersListPage';

export default [
	{
		...App,
		routes: [
			{
				...HomePage,
				path: '/',
				exact: true
			},
			{
				...usersListPage,
				path: '/users',
			}
		]
	}
];


