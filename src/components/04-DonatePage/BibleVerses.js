import React, { Component } from 'react'


class Verse extends Component {

	state = {
		reference: "",
		bookname: "",
		chapter: "",
		verse: "",
		text: "",

		displayVerse: false
	}

	getChosenVerse = async (event) => {
		event.preventDefault()
		const book = event.target.elements.book.value
		const chapter = event.target.elements.chapter.value
		const verse = event.target.elements.verse.value
		const bibleverse_call = await fetch(`https://bible-api.com/${book}+${chapter}:${verse}`)
		const bibleverse = await bibleverse_call.json()
		try { 
			this.setState({
				reference: bibleverse.reference,
				bookname: bibleverse.book_name,
				chapter: bibleverse.chapter,
				verse: bibleverse.verse,
				text: bibleverse.text,

				displayVerse: true
			})
		} catch {
			alert('We are sorry, but we could not find the verse that you were looking for.')
		}
	}

	clear = (event) => {
		event.preventDefault()
		this.setState({ displayVerse: false })
		document.getElementById('versesForm').reset()
	}

	render() {
		return (
			<div>
				<div id="verseText">
					<h1>Read a Verse, Get Inspired!</h1>
				</div>
				<div id="retrieve_verse">
					<form onSubmit={this.getChosenVerse} autocomplete="off" id="versesForm">
						<input type="text" name="book" placeholder="Book" />
						<input type="integer" name="chapter" placeholder="Chapter" />
						<p> : </p>
						<input type="integer" name="verse" placeholder="Verse" />
						<div id="verseTextButtons">
							<button class="ripple">Search</button>
							<button onClick={this.clear} class="ripple">Clear</button>
						</div>
					</form>
					{this.state.displayVerse ? 
						<div class="slideUp" id="display_verse">
							<h3>{this.state.reference}</h3>
							<p>{this.state.text}</p>
						</div>
					: <p id="warning">(May take a short while to load.)</p>}
				</div>
			</div>
		)
	}
}

export default Verse