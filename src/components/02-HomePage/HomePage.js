import React from 'react'
import Statistics from './CovidStats'


function DisplayHomePage() {
	return (
		<div>
			<section id="homeIntro">
				<div class="container">
					<div id="homeIntro_text" class="fade-in">
						<h2>Fight Covid-19 | <span class="highlight">Philippines</span></h2>
						<h4>Dear Countrymen,</h4> <br />
						<p>Let us fight this pandemic together. It is time to start caring about fellow Filipinos.</p>
					</div>
					<a href="#homeContent"><img class="downArrow" src="https://image.flaticon.com/icons/svg/2316/2316598.svg" /></a>
				</div>
			</section>

			<section id="homeContent">
				<div class="container">
					<div id="pandemicInfo" class="overflow-container">
						<h3>Resources with valuable information regarding the pandemic:</h3>
						<div class="slideRight">
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
					<div>
						<Statistics />
					</div>
				</div>
			</section>
			
			<footer>
				<p>Website Created by: Caitlin Chiang | Ideas and Resources by: Jeriel Tiu, Pauline Wee</p>
			</footer>
		</div>
	)
}

export default DisplayHomePage