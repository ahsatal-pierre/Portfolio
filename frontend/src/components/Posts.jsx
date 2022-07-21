import { useState } from "react";
import "./Posts.css";

function Post(props) {
  const { title, content, techno, photo } = props;
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsShown(!isShown);
  };

  return (
    <div className="Posts">
      <h3>{title}</h3>
      <button type="button" onClick={handleClick}>
        -&gt;
      </button>
      {isShown && (
        <>
          <h4>made with {techno}</h4>
          <h4>{content}</h4>
          <img src={photo} alt="projectPict" />
        </>
      )}
    </div>
  );
}

export default Post;
