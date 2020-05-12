import React, { Component } from 'react'


class Global extends Component {

	state = {
		globalCases: "",
		globalDeaths: "",
		globalRecovered: "",
	
		displayStats: false
	}

	componentDidMount = async (event) => {
		const globalStats_call = await fetch('https://coronavirus-19-api.herokuapp.com/all')
		const globalStats = await globalStats_call.json()
		this.setState({
			globalCases: globalStats.cases,
			globalDeaths: globalStats.deaths,
			globalRecovered: globalStats.recovered
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
				<div id="globalStatistics">
					<h5>{this.today()}</h5>
					<h1>Global Covid-19 Statistics</h1>
					<p><span>Cases:</span> {this.addCommas(this.state.globalCases)}</p>
					<p><span>Deaths:</span> {this.addCommas(this.state.globalDeaths)}</p>	
					<p><span>Recovered:</span> {this.addCommas(this.state.globalRecovered)}</p>
				</div>
			</div>
		)
	}
}

export default Global