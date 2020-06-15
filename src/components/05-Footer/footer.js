import React from 'react'


function Footer(props) {
	return (
		<footer>
				<div class="container">

					<div id="footer_text" class="fade-in">
						<h2>Fight Covid-19 | <span class="highlight">Philippines</span></h2>
						<h4>Dear Countrymen,</h4> <br />
						<p>Let us fight this pandemic together. It is time to start caring about fellow Filipinos.</p>
					</div>
					
					<div class="card_buttons">
						<div class="card-row">
							
							    <button onClick={props.goHome} id="homeButton">
							    	<img src="/Images/3.png" width="100%;"/>
									<div class="card-container">
							    		<h1>News</h1>
										<p>Resources with valuable information regarding the pandemic</p>
								    </div>
								</button>
							
							    <button onClick={props.goHealth} id="healthButton">
							    	<img src="/Images/5.png" width="100%;"/>
									<div class="card-container">
										<h1>Health</h1>
								    	<p>Physical and mental health are most especially crucial during these times. We must try our best to remain positive, stay sane, and counter the negativity with a fresh attitude.</p>
									</div>
								</button>
							
								<button onClick={props.goDonate} id="donateButton">
										<img src="/Images/4.png" width="100%;"/>
									    <div class="card-container">
										    <h1>Donate</h1>
										    <p>"No one has ever become poor by giving." - Anne Frank</p>
										</div>
								</button>
							
						</div>
					</div>

				</div>

				<p class="copyright">Website Created by: Caitlin Chiang | Ideas and Resources by: Jeriel Tiu, Pauline Wee</p>
			</footer>
	)
}

export default Footer