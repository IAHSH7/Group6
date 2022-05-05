import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div class="navbar bg-info">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <Link className="btn btn-ghost normal-case text-xl" to="/">
              <h3>Home</h3>
            </Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/about">
              <h3>About</h3>
            </Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/educator">
              <h3>My Account</h3>
            </Link>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <Link to="/"><img className="h-12 m-0"src="https://cdn.discordapp.com/attachments/971825989174825001/971825991540441128/Chalkbox_1.png" alt="black-logo"></img></Link>
      </div>
      <div class="navbar-end">
        <Link to="/search"><button class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button></Link>
      </div>
    </div>
    /*TODO: USER CONDITIONAL FOR LOGOUT, MAY NEED CONTEXT OR CHECK AUTH ON NAV EVENT*/
  );
};

export default Nav;
