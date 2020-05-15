import React from 'react'
import Messages from './PostMessages'
import Slider from './healthSlider'


function DisplayHealthPage() {
	return (
		<div>
			<section id="donateCarousel">
				<Slider />
			</section>

			<section id="healthSection1">
				<div class="container">
					<div id="healthSection1_text" class="fade-in">
						<h2>Emergency Procedures</h2>
						<p>Do not hesitate reaching out to hotlines whenever you are facing an emergency.</p>
						<div class="fade-in">
							<ul>
								<li><span>National Emergency Hotline:</span> 911</li>
								<li><span>Covid Hotlines:</span> 02-894-26843, 1555</li>
								<li><span>Red Cross Hotline:</span> 143</li>
								<li><span>Suicide Hotliness:</span> (02) 8969191, 0917 854 9191</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section id="healthSection2">
				<div class="container">
					<div id="healthSection2_text" class="fade-in">
						<h2>Mental Health</h2>
						<h3>Care for you Mental Health</h3>
						<p>Mental health is especially crucial in these times. Take care of it, and your future self will be thanking you.</p>
						<p id="warning">(No Payment Needed)</p>
						<div class="fade-in">
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
			</section>


			<section id="healthSection3">
				<div class="container">
					<div id="healthSection3_text" class="fade-in">
						<h2>Physical Health</h2>
						<h3>Get your body moving!</h3>
						<p>Staying physically healthy will help you feel good in the inside, and help relieve negativity from your system.</p>
						<p id="warning">(No Equipment Needed)</p>
						<div class="fade-in">
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
			</section>



			<section id="healthSection4">
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