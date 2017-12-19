/*global google*/

import React, { Component } from 'react';
import '../stylesheets/createtrip.css';

var map;
var infowindow;
var service;

class CreateTrip extends Component {
    constructor() {
        super();
        this.callback = this.callback.bind(this);
    }

    componentDidMount() {
        this.initMap();
    }

    handleChange() {
        //service = new google.maps.places.PlacesService(map);
        //service.textSearch(request, callback);
    }

    initMap() {
        /*console.log('in')
        const map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });*/
        var pyrmont = {lat: -33.867, lng: 151.195};
        
        map = new google.maps.Map(document.getElementById('map'), {
            center: pyrmont,
            zoom: 15
        });

        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
            location: pyrmont,
            radius: 500,
            type: ['store']
        }, this.callback);
      }

      callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            this.createMarker(results[i]);
          }
        }
      }

      createMarker(place) {
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
    }

    render() {
        return (
            <div className='create-trip-div'>
                <div className='create-trip-header'>
                    <h3>Create Trip</h3>
                    <form>
                        <input  type='text' 
                                id='loc-input'
                                placeholder='Enter a Location'
                                onChange={this.handleChange()} />
                    </form>
                    <div id='map'></div> 
                    {/*
                    <input  id="pac-input" 
                            className="controls" 
                            type="text"
                            placeholder="Enter a location" />
                    <div id="map"></div>
                    <div id="infowindow-content">
                        <span id="place-name"  className="title"></span>
                        <br></br>
                        Place ID 
                        <span id="place-id"></span>
                        <br></br>
                        <span id="place-address"></span>
                    </div>*/}
                </div>
            </div>
        )
    }
}

export default CreateTrip;










/*}

import DragSortableList from 'react-drag-sortable';



<DragSortableList 
                        items={locations}
                        type='vertical'
                        onSort={this.onSort}
                        id='draggable-loc-list' />

const locations = [
    { content: (<div>1</div>), classes: ['loc-list-item'] },
    { content: (<div>2</div>), classes: ['loc-list-item'] },
    { content: (<div>3</div>), classes: ['loc-list-item'] },
    { content: (<div>4</div>), classes: ['loc-list-item'] }
];

this.state = {
    locations: []
}
this.convertLocationsToDivs = this.convertLocationsToDivs.bind(this);


convertLocationsToDivs() {
    
        }
    
        onSort(sortedList) {
            console.log("sortedList", sortedList);
        }
    */