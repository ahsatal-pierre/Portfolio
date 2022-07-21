import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.css";
import Footer from "./Footer";
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
        <p className="blink">Portfolio</p>
        {data ? <PostsList projects={data} /> : null}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
