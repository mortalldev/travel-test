import Container from "../../components/ui/container/Container";
import SectionPath from "../../components/ui/section-path/SectionPath";
import SectionTitle from "../../components/ui/section-title/SectionTitle";
import "./Tours.css";
import { tourPackages } from "../../constants";

export default function Tours() {
    return (
        <section className="tours" id="tours">
            <Container>
                <SectionTitle label="Popular" />
                <SectionPath label="Tour Packages" />
                <p className="tours__title">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                </p>

                <div className="tours__cards">
                    {tourPackages.map((tour) => (
                        <div key={tour.path} className="tours__card">
                            <img
                                src={`/src/assets/tour-${tour.path}.png`}
                                alt={tour.title}
                            />
                            <div className="tours__card__info">
                                <div>
                                    <h3>{tour.title}</h3>
                                    <p>{tour.trip} days trip</p>
                                </div>

                                <h4>${tour.price}K</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
