import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.css";
import PostsList from "./PostsList";

function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/project")
      .then((response) => response.data)
      .then((dbdata) => {
        setData(dbdata);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header" />
      <div className="root_compo">
        <p>Welcome to my portfolio</p>
        {data ? <PostsList projects={data} /> : null}
      </div>
    </div>
  );
}

export default Home;
