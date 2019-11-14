import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Map from '../../componentes/Map/Map';
import { getUserLocation } from '../../store/actions/locationActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from 'react-bootstrap';
import './HomePage.css';


const HomePage = props => {

    const notify = (txt) => toast(txt);

    useEffect(() => {
        if (props.userLocation === null) fatchData();
    });

    async function fatchData() {
        const { dispatch } = props;
        try {
            await dispatch(getUserLocation());
        }
        catch (err) {
            notify('Cannot find your location');
        }
    };

    const { userLocation } = props;
    return (
        <div className="homePage">
            <ToastContainer />
            {userLocation !== null &&
                <div className="map-container">
                    <h1 className="page-header">Your IP location is: {userLocation.city}, {userLocation.country_name}</h1>
                    <Map city={userLocation.city} countryCode={userLocation.country_code}></Map>
                </div>
            }
            {userLocation === null &&
                <Spinner animation="grow" variant="info" />
            }
        </div>
    );
}

const mapStateToProps = ({ locationReducer }) => {
    const { userLocation } = locationReducer;
    return {
        userLocation
    }
}

export default connect(mapStateToProps)(HomePage);