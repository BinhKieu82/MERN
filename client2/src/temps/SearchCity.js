import React from 'react'
import { Route, Link } from 'react-router-dom'

import { createCityPath } from '../helpers/routerHelpers'

import City from './citySearchDisplay';
import SearchForm from './searchForm';

const Cities = ({ cities, match, onChange }) =>  {
  return (
    <div>
      <h1>City</h1>
      <SearchForm onChange={onChange} />
      <ul>
        {cities.map((city) => {
          let path = createCityPath(city, match.url)
          return (
            <li key={city.id}>
              <p><Link to={path}>{city.name}</Link></p>
            </li>
          )
        })}
      </ul>
      {cities.map((city) => {
        let path = createCityPath(city, match.url)
        return (
          <Route key={city.id} path={path} render={() => <City city={city} />} />
        )
      })}
    </div>
  )
}

export default Cities