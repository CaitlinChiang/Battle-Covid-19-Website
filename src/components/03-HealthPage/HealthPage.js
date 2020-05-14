import React from 'react'
import Messages from './PostMessages'
import Slider from './healthSlider'


function DisplayHealthPage() {
	return (
		<div>
			<section id="healthIntro">
				<Slider />
			</section>

			<section id="emergencyResources">
				<div class="container">
					<div id="healthResources_text">
						<div id="emergencies">
							<h3>EMERGENCIES</h3>
							<div class="slideDown" id="contentLinks">
								<ul>
									<li><span>National Emergency Hotline:</span> 911</li>
									<li><span>Covid Hotlines:</span> 02-894-26843, 1555</li>
									<li><span>Red Cross Hotline:</span> 143</li>
									<li><span>Suicide Hotliness:</span> (02) 8969191, 0917 854 9191</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="mentalResources">
				<div class="container">
					<div id="healthResources_text">
						<div id="mentalHealth">
							<h3>Care for Your Mental Health:</h3>
							<p id="warning">(No Payment Needed)</p>
							<div class="slideDown" id="contentLinks">
								<ul>
									<li><a href="https://youtu.be/4EaMJOo1jks">Guided Meditation - Anxiety, Fear and Worries (highly recommend)</a></li>
									<li><a href="https://youtu.be/MIr3RsUWrdo">Guided Meditation - Anxiety and Stress</a></li>
									<li><a href="https://youtu.be/Nw2oBIrQGLo">Yoga - Stress Relief</a></li>
									<li><a href="https://youtu.be/mXw2aAforhg">Brain Calming Music</a></li>
									<li><a href="https://youtu.be/nKHBIAdBvZ4g">Relaxing Sound for Stress Relief</a></li>
									<li><a href="https://www.newscientist.com/article/mg24632790-900-how-to-protect-your-mental-health-in-the-time-of-coronavirus/">Quick Read: How to protect your mental health in the time of coronavirus</a></li>
									<li><a href="https://www.readersdigest.ca/health/healthy-living/self-quarantine-activities/">40 Things You Should Do for Yourself During Self-Quarantine</a></li>
									<li><a href="https://cooking.nytimes.com/topics/self-quarantine-recipes">Bake the Anxiety Away</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="physicalResources">
				<div class="container">
					<div id="healthResources_text">
						<div id="physicalHealth">
							<h3>Get your body moving:</h3>
							<p id="warning">(No Equipment Needed)</p>
							<div class="slideDown" id="contentLinks">
								<ul>
									<li><a href="https://www.bodybuilding.com/fun/7-tips-to-rekindle-your-fitness-relationship.html">Quick Read: 7 Tips to Rekindle Your Fitness Relationship</a></li>
									<li><a href="https://www.fitnessblender.com/videos">Fitness Blender - Specific to Needs</a></li>
									<li><a href="https://youtu.be/95846CBGU0M">Full Body - Muscle Growth</a></li>
									<li><a href="https://youtu.be/Lscqihirc3c">Full Body - Fat Burning</a></li>
									<li><a href="https://youtu.be/UyTR2EjTAXU">Arm Workout - Toning</a></li>
									<li><a href="https://youtu.be/AnYl6Nk9GOA">Core Workout</a></li>
									<li><a href="https://youtu.be/Jg61m0DwURs">Leg Workout - Slimming</a></li>
									<li><a href="https://youtu.be/fcN37TxBE_s">Cardio</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
				
			<section id="healthContent">
				<div class="container">
					<div id="affirmationsSection">
						<Messages />
					</div>
				</div>
			</section>
		</div>
	)
}

export default DisplayHealthPage