import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {
const posts = useLoaderData();

    return (
        <div>
            <h1 className="text-4xl">Post: {posts.length} </h1>

            <div className="md:grid grid-cols-3 gap-3">

{
    posts.map(post => <Post key={post.id} post={post}></Post>)
}

            </div>
        </div>
    );
};

export default Posts;