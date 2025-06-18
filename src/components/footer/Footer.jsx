import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Container from "../ui/container/Container";
import "./Footer.css";
import { footerLinks } from "../../constants";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__overlay">
                <Container className={"footer__container"}>
                    <div className="footer__info">
                        <h1>
                            <a href="#home" className="footer__logo">
                                Listee Travel
                            </a>
                        </h1>
                        <p className="footer__about__desc">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                        <div className="footer__social__links">
                            <FaFacebook size={30} />
                            <FaInstagram size={30} />
                            <FaYoutube size={30} />
                            <FaTwitter size={30} />
                        </div>
                    </div>

                    {footerLinks.map((item) => (
                        <div key={item.title} className={item.className}>
                            <ul className="footer__collection">
                                {item.title}
                                {item.links.map((link) =>
                                    item.className === "footer__contact" ? (
                                        <li className="footer__item">{link}</li>
                                    ) : (
                                        <li className="footer__item">
                                            <a href="#">{link}</a>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    ))}
                </Container>
            </div>
        </footer>
    );
}
