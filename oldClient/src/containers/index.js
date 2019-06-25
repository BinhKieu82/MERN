import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import TableRow from './TableRow';
import {getCity} from '../actions/cityRead';


class Index extends React.Component {

    componentDidMount() {
        this.props.getCity()
    }
     
    tabRow() {
        return this.props.cityList.cities.map(function (object, i) {
            return <TableRow obj={object} key={i}/>;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Users List</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.cityList.fetched && this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cityList: state.cities       
    }
}
const mapDispatchToProps = (dispatch) => { //save upto store
    return bindActionCreators({getCity: getCity}, dispatch)
        // getCity: () => dispatch(getCity())    
}

    
export default connect(mapStateToProps,mapDispatchToProps)(Index)