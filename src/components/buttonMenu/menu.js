import { Link } from "react-router-dom";

export function Menu() {
    return (
      <nav className="menu">
        <ul>
          <li className=" hover:text-secondary"><a href={"/"}>Portfolio</a></li>
          <li className=" hover:text-secondary"><a href={"/shop"}>Cửa hàng</a></li>
          <li className=" hover:text-secondary"><a href={"/academy"}>Academy</a></li>
          <li className=" hover:text-secondary"><a href={"/contact"}>About</a></li>
        </ul>
      </nav>
    );
  }
  