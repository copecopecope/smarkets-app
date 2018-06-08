import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTopEvents, Status } from '../redux/actions';
import EventRow from './EventRow';

import '../layout/home.css';

class Home extends Component {

    componentDidMount() {
        this.props.dispatch(fetchTopEvents())
    }

    render() {
        const { events, loading } = this.props
        return (
            <div className="home">
                <h1>Top Events</h1>
                { loading && <div className="loading">Loading...</div>}
                <div className="event-rows">
                    { events.map(event => <EventRow key={event.id} event={event} /> ) }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.home.status === Status.Requesting,
        events: state.home.response ? state.home.response.results : []
    }
}

export default connect(mapStateToProps)(Home);