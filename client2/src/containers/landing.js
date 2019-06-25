import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCity} from '../actions/cityRead';
import {getIcon} from '../actions/iconRead';
import DisplayCities from './displayCities';

class Landing1 extends React.Component  {
    
    componentDidMount() {
        this.props.getCity()
        this.props.getIcon()
    }
    cityImage() {              
            return (
                <div>
                    <div>
                        <img className="login" src={this.props.iconList.icons[0].image} alt="login" />
                        <img className="home" src={this.props.iconList.icons[1].image} alt="home" />
                        <img className="logo" src={this.props.iconList.icons[2].image} alt="logo" />
                        <a href={'/displayCities'}><img className="arrow" src={this.props.iconList.icons[3].image} alt="arrow" /></a>
                    </div>
                    <div>
                        <img className="highlight0" src={this.props.cityList.cities[0].image} />
                        
                        <img className="highlight1" src={this.props.cityList.cities[1].image} />
                        
                        <img className="highlight2" src={this.props.cityList.cities[2].image} />
                        
                        <img className="highlight3" src={this.props.cityList.cities[3].image} />
                        
                    </div>
                </div>
                )
            }   

    render() {
        console.log('name', this.props)
        return (
            <div>
               {this.props.cityList.fetched && this.props.iconList.fetched && this.cityImage()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cityList: state.cities,  
        iconList: state.icons,     
    }
}
const mapDispatchToProps = (dispatch) => { //save upto store
    return bindActionCreators({getCity: getCity, getIcon: getIcon}, dispatch)
        // getCity: () => dispatch(getCity())    
}

    
export default connect(mapStateToProps,mapDispatchToProps)(Landing1)