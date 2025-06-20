import Container from "../../components/ui/container/Container";
import SectionTitle from "../../components/ui/section-title/SectionTitle";
import SectionPath from "../../components/ui/section-path/SectionPath";
import "./Destinations.css";
import Button from "../../components/ui/button/Button";
import CardTitle from "../../components/ui/card-title/CardTitle";
import { tours } from "../../constants";

export default function Destinations() {
    return (
        <section className="destinations" id="destinations">
            <Container>
                <SectionTitle label="Choose your" />
                <SectionPath label="destination" />

                <div className="destination__gallery">
                    {tours.map((tour) => (
                        <div
                            key={tour.name}
                            className={`${tour.className} destination__gallery__item`}
                        >
                            <div className="destination__gallery__overlay">
                                <CardTitle label={tour.name} />
                                <Button label="16 TOURS" />
                            </div>
                            <img
                                src={`/assets/${tour.name.toLowerCase()}.png`}
                                alt={tour.name}
                            />
                        </div>
                    ))}
                </div>

                <div className="destination__view">
                    <Button label="View More" />
                </div>
            </Container>
        </section>
    );
}
