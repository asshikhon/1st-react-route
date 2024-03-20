import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
const error = useRouteError();
console.log(error);
    return (
        <div>
            <h2 className="text-3xl">Oops!!</h2>
            <p>{error.statusText || error.message}</p>

            {
error.status === 404 && <div>
    <h3 className="text-7xl">Page not found</h3>
    <p>go back where you from</p>
   <Link to="/"> <button className="btn bg-red-500 py-2 px-4 ">Home</button></Link>
</div>

            }
        </div>
    );
};

export default ErrorPage;