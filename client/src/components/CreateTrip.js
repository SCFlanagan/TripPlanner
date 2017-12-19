import React, { Component } from 'react';
import '../stylesheets/createtrip.css';
import DragSortableList from 'react-drag-sortable';

const locations = [
    { content: (<div>1</div>), classes: ['loc-list-item'] },
    { content: (<div>2</div>), classes: ['loc-list-item'] },
    { content: (<div>3</div>), classes: ['loc-list-item'] },
    { content: (<div>4</div>), classes: ['loc-list-item'] }
];

class CreateTrip extends Component {
    constructor() {
        super();
        this.state = {
            locations: []
        }
        this.convertLocationsToDivs = this.convertLocationsToDivs.bind(this);
    }

    convertLocationsToDivs() {
        
    }

    onSort(sortedList) {
        console.log("sortedList", sortedList);
    }

    render() {
        return (
            <div className='create-trip-div'>
                <div className='create-trip-header'>
                    <h3>Create Trip</h3>
                    <DragSortableList 
                        items={locations}
                        type='vertical'
                        onSort={this.onSort}
                        id='draggable-loc-list' />
                </div>
            </div>
        )
    }
}

export default CreateTrip;