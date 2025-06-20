import { FiArrowRight } from "react-icons/fi";
import Container from "../ui/container/Container";
import "./Newsletter.css";

export default function Newsletter() {
    return (
        <section className="newsletter">
            <img
                src="/src/assets/newsletter.png"
                alt="Newsletter"
                className="newsletter__building"
            />
            <Container className={"newsletter__container"}>
                <div className="newsletter__wrapper">
                    <h1 className="newsletter__title">
                        Get Our Monthly Newsletter
                    </h1>
                    <p className="newsletter__desc">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>

                    <div className="newsletter__input">
                        <input
                            type="text"
                            placeholder="Input your emaill address in here"
                        />

                        <button>
                            <FiArrowRight />
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
