import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';

import { fetchEvent, Status } from '../redux/actions';

import '../layout/event.css'

class Event extends Component {
    
    componentDidMount() {
        const { dispatch, match } = this.props
        dispatch(fetchEvent(match.params.id))
    }

    renderEvent(event) {
        return (
            <div className="event_content">
                <h1>{event.name}</h1>
                <div className="event_main">
                    <div className="event_data">
                        <div className="event_data_name">League</div>
                        <div className="event_data_value">{event.parent_name}</div>
                    </div>
                    <div className="event_data">
                        <div className="event_data_name">Start Date</div>
                        <div className="event_data_value">{format(event.start_datetime, 'MMM D, YYYY')}</div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { loading, event } = this.props
        return (
            <div className="event">
                <Link className="event_back" to="/">Back to events</Link>
                { loading && <div className="loading">Loading...</div> }
                { event && this.renderEvent(event) }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.event.status === Status.Requesting,
        event: state.event.response && state.event.response.event
    }
}

export default connect(mapStateToProps)(Event);