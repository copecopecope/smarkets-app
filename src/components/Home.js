import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTopEvents } from '../redux/actions';

class Home extends Component {

    componentDidMount() {
        this.props.dispatch(fetchTopEvents())
    }

    render() {
        const { events } = this.props
        return (
            <div className="home">
                { events.map(event => <div key={event.id}>{event.name}</div>) }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        events: state.response ? state.response.results : []
    }
}

export default connect(mapStateToProps)(Home);