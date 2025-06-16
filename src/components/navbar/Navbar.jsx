import "./Navbar.css";
import Container from "../ui/container/Container";
import Button from "../ui/button/Button";
import { FiMenu } from "react-icons/fi";
import { navbarLinks } from "../../constants";
import NavbarMenu from "./NavbarMenu";
import { useState } from "react";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <Container>
            <nav className="navbar">
                <button>
                    <a href="#home" className="logo__font-family">
                        Listee Travel
                    </a>
                </button>

                <ul className="nav__collection">
                    {navbarLinks.map((item) => (
                        <li key={item.id} className="nav__item">
                            <a href={`#${item.path}`} className="nav__link">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="nav__login__btns">
                    <button className="nav__login__btn">Sign In</button>
                    <Button label="SignUp" />
                </div>

                <button className="nav__menu" onClick={() => setOpenMenu(true)}>
                    <FiMenu size={30} style={{ color: "#fff" }} />
                </button>

                {openMenu && <NavbarMenu setOpen={setOpenMenu} />}
            </nav>
        </Container>
    );
}
