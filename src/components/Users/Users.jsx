import { useLoaderData } from "react-router-dom";
import User from "../User/User";
// import './User.css'

const Users = () => {
    const users = useLoaderData();

    return (
        <div className="text-center">
            <h2 className="text-2xl">Our Users: {users.length}</h2>

            <div className="md:grid grid-cols-3 gap-3">
                {users.map(user => (
                    <User key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default Users;
