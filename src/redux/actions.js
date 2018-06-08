export const Types = {
    TopEvents: Symbol('TopEvents'),
    Events: Symbol('Events')
}

export const Status = {
    Requesting: Symbol('Requesting'),
    Success: Symbol('Success'),
    Failure: Symbol('Failure')
}

export function fetchTopEvents() {
    return {
        type: Types.TopEvents,
        API_CALL: {
            endpoint: '/events/popular'
        }
    }
}

export function fetchEvent(eventId) {
    return {
        type: Types.Event,
        API_CALL: {
            endpoint: `/events/id/${eventId}`
        }
    }
}