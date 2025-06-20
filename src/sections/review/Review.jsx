import "./Review.css";
import Container from "../../components/ui/container/Container";
import SectionPath from "../../components/ui/section-path/SectionPath";
import SectionTitle from "../../components/ui/section-title/SectionTitle";

export default function Review() {
    return (
        <div className="review">
            <Container>
                <SectionTitle label="Review & Testimonials" />
                <SectionPath label="top reviews for etour" />
                <p className="review__title">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                </p>

                <div className="review__wrapper">
                    <div className="review__quotes">
                        <img
                            src="/src/assets/review-quotes.png"
                            alt="Review Quotes"
                        />
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s.....
                        </p>
                    </div>

                    <div className="review__users">
                        <img src="/src/assets/users-1.png" alt="User-1" />
                        <img src="/src/assets/users-2.png" alt="User-2" />
                        <img src="/src/assets/users-3.png" alt="User-3" />
                        <div className="review__user__selected">
                            <img src="/src/assets/users-4.png" alt="User-4" />
                            <div>
                                <h3>Scarlett Thomas</h3>
                                <p>Singapore</p>
                            </div>
                        </div>
                        <img src="/src/assets/users-5.png" alt="User-5" />
                        <img src="/src/assets/users-6.png" alt="User-6" />
                    </div>
                </div>
            </Container>
        </div>
    );
}
