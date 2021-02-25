import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to='/' exact>Home</NavLink>
      <NavLink to='/about'>About Us</NavLink>
      <NavLink to='/career'>Career</NavLink>
    </div>
  );
};

export default NavBar;
