import Container from "../../components/ui/container/Container";
import SectionTitle from "../../components/ui/section-title/SectionTitle";
import SectionPath from "../../components/ui/section-path/SectionPath";
import "./Destinations.css";

import malaysia from "../../../public/malaysia.png";
import dubai from "../../../public/dubai.png";
import greece from "../../../public/greece.png";
import singapore from "../../../public/singapore.png";
import Button from "../../components/ui/button/Button";
import CardTitle from "../../components/ui/card-title/CardTitle";

export default function Destinations() {
    const tours = [
        { name: "Malaysia", tours: 16, img: malaysia },
        { name: "Dubai", tours: 16, img: dubai },
        { name: "Greece", tours: 16, img: greece },
        { name: "Singapore", tours: 16, img: singapore },
    ];

    return (
        <section className="destinations" id="destinations">
            <Container>
                <SectionTitle label="Choose your" />
                <SectionPath label="destination" />

                <div className="destinations__gallery">
                    <div className="gallery__left">
                        <div className="gallery__item large">
                            <img src={tours[0].img} alt={tours[0].name} />
                            <div className="destination__overlay">
                                <CardTitle label={tours[0].name} />
                                <Button label={`${tours[0].tours} Tours`} />
                            </div>
                        </div>
                    </div>
                    <div className="gallery__right">
                        <div className="gallery__top">
                            <div className="gallery__item small">
                                <img src={tours[1].img} alt={tours[1].name} />
                                <div className="destination__overlay">
                                    <CardTitle label={tours[1].name} />

                                    <Button label={`${tours[1].tours} Tours`} />
                                </div>
                            </div>
                            <div className="gallery__item small">
                                <img src={tours[2].img} alt={tours[2].name} />
                                <div className="destination__overlay">
                                    <CardTitle label={tours[2].name} />

                                    <Button label={`${tours[2].tours} Tours`} />
                                </div>
                            </div>
                        </div>
                        <div className="gallery__item wide">
                            <img src={tours[3].img} alt={tours[3].name} />
                            <div className="destination__overlay">
                                <CardTitle label={tours[3].name} />

                                <Button label={`${tours[3].tours} Tours`} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="destination__view">
                    <Button label="View More" />
                </div>
            </Container>
        </section>
    );
}
