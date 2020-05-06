import React, { Component } from 'react'

import Navbar from './components/01-NavBar/navbar'
import DisplayHomePage from './components/02-HomePage/HomePage'
import DisplayHealthPage from './components/03-HealthPage/HealthPage'
import DisplayDonatePage from './components/04-DonatePage/DonatePage'


class App extends Component {

    state = {
        screen_Home: true,
        screen_Health: false,
        screen_Donation: false
    }

    goHome = (event) => {
        event.preventDefault()
        this.setState({
            screen_Home: true,
            screen_Health: false,
            screen_Donation: false
        })
        document.getElementById('homeButton').className = "highlight"
        document.getElementById('healthButton').className = ""
        document.getElementById('donateButton').className = ""
    }

    goHealth = (event) => {
        event.preventDefault()
        this.setState({
            screen_Home: false,
            screen_Health: true,
            screen_Donation: false
        })
        document.getElementById('homeButton').className = ""
        document.getElementById('healthButton').className = "highlight"
        document.getElementById('donateButton').className = ""
    }

    goDonate = (event) => {
        event.preventDefault()
        this.setState({
            screen_Home: false,
            screen_Health: false,
            screen_Donation: true
        })
        document.getElementById('homeButton').className = ""
        document.getElementById('healthButton').className = ""
        document.getElementById('donateButton').className = "highlight"
    }

    render() {
         return (
            <div>
                <Navbar goHome={this.goHome} goHealth={this.goHealth} goDonate={this.goDonate } />
                {this.state.screen_Home ? <DisplayHomePage /> : null}
                {this.state.screen_Health ? <DisplayHealthPage /> : null}
                {this.state.screen_Donation ? <DisplayDonatePage /> : null}
            </div>
        )
    }
}

export default App