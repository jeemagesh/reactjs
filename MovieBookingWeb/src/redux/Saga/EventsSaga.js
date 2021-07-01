import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
const apiUrl = `http://localhost:4000/Events`;

function getApi() {
    console.log("Inside event Saga ")
    return axios.get(apiUrl)
        .then(response => response.data)
        .catch((error) => { throw error })
 
}

function* fetchEvents(action) {
    try {
        const events = yield call(getApi);
        console.log("Inside event Saga fetchevent ",events)
        yield put({ type: 'GET_EVENTS_SUCCESS', events: events });
    } catch (e) {
        yield put({ type: 'GET_EVENTS_FAILED', message: e.message });
    }
}


function* EventsSaga() {
    yield takeEvery('GET_EVENTS_REQUESTED', fetchEvents);
}

export default EventsSaga;