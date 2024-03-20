import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const UserDerail = () => {

const user = useLoaderData();
const {userId} = useParams();
const navigate = useNavigate()
const {name, website} =user;
console.log(userId);
const handleGoBack = ( ) => {

navigate(-1)

}

    return (
        <div>
            <h2 className="text-3xl">Detail about user: {name}</h2>
            <p>Website: {website}</p>
            <button onClick={handleGoBack} className="btn bg-red-800 px-3 py-2 text-white rounded-xl">Go back</button>
        </div>
    );
};

export default UserDerail;