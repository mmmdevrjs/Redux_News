import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newsFetching, newsFetched } from "../redux/actions";
import NewListItem from "./NewListIIem";

function NewList() {
  const { news, newsLoadingStatus, filterName } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsFetching());
    fetch("http://localhost:3001/news")
      .then((response) => response.json())
      .then((data) => dispatch(newsFetched(data)));
    // eslint-disable-next-line
  }, []);

  if (newsLoadingStatus === "Loading") {
    return <h1>Loading</h1>;
  } else if (newsLoadingStatus === "Error") {
    return <h1>Error</h1>;
  }

  const filteredFunc = (obj, category) => {
    if (category === "") {
      return obj;
    } else if (obj.category === category) {
      return obj;
    }
  };

  const renderNewList = (arr) => {
    if (arr.length === 0) {
      return <h1>No dosen't exist</h1>;
    }
    return arr
      .filter((arr) => filteredFunc(arr, filterName))
      .map(({ id, ...props }) => {
        return <NewListItem key={id} id={id} {...props} />;
      });
  };
  const element = renderNewList(news);
  return <ul>{element}</ul>;
}

export default NewList;
