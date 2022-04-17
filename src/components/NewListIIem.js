import React from "react";
import { newsDeleted } from "../redux/actions";
import { useDispatch } from "react-redux";

function NewListIIem({ id, name, description, category }) {
  let elementClassName;
  switch (category) {
    case "O'zbekiston":
      elementClassName = "bg-info bg-gradient";
      break;
    case "Jahon":
      elementClassName = "bg-danger bg-gradient";
      break;
    case "Iqtisod":
      elementClassName = "bg-warning bg-gradient";
      break;
    default:
      elementClassName = "bg-secondary bg-gradient";
  }

  const dispatch = useDispatch();
  const deletedNewsFunction = (id) => {
    dispatch(newsDeleted(id));
    fetch("http://localhost:3001/news/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <li
      className={`card flex-row shadow-lg text-white my-3 ${elementClassName}`}
    >
      <img
        src="https://storage.kun.uz/source/thumbnails/_medium/8/WDt3rp8nZdJ7FJIOkc5tu3RUV5tFXiRj_medium.jpg"
        alt="news_image"
        className="img-fluid w-25 d-inline"
        style={{ objectFit: "cover" }}
      />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <button className="btnClose" onClick={() => deletedNewsFunction(id)}>
        X
      </button>
    </li>
  );
}

export default NewListIIem;
