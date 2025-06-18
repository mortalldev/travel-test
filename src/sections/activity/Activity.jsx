import Container from "../../components/ui/container/Container";
import SectionPath from "../../components/ui/section-path/SectionPath";
import SectionTitle from "../../components/ui/section-title/SectionTitle";
import { activities } from "../../constants";
import "./Activity.css";

export default function Activity() {
    return (
        <section className="activity" id="activity">
            <Container>
                <SectionTitle label="Travel by" />
                <SectionPath label="activity" />
                <p className="activity__title">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                </p>

                <div className="activity__cards">
                    {activities.map((active) => (
                        <div key={active.name} className="activity__card">
                            <img
                                src={`/public/activity-${active.name
                                    .split(" ")
                                    .join("")
                                    .toLowerCase()}.svg`}
                                alt=""
                            />

                            <h3 className="activity__card__title">
                                {active.name}
                            </h3>

                            <p className="activity__card__desc">
                                {active.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
