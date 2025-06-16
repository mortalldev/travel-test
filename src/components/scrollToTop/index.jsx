import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import "./ScrollToTop.css";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 120);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleScrollToTop = () => {
        const homeSection = document.getElementById("home");
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        visible && (
            <div
                className="scroll__to__top primary-background"
                onClick={handleScrollToTop}
            >
                <FiArrowUp size={24} />
            </div>
        )
    );
}
