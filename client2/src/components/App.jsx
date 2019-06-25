import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Create from '../containers/create';
import Edit from '../containers/edit';
//import Index from '../containers/index';
import DisplayCities from '../containers/displayCities';

import SearchForm from '../containers/searchForm';
import SearchResults from '../containers/searchResults';
import Landing from '../containers/landing';


class App extends React.Component {
    render() {
      return (
	    <div>            
            <SearchForm />
            <SearchResults />
            <Router>
                <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to={'/'} className="navbar-brand">Landing Page</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">                    
                        <li className="nav-item">
                        <Link to={'/create'} className="nav-link">Sign Up</Link>
                        </li>                        
                        <li className="nav-item">
                        <Link to={'/displayCities'} className="nav-link">Cities Page</Link>
                        </li>
                    </ul>
                    </div>
                </nav> <br/>
                <h2>Welcome to MYtinerary App</h2> <br/>
                <Switch>
                    <Route exact path='/' component={ Landing } />
                    <Route path='/create' component={ Create } />
                    <Route path='/edit/:id' component={ Edit } />
                    
                    <Route path='/displayCities' component={ DisplayCities } />
                </Switch>
                </div>
            </Router>        
		</div>
      );
   }
}

export default App;
