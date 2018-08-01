import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import usersListPage from './pages/usersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';
import Test from './pages/Test';

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
				...AdminsListPage,
				path: '/admins'
			},
			{
				...usersListPage,
				path: '/users',
			},
			{
				...Test,
				path: '/test'
			},
			{
				...NotFoundPage
			}
		]
	}
];


