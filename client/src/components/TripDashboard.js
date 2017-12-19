import React from 'react';
import '../stylesheets/tripdashboard.css';
import TripListItem from './TripListItem';

const TripDashboard = () => {
    return (
        <div className='trip-dash'>
            <div className='trip-dash-header'>
                <a href='/trips/new' className='add-trip'>+</a>
                <h3 >Your Trips</h3>
            </div>
            <TripListItem />
            <TripListItem />
            <TripListItem />
        </div>
    )
}

export default TripDashboard;