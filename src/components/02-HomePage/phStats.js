import React, { Component } from 'react'


class Philippines extends Component {

	state = {
		todayCases: "",
		todayDeaths: "",

		cases: "",
		activeCases: "",
		criticalCases: "",
		tested: "",
		deaths: "",
		recovered: ""	
	}

	componentDidMount = async (event) => {
		const countryStats_call = await fetch(`https://coronavirus-19-api.herokuapp.com/countries/Philippines`)
		const countryStats = await countryStats_call.json()
		this.setState({
			todayCases: countryStats.todayCases,
			todayDeaths: countryStats.todayDeaths,

			cases: countryStats.cases,
			activeCases: countryStats.active,
			criticalCases: countryStats.critical,
			tested: countryStats.totalTests,
			deaths: countryStats.deaths,
			recovered: countryStats.recovered
		}) 
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
			<div class="slideDown">
				<div id="phStatistics">
					<h5>{this.today()}</h5>
					<h1>Philippines Covid-19 Statistics</h1>

					<div class="phStatistics_container">
						<div class="phStatistics_row">
							<div class="phStatistics_col">
								<h3>Overall Statistics: </h3>
							</div>

							<div class="phStatistics_col">
							</div>

							<div class="phStatistics_col">
								<h3>Today   : </h3>
							</div>	
						</div>
						
						<div class="phStatistics_row">
							<div class="phStatistics_col">
								<p><span>Cases:</span> {this.addCommas(this.state.cases)}</p>							
								<p><span>Active Cases:</span> {this.addCommas(this.state.activeCases)}</p>
								<p><span>Critical Cases:</span> {this.addCommas(this.state.criticalCases)}</p>
							</div>

							<div class="phStatistics_col">
								<p><span>Tested:</span> {this.addCommas(this.state.tested)}</p>
								<p><span>Deaths:</span> {this.addCommas(this.state.deaths)}</p>
								<p><span>Recovered:</span> {this.addCommas(this.state.recovered)}</p>
							</div>

							<div class="phStatistics_col">
								<p><span>Cases:</span> {this.addCommas(this.state.todayCases)}</p>
								<p><span>Deaths:</span> {this.addCommas(this.state.todayDeaths)}</p>
							</div>	
						</div>
					</div>
						
				</div>
			</div>
		)
	}
}

export default Philippines