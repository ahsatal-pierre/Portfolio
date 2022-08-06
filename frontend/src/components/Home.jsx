import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.css";
import Gallery from "./Gallery";
import Footer from "./Footer";
import PostsList from "./PostsList";

function Home() {
  const [data, setData] = useState();
  const url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(url)
        .then((response) => response.data)
        .then((dbdata) => {
          setData(dbdata);
        });
    };

    fetchData().catch((err) => console.log("oui", err));
  }, []);

  return (
    <div className="App">
      <header className="App-header" />
      <div className="root_compo">
        <p className="blink">Portfolio</p>
        {data ? <PostsList projects={data} /> : null}
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
