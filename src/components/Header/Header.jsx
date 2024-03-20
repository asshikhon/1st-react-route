import { Link, NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            
<nav className="flex gap-5">

<Link to='/'>Home</Link>
<NavLink to='/users'>Users</NavLink>
<NavLink to='/posts'>Posts</NavLink>
<Link to='/about'>About</Link>
<Link to='/contact'>Contact Us</Link>

</nav>

        </div>
    );
};

export default Header;