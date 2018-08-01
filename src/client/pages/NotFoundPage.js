import React from 'react';

const NotFoundPage = ({staticContext={}})=>{

	staticContext.notFound = true;

	return (
		<div style={{marginTop: '200px'}}>
			<h2 className="center-align">Oooops Not Found</h2>
		</div>	
	);
};

export default {
	component: NotFoundPage
};