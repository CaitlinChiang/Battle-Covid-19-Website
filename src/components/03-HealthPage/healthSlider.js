import React, { Component } from 'react'


class Slider extends Component {

	state = {
		sliderContents: [<Emergencies />, <MentalHealth />, <PhysicalHealth />],
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
				<a href="#healthResources"><img class="downArrow" src="https://image.flaticon.com/icons/svg/2316/2316598.svg" /></a>
			</div>
		)
	}
}

export default Slider

/*Carousel Slider 1*/
class Emergencies extends Component {

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
					<h1>EMERGENCY PROCEDURES</h1>
					<p>Do not hesitate reaching out to hotlines whenever you are facing an emergency.</p>
					<a href="#emergencies">Learn More</a>
				</div>
			</div>
		)
	}
}

/*Carousel Slider 2*/
class MentalHealth extends Component {

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
					<h1>MENTAL HEALTH</h1>
					<p>Mental health is especially crucial in these times. Take care of it, and your future self will be thanking you.</p>
					<a href="#mentalHealth">Learn More</a>
				</div>
			</div>
		)
	}
}

/*Carousel Slider 3*/
class PhysicalHealth extends Component {

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
					<h1>PHYSICAL HEALTH</h1>
					<p>Staying physically healthy will help you feel good in the inside, and help relieve negativity from your system.</p>
					<a href="#physicalHealth">Learn More</a>
				</div>
			</div>
		)
	}
}

