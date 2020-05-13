import React, { Component } from 'react'


class Search extends Component {

	state = {
		country: "",

		todayCases: "",
		todayDeaths: "",

		cases: "",
		activeCases: "",
		criticalCases: "",
		tested: "",
		deaths: "",
		recovered: ""	
	}

	getCountryStats = async (event) => {
		event.preventDefault()
		const country = this.state.country
		const countryStats_call = await fetch(`https://coronavirus-19-api.herokuapp.com/countries/${country}`)
		const countryStats = await countryStats_call.json()
		if (country.trim() !== "") {
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
		} else {
			alert('Sorry, but we do not have the statistics of that country.')
		}
	}

	handleChange = (event) => {
		const {name, value} = event.target
		this.setState({ [name]: value })
	}

	addCommas = (x) => x.toLocaleString()

	today = () => {
		let newDate = new Date()
		let dateToday = newDate.getDate();
		let month = newDate.getMonth() + 1;
		let year = newDate.getFullYear();

		return month + "/" + dateToday + "/" + year
	}
	
	clear = (event) => {
		event.preventDefault()
		this.setState({
			todayCases: "",
			todayDeaths: "",

			cases: "",
			activeCases: "",
			criticalCases: "",
			tested: "",
			deaths: "",
			recovered: "",

			country: ""	
		})
	}

	render() {
		return (
			<div class="slideDown">
				<div id="searchStatistics">
					<h5>{this.today()}</h5>
					<h1>SEARCH COVID-19 STATISTICS</h1>

					<div class="searchStatistics_container">
						<div class="searchStatistics_row">
							<div class="searchStatistics_col">
								<div id="countryInput">
									<form onSubmit={this.getCountryStats} autocomplete="off" id="statisticsForm">
										<input onChange={this.handleChange} type="text" name="country" value={this.state.country} placeholder="Country (ex. USA)" />
										<div id="statsButtons" class="stats_buttons">
											<button class="ripple">Statistics</button>
											<button onClick={this.clear} class="ripple">Clear</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						
						<div class="searchStatistics_row">
							<div class="searchStatistics_col">
								<h3><u>Overall</u></h3>
							</div>

							<div class="searchStatistics_col">
								<h3><u>Today</u></h3>
							</div>	
						</div>

						<div class="searchStatistics_row">
							<div class="searchStatistics_col">
								<p><span>Cases:</span> {this.addCommas(this.state.cases)}</p>							
								<p><span>Active Cases:</span> {this.addCommas(this.state.activeCases)}</p>
								<p><span>Critical Cases:</span> {this.addCommas(this.state.criticalCases)}</p>
								<p><span>Tested:</span> {this.addCommas(this.state.tested)}</p>
								<p><span>Deaths:</span> {this.addCommas(this.state.deaths)}</p>
								<p><span>Recovered:</span> {this.addCommas(this.state.recovered)}</p>
							</div>

							<div class="searchStatistics_col">
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

export default Search

				