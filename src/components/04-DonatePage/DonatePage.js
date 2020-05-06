import React from 'react'
import Verse from './BibleVerses'


function DisplayDonatePage() {
	return(
		<div>
			<section id="donateIntro">
				<div class="container">
					<div id="donateIntro_text" class="fade-in">
						<h2>Donate</h2>
						<p>"No one has ever become poor by giving." <br /> - Anne Frank</p>
					</div>
					<a href="#donateContent"><img class="downArrow" src="https://image.flaticon.com/icons/svg/2316/2316598.svg" /></a>
				</div>
			</section>

			<section id="donateContent">
				<div class="container">
					<div id="donateInfo" class="overflow-container">
						<h3>Here are amazing organizations that you can help out:</h3>
						<p id="warning">(Reliable Sources)</p>
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
				<div class="container">
					<div id="versesSection">
						<Verse />
					</div>
				</div>
			</section>
		</div>
	)
}

export default DisplayDonatePage