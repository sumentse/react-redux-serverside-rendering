import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
	componentDidMount(){
		this.props.fetchUsers();
	}

	renderUsers(){
		return this.props.users.map(user => {
			return <li key={user.id}>{user.name}</li>;
		})
	}

	render(){
		return (
			<div>
				This is the user list
				<ul>{this.renderUsers()}</ul>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {users: state.users};
}

//use for server side
function loadData(store){
	return store.dispatch(fetchUsers());
}

export default {
	loadData,
	component: connect(mapStateToProps, { fetchUsers })(UsersList)
}
