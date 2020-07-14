import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth28887Reducer from '../features/EmailAuth28887/redux/reducers';
import EmailAuth18886Reducer from '../features/EmailAuth18886/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth28887: EmailAuth28887Reducer,
EmailAuth18886: EmailAuth18886Reducer,

});