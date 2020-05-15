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
		if (book.trim() !== "" && chapter.trim() !== "" && verse.trim() !== "") {
			this.setState({
				reference: bibleverse.reference,
				bookname: bibleverse.book_name,
				chapter: bibleverse.chapter,
				verse: bibleverse.verse,
				text: bibleverse.text,

				displayVerse: true
			})
		} else {
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
			<div class="fade-in">
				<div id="verseText">
					<h2>Daily Bible Readings</h2>
					<p>Read a Verse, Get Inspired!</p>
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