const initialState = {
  news: [],
  newsLoadingStatus: "Mirfazil",
  filters: [],
  filterName: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEWS_FETCHING":
      return {
        ...state,
        newsLoadingStatus: "Loading",
      };
    case "NEWS_FETCHED":
      return {
        ...state,
        news: action.payload,
        newsLoadingStatus: "Mirfazil",
      };
    case "NEWS_FETCHING_ERROR":
      return {
        ...state,
        newsLoadingStatus: "Error",
      };
    case "NEWS_DELETED":
      return {
        ...state,
        news: state.news.filter((obj) => obj.id !== action.payload),
      };
    case "NEW_ADD_FORM":
      return {
        ...state,
        news: action.payload,
      };
    case "FILTERED":
      return {
        ...state,
        filterName: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
