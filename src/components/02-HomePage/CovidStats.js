import React, { Component } from 'react'


class Statistics extends Component {

	state = {
		displayGlobalStats: false,

		globalCases: "",
		globalDeaths: "",
		globalRecovered: "",
	
		displayStats: false,

		todayCases: "",
		todayDeaths: "",

		cases: "",
		activeCases: "",
		criticalCases: "",
		tested: "",
		deaths: "",
		recovered: ""	
	}

	getGlobalStats = async (event) => {
		event.preventDefault()
		const globalStats_call = await fetch('https://coronavirus-19-api.herokuapp.com/all')
		const globalStats = await globalStats_call.json()
		this.setState({
			displayGlobalStats: true,

			globalCases: globalStats.cases,
			globalDeaths: globalStats.deaths,
			globalRecovered: globalStats.recovered
		}) 
	}

	getCountryStats = async (event) => {
		event.preventDefault()
		const country = event.target.elements.country.value
		const countryStats_call = await fetch(`https://coronavirus-19-api.herokuapp.com/countries/${country}`)
		const countryStats = await countryStats_call.json()
		if (country.trim() !== "") {
			this.setState({
				displayStats: true,

				todayCases: countryStats.todayCases,
				todayDeaths: countryStats.todayDeaths,

				cases: countryStats.cases,
				activeCases: countryStats.active,
				criticalCases: countryStats.critical,
				tested: countryStats.totalTests,
				deaths: countryStats.deaths,
				recovered: countryStats.recovered
			}) 
		} else {
			alert('We are sorry, but we do not have the statistics of that country.')
		}
	}

	clear = (event) => {
		event.preventDefault()
		this.setState({ displayStats: false })
		document.getElementById('statisticsForm').reset()
	}

	addCommas = (x) => x.toLocaleString()

	today = () => {
		let newDate = new Date()
		let dateToday = newDate.getDate();
		let month = newDate.getMonth() + 1;
		let year = newDate.getFullYear();

		return month + "/" + dateToday + "/" + year
	}

	render() {
		return (
			<div id="statsInfo">
				<div class="container">
					<div id="globalInput">
						<button onClick={this.getGlobalStats} class="ripple">Global Statistics ({this.today()})</button>
						{this.state.displayGlobalStats ?
							<div id="globalStats" class="slideDown">
								<p><span>Cases:</span> {this.addCommas(this.state.globalCases)}</p>
								<p><span>Deaths:</span> {this.addCommas(this.state.globalDeaths)}</p>	
								<p><span>Recovered:</span> {this.addCommas(this.state.globalRecovered)}</p>
							</div>
						: <p id="warning">(May take a short while to load.)</p>}			
					</div>
				</div>

				<div class="countainer">
					<div id="countryInput">
						<form onSubmit={this.getCountryStats} autocomplete="off" id="statisticsForm">
							<input type="text" name="country" placeholder="Country (ex.Philippines, USA)"/>
							<div id="statsButtons" class="stats_buttons">
								<button class="ripple">Statistics</button>
								<button onClick={this.clear} class="ripple">Clear</button>
							</div>
						</form>

						{this.state.displayStats ? 
							<div id="countryStats" class="slideUp">
								<h3>TODAY</h3>
									<p><span>Cases:</span> {this.addCommas(this.state.todayCases)}</p>
									<p><span>Deaths:</span> {this.addCommas(this.state.todayDeaths)}</p>
								<h3>OVERALL STATISTICS</h3>
									<p><span>Cases:</span> {this.addCommas(this.state.cases)}</p>
									<p><span>Active Cases:</span> {this.addCommas(this.state.activeCases)}</p>
									<p><span>Critical Cases:</span> {this.addCommas(this.state.criticalCases)}</p>
									<p><span>Tested:</span> {this.addCommas(this.state.tested)}</p>
									<p><span>Deaths:</span> {this.addCommas(this.state.deaths)}</p>
									<p><span>Recovered:</span> {this.addCommas(this.state.recovered)}</p>
							</div>
						: <p id="warning">(May take a short while to load.)</p>}
					</div>
				</div>
			</div>
		)
	}
}

export default Statistics