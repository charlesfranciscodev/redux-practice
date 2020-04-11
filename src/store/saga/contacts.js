import { all, put, takeEvery } from "redux-saga/effects";

// worker Saga: will be fired on CONTACTS_FETCH_SUCCEEDED actions
function* fetchContacts(action) {
   try {
      const json = yield fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json());

      yield put({type: "CONTACTS_FETCH_SUCCEEDED", contacts: json});
   } catch (e) {
      yield put({type: "CONTACTS_FETCH_FAILED", message: e.message});
   }
}

function* getContacts() {
  yield takeEvery("CONTACTS_FETCH_REQUESTED", fetchContacts);
}

export default function* rootSaga() {
  yield all([
    getContacts()
  ])
};
