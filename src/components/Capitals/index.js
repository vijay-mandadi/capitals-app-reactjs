import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {country: countryAndCapitalsList[0].country}

  change = event => {
    const filtered = countryAndCapitalsList.filter(
      each => each.id === event.target.value,
    )
    this.setState({country: filtered[0].country})
  }

  render() {
    const {country} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="input">
            <select onChange={this.change}>
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="paragraph">is capital of which country?</p>
          </div>
          <h1 className="heading">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
