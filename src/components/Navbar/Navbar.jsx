import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";

import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="navbar_container">
        <input
          type="text"
          className="navbar_search"
          placeholder="Search the items...."
        />
      </div>
      <div className="profile_container">
        <a href="#">
          <FiHeart className="navbar_icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="navbar_icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="navbar_icons" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
