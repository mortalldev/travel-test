import "./Shared.css";
import Container from "../../components/ui/container/Container";
import SectionTitle from "../../components/ui/section-title/SectionTitle";
import SectionPath from "../../components/ui/section-path/SectionPath";

export default function Shared() {
    return (
        <section className="shared">
            <Container>
                <SectionTitle label="Best Traveler's" />
                <SectionPath label="Shared photos" />
                <p className="shared__title">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                </p>

                <div className="shared__cards">
                    {[1, 2, 3, 4, 5, 6].map((_, index) => (
                        <div key={index}>
                            <img
                                src={`/assets/shared-${index + 1}.png`}
                                alt={`Shared-${index}`}
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
