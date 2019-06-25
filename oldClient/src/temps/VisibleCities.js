
import React, { Component } from 'react'

import {getCity} from '../actions/cityRead';

import Cities from './SearchCities'

class VisibleCities extends Component {
  constructor() {
    super()
    this.state = {
      getCity: [],
      filteredCities: []
    }
  }

  componentWillMount() {
    this.setState({
      getCity,
      filteredCities: getCity
    })
  }

  filterCities = (cityFilter) => {
    let filteredCities = this.state.cities
    filteredCities = filteredCities.filter((poet) => {
      let cityName = cities.name.toLowerCase()
      return cityName.indexOf(
        cityFilter.toLowerCase()) !== -1
    })
    this.setState({
        filteredCities
    })
  }

  render() {
    return (
      <Cities getCity={this.state.filteredCities} match={this.props.match} onChange={this.filterCities} />
    )
  }
}

export default VisibleCities

