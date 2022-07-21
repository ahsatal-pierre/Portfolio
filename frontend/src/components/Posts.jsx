import { useState } from "react";
import "./Posts.css";

function Post(props) {
  const { title, content, techno, photo, lien } = props;
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
        <>
          <h4>made with {techno}</h4>
          <h4>{content}</h4>
          <img src={lien} alt="projectPict  " />
          <button
            id="button2"
            type="button"
            onClick={() => openInNewTab(`https://${photo}`)}
          >
            Take a look
          </button>
        </>
      )}
    </div>
  );
}

export default Post;
