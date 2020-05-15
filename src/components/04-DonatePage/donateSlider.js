import React, { Component } from 'react'


class Slider extends Component {

	state = {
		sliderContents: [<Slider1 />, <Slider2 />],
		x: 0
	}

	goLeft = () => { this.state.x === 0 ? this.setState({ x: -100 * (this.state.sliderContents.length - 1) }) : this.setState({ x: this.state.x + 100 }) }

	goRight = () => { this.state.x === -100 * (this.state.sliderContents.length - 1) ? this.setState({ x: 0 }) : this.setState({ x: this.state.x - 100 }) }

	render() {
		return (
			<div class="container" id="carousel_slider">
				{this.state.sliderContents.map((item, index) => {
					return <div key={index} className="slide" style={{ transform: `translateX(${this.state.x}%)`}}> {item} </div>
				})}
				<button id="goLeft" onClick={this.goLeft}><i class="arrow left"></i></button>
				<button id="goRight" onClick={this.goRight}><i class="arrow right"></i></button>
				<a href="#donateSection1"><img class="downArrow" src="https://image.flaticon.com/icons/svg/2316/2316598.svg" /></a>
			</div>
		)
	}
}

export default Slider



/*Carousel Slider 1*/
class Slider1 extends Component {

	today = () => {
		let newDate = new Date()
		let dateToday = newDate.getDate();
		let month = newDate.getMonth() + 1;
		let year = newDate.getFullYear();

		return month + "/" + dateToday + "/" + year
	}

	render() {
		return (
			<div class="slideDown">
				<div id="donateSlider_text">
					<h5>{this.today()}</h5>
					<h1>HELP DONATE TODAY</h1>
					<p>"No one has ever become poor by giving."- Anne Frank</p>
					<p>Check out the different organisations you can help support.</p>
					<a href="#donateSection1">Learn More</a>
				</div>
			</div>
		)
	}
}

/*Carousel Slider 2*/
class Slider2 extends Component {

	today = () => {
		let newDate = new Date()
		let dateToday = newDate.getDate();
		let month = newDate.getMonth() + 1;
		let year = newDate.getFullYear();

		return month + "/" + dateToday + "/" + year
	}

	render() {
		return (
			<div class="slideDown">
				<div id="donateSlider_text">
					<h5>{this.today()}</h5>
					<h1>DAILY BIBLE READINGS</h1>
					<p>Read a Verse, Get Inspired!</p>
					<a href="#donateSection2">Read a Verse</a>
				</div>
			</div>
		)
	}
}

