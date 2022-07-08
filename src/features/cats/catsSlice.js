
//Action creators

export function fetchCats() {
  return function (dispatch) {
    dispatch({ type: "cats/catsLoading" }); //call loading state, until we ge fetch response to render
    fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
      .then((r) => r.json())
      .then((cats) => {
        dispatch ({ type: "cats/catsLoaded", payload: cats.images }); //update state with response
      });
  };
}


//Reducers
const initialState = {
  entities: [], //array of cats....eventually
  status: "idle", //loading state to set off a different action creator; loaded vs. loading
};


export default function catsReducer(state = initialState, action) {
  switch (action.type) {
    case "cats/catsLoading":
      return {
        ...state,
        status: "loading",
      };
    case "cats/catsLoaded":
      return {
        ...state,
        entities: action.payload,
        status: "idle",
      };
    default:
      return state;  
  }
}
