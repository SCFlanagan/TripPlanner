/*global google*/

import React, { Component } from 'react';
import '../stylesheets/trip.css';

export default class Trip extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.initMap.call(this)
    }

    initMap() {
        var input = document.getElementById('pac-input');
        var autocomplete = new google.maps.places.Autocomplete(input);
        console.log('autocomplete: ', autocomplete);
      }

    render() {
        return (
            <div id='whole-page'>
                <div class="pac-card" id="pac-card">
                    <div>
                        <div id="title">Add Locations</div>
                    </div>
                    <div id="pac-container">
                        <input id="pac-input" type="text"
                        placeholder="Enter a location" />
                    </div>
                </div>
                <div id="map"></div>
                <div id="infowindow-content">
                    <img src="" width="16" height="16" id="place-icon" />
                    <span id="place-name"  class="title"></span>
                    <br></br>
                    <span id="place-address"></span>
                </div>
            </div>)
    }
}

