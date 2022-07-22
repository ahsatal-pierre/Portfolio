import Post from "./Posts";
import "./Posts.css";

function PostsList({ projects }) {
  /*  console.log("project", projects); */
  return (
    <div className="Posts">
      {projects.map((project) => (
        <Post
          key={project.id}
          title={project.title}
          content={project.content}
          techno={project.techno}
          photo={project.photo}
        />
      ))}
    </div>
  );
}

export default PostsList;
