import ScrollToTop from "./components/scrollToTop";
import Activity from "./sections/activity/Activity";
import Destinations from "./sections/destinations/Destinations";
import Home from "./sections/home/Home";
import Tours from "./sections/tours/Tours";
import Shared from "./sections/shared/Shared";
import Review from "./sections/review/Review";
import Footer from "./components/footer/Footer";
import Newsletter from "./components/newsletter/Newsletter";

export default function App() {
    return (
        <div>
            <Home />
            <Destinations />
            <Activity />
            <Tours />
            <Shared />
            <Review />
            <Newsletter />
            <Footer />

            <ScrollToTop />
        </div>
    );
}
