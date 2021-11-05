import { useContext, useState } from "react";
import StoriesContext from "../context/StoriesContext";
import "./CreateStoryRoute.css";

const CreateStoryRoute = () => {
  const [input, setInput] = useState("");
  const { addStory } = useContext(StoriesContext);
  return (
    <form className="CreateStoryRoute" onSubmit={addStory}>
      <label htmlFor="author">Author</label>
      <input type="text" name="author" id="author" value={input} />
      <label htmlFor="place">Place</label>
      <input type="text" name="place" id="place" value={input} />
      <label htmlFor="silly-world">Silly World</label>
      <input
        type="text"
        name="silly-world"
        id="ausilly-worldthor"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <label htmlFor="occupation">Occupation</label>
      <input
        type="text"
        name="occupation"
        id="authoccupationor"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <label htmlFor="number">number</label>
      <input
        type="text"
        name="number"
        id="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <label htmlFor="brand-tagline">Brand Tagline</label>
      <input
        type="text"
        name="brand-tagline"
        id="brand-tagline"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Save</button>
    </form>
  );
};

export default CreateStoryRoute;
