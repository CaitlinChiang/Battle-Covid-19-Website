import React from 'react'
import Verse from './BibleVerses'
import Slider from './donateSlider'


function DisplayDonatePage() {
	return(
		<div>

			<section id="donateCarousel">
				<Slider />
			</section>

			<section id="donateSection1">
				<div class="container">
					<div id="donateSection1_text" class="fade-in">
						<h2>Donate</h2>
						<p>Here are amazing organizations that you can help out:</p>
						<div class="fade-in">
							<ul>
								<li><a href="https://helpfromhome.ph/">Help Frontliners and Families at Risk!</a></li>
								<li><a href="https://childrenshungerfund.org/Disaster">Children's Hunger Fund</a></li>
								<li><a href="https://www.projectpearls.org/donate/">Project Pearls - Children's Education and Healthcare</a></li>
								<li><a href="https://www.unicef.org/philippines/">United Nation Children's Fund (UNICEF)</a></li>
								<li><a href="https://wwf.org.ph/donate/">World Wide Fund for Nature (WWF) - Support Our Local Farmers</a></li>
							</ul>
						</div>
					</div>

					
						
					

				</div>
			</section>

			<section id="donateSection2">
				<div class="container">
					
						<Verse />
					

				</div>
			</section>
		</div>
	)
}

export default DisplayDonatePage