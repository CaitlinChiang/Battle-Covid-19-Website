import React from 'react'


function Navbar(props) {
	return (
		<header>
			<div class="container">
				<div class="navbar_buttons">
					<button onClick={props.goHome} id="homeButton">HOME</button>
					<button onClick={props.goHealth} id="healthButton">HEALTH</button>
					<button onClick={props.goDonate} id="donateButton">DONATE</button>		
				</div>					
				<div id="navbar_text">
					<p><span class="highlight">BATTLE</span> COVID-19</p>
				</div>
			</div>
		</header>
	)
}

export default Navbar