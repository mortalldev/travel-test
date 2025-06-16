import { CiCalendar, CiLocationOn, CiSearch } from "react-icons/ci";
import Navbar from "../../components/navbar/Navbar";
import CardTitle from "../../components/ui/card-title/CardTitle";
import Container from "../../components/ui/container/Container";
import "./Home.css";

export default function Home() {
    return (
        <section className="home" id="home">
            <Navbar />

            <Container className="home__banner">
                <CardTitle label="Explorer and Travel" />
                <h1 className="home__banner__title">Let's Go Now</h1>
                <p className="home__banner__desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                </p>

                <div className="home__banner__locations">
                    <div className="banner__location">
                        <CiLocationOn size={25} />

                        <div>
                            <p className="banner__location__title">Location</p>
                            <p className="banner__location__country">
                                Uzbekistan
                            </p>
                        </div>
                    </div>
                    <div className="banner__line"></div>
                    <div className="banner__date">
                        <CiCalendar size={25} />

                        <div>
                            <p className="banner__location__title">Date</p>
                            <p className="banner__location__country">
                                16 May, 2025
                            </p>
                        </div>
                    </div>
                    <button className="banner__search primary-background">
                        <CiSearch size={25} color="#fff" />
                    </button>
                </div>
            </Container>
        </section>
    );
}
