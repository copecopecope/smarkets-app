import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventRow extends Component {
    render() {
        const { event } = this.props
        return (
            <Link to={`/event/${event.id}`} className="event-row hover">
                <div className="event-row_name">{event.name}</div>
                <div className="event-row_parent">{event.parent_name}</div>
            </Link>
        );
    }
}

export default EventRow;