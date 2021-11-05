import { useContext, useState } from "react";
import StoriesContext from "../context/StoriesContext";
import Story from "../models/StoriesTemplate";

const ListStoriesRoute = () => {
  const { stories } = useContext(StoriesContext);
  return (
    <div className="ListStoriesRoute">
      <h1>Pick a story</h1>
      <ul>
        {" "}
        {stories.map((item) => (
          <li>{item.author}</li>
        ))}
        <li>test</li>
      </ul>
    </div>
  );
};

export default ListStoriesRoute;
