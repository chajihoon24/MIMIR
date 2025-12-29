import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="nav__container bg">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page1">Page1</Link></li>
        <li><Link to="/page2">Page2</Link></li>
        <li><Link to="/page3">Page3</Link></li>
        <li><Link to="/page4">Page4</Link></li>
      </ul>
    </nav>
  );
}