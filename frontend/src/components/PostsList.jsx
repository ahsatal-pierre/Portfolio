import Post from "./Posts";
import "./Posts.css";

function PostsList({ projects }) {
   console.log("project", projects);
  return (
    <div className="postsList">
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
