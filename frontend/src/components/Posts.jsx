import { useState } from "react";
import "./Posts.css";

function Post(props) {
  const { title, content, techno, photo } = props;
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsShown(!isShown);
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="Posts">
      <h3>{title}</h3>
      <button id="button" type="button" onClick={handleClick}>
        -&gt;
      </button>
      {isShown && (
        <div className="childPost">
          <h4>made with {techno}</h4>
          <h4>{content}</h4>
          <button
            id="button2"
            type="button"
            onClick={() => openInNewTab(`https://${photo}`)}
          >
            Take a look
          </button>
        </div>
      )}
    </div>
  );
}

export default Post;
