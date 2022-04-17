export const newsFetching = () => {
  return {
    type: "NEWS_FETCHING",
  };
};

export const newsFetched = (news) => {
  return {
    type: "NEWS_FETCHED",
    payload: news,
  };
};

export const newsFetchingError = () => {
  return {
    type: "NEWS_FETCHING_ERROR",
  };
};

export const newsDeleted = (id) => {
  return {
    type: "NEWS_DELETED",
    payload: id,
  };
};

export const newAddForm = (newForm) => {
  return {
    type: "NEW_ADD_FORM",
    payload: newForm,
  };
};

export const newsFiltered = (categoryName) => {
  return {
    type: "FILTERED",
    payload: categoryName,
  };
};
