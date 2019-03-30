import _ from 'lodash'
import { READ_EVENTS } from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // 送られてきたjsonをそれぞれのidをキーとした配列に格納
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}