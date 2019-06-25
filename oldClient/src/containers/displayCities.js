import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCity} from '../actions/cityRead';

class DisplayCities extends React.Component {
   
    componentDidMount() {
            this.props.getCity()        
    }

    cityLine() {
        //console.log('city', this.props)
        //return <img src={this.props.cityList.image} />;
        let listImage = this.props.cityObject.cities.map((i) =>{        
            return (
                <div>
                    <img key={i._id} src={i.image} />
                    <p>{i.name}</p>
                </div>
                );
            });
        return listImage;
    };
    

    render() {
        console.log('city', this.props)
        return (
            <div style={{marginTop: 10}}>
                {this.props.cityObject.fetched && this.cityLine()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cityObject: state.cities,
    }
}
const mapDispatchToProps = (dispatch) => { //save upto store
    return bindActionCreators({getCity: getCity}, dispatch)
        // getCity: () => dispatch(getCity())
    
}
export default connect(mapStateToProps,mapDispatchToProps)(DisplayCities)