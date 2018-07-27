import React from 'react';

const Home = () => {
	return (
		<div className="center-align" style={{marginTop: '200px'}}>
			<h3>Welcome</h3>
			<p>You are at the home page</p>
			<button className="btn" onClick={()=>console.log('works')}>Console Log</button>
		</div>
	)
};

export default {
	component: Home
};