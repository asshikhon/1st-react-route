import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom';


const User = ({user}) => {
 
    const {name, email, id, phone} = user;
const navigate = useNavigate();

    const handleShowDetail = () => {
navigate(`/user/${id}`)
    }
    return (
        <div className='border-2 border-solid border-[yellow] p-10 rounded-xl'>
            <h2 className="text-3xl">Name: {name}</h2>
            <p>Email: {email}</p>
            <p>ID: {id}</p>
            <p>Phone: {phone}</p>
        <Link to={`/user/${id}`}>Show Details</Link>
        <Link to={`/user/${id}`}>
<button className='btn text-xl font-bold bg-[yellow] rounded-3xl ml-6 px-4 py-2'>Click Me</button>

        </Link>

        <button onClick={handleShowDetail} className='btn btn-primary'>Show more</button>
        </div>
    );
};


User.propTypes = {
    user: PropTypes.object
}
export default User;