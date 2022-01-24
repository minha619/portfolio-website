import { Link } from "react-router-dom";

function Nav() {
    return (
        <header>
            <nav>
                <ul className="flex-row">
                    <li className="mx-5">
                        <Link to='/portfolio'>MH</Link>
                    </li>
                    <li className="mx-2">
                        <Link to='/about'>About Me</Link>
                    </li>
                    <li className="mx-2">
                        <Link to='/projects'>Projects</Link>
                    </li>
                </ul>
            </nav>
        </header>

    );
}

export default Nav;