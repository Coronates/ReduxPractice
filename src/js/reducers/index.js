//refactoring state
import { ADD_ARTICLE } from "../constants/action-types";
const initialState = {
  articles: [],
  remoteArticles: []
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    // impure -> state.articles.push(action.payload);
    return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });  
  }
  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }
  return state;
}
export default rootReducer;

// now  the resulting state is just a copy of the initial state. 