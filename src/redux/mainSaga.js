import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth28887Saga from '../features/EmailAuth28887/redux/sagas';
import EmailAuth18886Saga from '../features/EmailAuth18886/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth28887Saga,
EmailAuth18886Saga,
    
  ]);
}