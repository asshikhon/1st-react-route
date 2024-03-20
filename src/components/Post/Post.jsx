import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div className='border-2 border-solid border-[yellow] p-10 rounded-xl'>
            <h3 className="text-3xl">Post of id: {id}</h3>
            <p>Title: {title}</p>

            <Link to={`/post/${id}`}>Post Detail</Link>
            <Link to={`/post/${id}`}><button className='btn py-4 px-4 bg-red-800 rounded-xl'>Show Details</button></Link>
        </div>
    );
};

Post.propTypes = {
post: PropTypes.object
}

export default Post;