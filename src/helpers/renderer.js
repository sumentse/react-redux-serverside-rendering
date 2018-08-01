import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import Routes from '../client/Routes';
import { Helmet } from 'react-helmet';

export default (req, store, context) => {
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={context}>
				<div>{renderRoutes(Routes)}</div>
			</StaticRouter>
		</Provider>
	);

	const helmet = Helmet.renderStatic();

	return `
		<html>
			<head>
				${helmet.title.toString()}
				${helmet.meta.toString()}
			  	<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
			    <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet">
			</head>
			<body>	
				<div id="root">${content}</div>
				<script>
					window.INITIAL_STATE = ${serialize(store.getState())}
				</script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
				<script src="bundle.js"></script>
			</body>
		</html>	
	`;
};