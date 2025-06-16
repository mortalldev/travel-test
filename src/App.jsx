import ScrollToTop from "./components/scrollToTop";
import Destinations from "./sections/destinations/Destinations";
import Home from "./sections/home/Home";

export default function App() {
    return (
        <div>
            <Home />
            <Destinations />

            <ScrollToTop />
        </div>
    );
}
