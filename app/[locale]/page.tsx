import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import Benefits from "../../components/Benefits/Benefits";
import About from "../../components/About/About";
import Filter from "../../components/Filter/Filter";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Carousel />
            <Benefits />
            <About />
            <Filter />
            <Faq />
            <Footer />
        </>
    );
}
