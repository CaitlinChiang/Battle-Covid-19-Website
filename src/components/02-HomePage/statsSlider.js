import React, { useState } from 'react'
import Global from './globalStats'
import Philippines from './phStats'
import Search from './searchStats'


function Slider() {
	
	let sliderContents = [<Global />, <Philippines />, <Search />]
	const [x, setX] = useState(0)

	const goLeft = () => {
		x === 0 ? setX(-100 * (sliderContents.length - 1)) : setX(x + 100)
	}

	const goRight = () => {
		x === -100 * (sliderContents.length - 1) ? setX(0) : setX(x - 100)
	}

	return (
		
			<div class="container" id="statistics_slider">
				{sliderContents.map((item, index) => {
					return (
						<div key={index} className="slide" style={{ transform: `translateX(${x}%)`}}>
							{item}
						</div>
					)
				})}
				<button style={{ background: `transparent` }} id="goLeft" onClick={goLeft}><i class="arrow left"></i></button>
				<button style={{ background: `transparent` }} id="goRight" onClick={goRight}><i class="arrow right"></i></button>
				<a href="#newsIntro"><img class="downArrow" src="https://image.flaticon.com/icons/svg/2316/2316598.svg" /></a>
			</div>
		
	)
}

export default Slider