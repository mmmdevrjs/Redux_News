import React from "react";
import { useForm } from "react-hook-form";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { newAddForm } from "../redux/actions";
import Filter from "./Filter";

function NewForm(props) {
  const { register, handleSubmit, reset } = useForm();
  const { news } = useSelector((state) => state);
  const dispatch = useDispatch();

  const postFunc = (object) => {
    fetch("http://localhost:3001/news", {
      method: "POST",
      body: JSON.stringify(object),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const onSubmit = (data) => {
    const newData = { ...data, id: v4() };
    dispatch(newAddForm([...news, newData]));
    postFunc(newData);
    reset();
  };

  return (
    <div className="formBox">
      <form
        className="shadow-lg rounded p-4 border form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="newNews">Name for new news</label>
        <br />
        <input
          type="text"
          id="newNews"
          placeholder="What is name of news"
          {...register("name")}
          required
        />
        <br />
        <label htmlFor="description">Description</label>
        <br />

        <textarea
          {...register("description")}
          required
          type="text"
          id="description"
          placeholder="what is name of news"
        ></textarea>
        <br />

        <label htmlFor="category">Choose category of news</label>
        <select id="category" {...register("category")}>
          <option disabled>select about news category</option>
          <option value="O'zbekiston">O'zbekiston</option>
          <option value="Jahon">Jahon</option>
          <option value="Iqtisod">iqtisod</option>
        </select>
        <button>Create News</button>
      </form>
      <Filter />
    </div>
  );
}

export default NewForm;
