import React, { Component } from 'react'


class Slider extends Component {

	state = {
		sliderContents: [Emergencies(), MentalHealth(), PhysicalHealth()],
		x: 0
	}

	goLeft = () => { this.state.x === 0 ? this.setState({ x: -100 * (this.state.sliderContents.length - 1) }) : this.setState({ x: this.state.x + 100 }) }

	goRight = () => { this.state.x === -100 * (this.state.sliderContents.length - 1) ? this.setState({ x: 0 }) : this.setState({ x: this.state.x - 100 }) }

	render() {
		return (
			<div class="container" id="health_slider">
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



/*Emergencies*/
function Emergencies() {
	return (
		<div id="caption">
			<h1>Do not hesitate reaching out to hotlines whenever you are facing an emergency.</h1>
			<button><a href="#emergencies">Resources</a></button>
		</div>
	)
}

/*Mental Health*/
function MentalHealth() {
	return (
		<div id="caption">
			<h1>Mental health is especially crucial in these times. Take care of it, and your future self will be thanking you.</h1>
			<button><a href="#mentalHealth">Resources</a></button>
		</div>
	)
}

/*Physical Health*/
function PhysicalHealth() {
	return (
		<div id="caption">
			<h1>Staying physically healthy will help you feel good in the inside, and help relieve negativity from your system.</h1>
			<button><a href="#physicalHealth">Resources</a></button>
		</div>
	)
}