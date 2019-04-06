import _ from 'lodash'
import {
  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
  DELETE_EVENT,
  UPDATE_EVENT,
} from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENTS:
    case UPDATE_EVENT:
      // 送られてきたjsonをそれぞれのidをキーとした配列に格納
      return _.mapKeys(action.response.data, 'id')
    case READ_EVENT:
      // {id: 10, title: "let's have an event 10!", body: "this is the body for event 10."}
      const data = action.response.data
      return { ...events, [data.id]: data }
    case DELETE_EVENT:
      delete events[action.id]
      return { ...events }
    default:
      return events
  }
}