import { navbarLinks } from "../../constants";
import Button from "../ui/button/Button";
import "./NavbarMenu.css";
import { FiX } from "react-icons/fi";

export default function NavbarMenu({ setOpen }) {
    const handleClose = () => setOpen(false);

    return (
        <div className="navbar__menu open">
            <div className="navbar__menu__backdrop" onClick={handleClose}></div>
            <div className="navbar__sidebar">
                <button className="navbar__close" onClick={handleClose}>
                    <FiX size={24} style={{ color: "#000" }} />
                </button>

                <ul className="navbar__menu__collection">
                    {navbarLinks.map((item) => (
                        <li key={item.id} className="navbar__menu__item">
                            <a
                                href={`#${item.path}`}
                                className="navbar__menu__link"
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="navbar__menu__btns">
                    <button className="navbar__menu__login__btn">
                        Sign In
                    </button>
                    <Button label="SignUp" width="100%" />
                </div>
            </div>
        </div>
    );
}
