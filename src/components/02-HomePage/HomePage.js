import React from 'react'
import Slider from './statsSlider'


function DisplayHomePage() {
	return (
		<div>
			<section id="homeIntro">
				<div class="container">
					<div id="statsSlider">
						<Slider />
					</div>
					<a href="#newsIntro"><img class="downArrow" src="https://image.flaticon.com/icons/svg/2316/2316598.svg" /></a>
				</div>
			</section>

			<section id="newsIntro">
				<div class="container">
					<div id="newsIntro_text" class="fade-in">
						<h2>News</h2>
						<p>Resources with valuable information regarding the pandemic:</p>
						<div class="slideDown">
							<ul>
								<li><a href="https://www.doh.gov.ph/2019-nCoV">Department of Health Updates</a></li>
								<li><a href="https://www.inquirer.net/home?utm_expid=.xLwjUJ__ST6egtVH31jwAA.1&utm_referrer=">Inquirer</a></li>
								<li><a href="https://www.philstar.com/">Philippine Star</a></li>
								<li><a href="https://mb.com.ph/">Manila Bulletin</a></li>
								<li><a href="https://flipboard.com/topic/philippines">Flipboard Philippines</a></li>
								<li><a href="https://www.economist.com/topics/philippines">Economist</a></li>
								<li><a href="https://www.manilatimes.net/">The Manila Times</a></li>
								<li><a href="https://www.pna.gov.ph/">Philippine News Agency</a></li>
								<li><a href="https://philnews.ph/">Philippine News</a></li>
							</ul>
						</div>
					</div>
				</div>
			</section>
							
		</div>
	)
}

export default DisplayHomePage