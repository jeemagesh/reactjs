import * as type from '../types';

export default function getEvents() {
  console.log("GetEvents action")
    return {
      type: type.GET_EVENTS_REQUESTED,
    }
  }