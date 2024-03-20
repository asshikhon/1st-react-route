import { Link, useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title , body} = post;

    return (
        <div>
            <h3>Post Details about: {id}</h3>
          
            <p className="text-xl">Title: {title}</p>
            <p>Title: {body}</p>
            <Link to={-1}>Back Now</Link>
        </div>
    );
};

export default PostDetails;