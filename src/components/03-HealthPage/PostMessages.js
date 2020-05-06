import React, { Component, useState, useEffect } from 'react'
import './firebaseConfig'
import * as firebase from 'firebase'


class Messages extends Component {

	state = {
		statements: [],
		content: ''
	}

	componentDidMount = async () => {
		firebase.database().ref('messages').on('value', snapshot => {
			let statements = []
			snapshot.forEach((snap) => {
				statements.push(snap.val())
			})
			this.setState({ statements })
		})
	}

	handleChange = (event) => {
		this.setState({ content: event.target.value })
	}

	handleSubmit = async (event) => {
		event.preventDefault()
		const confirmation = window.confirm('Your statement will be permanently displayed for everyone to see. Are you sure you would not like to make anymore changes?')
		if (confirmation && this.state.content.trim() !== "") {
			await firebase.database().ref('messages').push({
				content: this.state.content
			})
			this.setState({ content: '' })
		} else {
			this.setState({ content: '' })
		}
	}

	clear = (event) => {
		event.preventDefault()
		this.setState({ content: '' })
	}

	render() {
		const Statements = this.state.statements.map(statement => <p>{statement.content}</p>)
		
		return (	
			<div>
				<form onSubmit={this.handleSubmit} autocomplete="off" id="affirmationsForm">
					<input onChange={this.handleChange} value={this.state.content} type="text" name="statement" placeholder="Write Something Positive!"/>
					<div class="messages_buttons">
						<button class="ripple">Add</button>
						<button onClick={this.clear} class="ripple">Clear</button>
					</div>
				</form>
				
				<div class="overflow-container">
					<div id="display_statements" class="slideDown">
						{Statements}
					</div>
				</div>
			</div>
		)
	}
}

export default Messages