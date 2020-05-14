import React, { Component } from 'react'


class Slider extends Component {

	state = {
		sliderContents: [<Global />, <Philippines />, <Search />],
		x: 0
	}

	goLeft = () => { this.state.x === 0 ? this.setState({ x: -100 * (this.state.sliderContents.length - 1) }) : this.setState({ x: this.state.x + 100 }) }

	goRight = () => { this.state.x === -100 * (this.state.sliderContents.length - 1) ? this.setState({ x: 0 }) : this.setState({ x: this.state.x - 100 }) }

	render() {
		return (
			<div class="container" id="statistics_slider">
				{this.state.sliderContents.map((item, index) => {
					return <div key={index} className="slide" style={{ transform: `translateX(${this.state.x}%)`}}> {item} </div>
				})}
				<button id="goLeft" onClick={this.goLeft}><i class="arrow left"></i></button>
				<button id="goRight" onClick={this.goRight}><i class="arrow right"></i></button>
				<a href="#newsIntro"><img class="downArrow" src="https://image.flaticon.com/icons/svg/2316/2316598.svg" /></a>
			</div>
		)
	}
}

export default Slider