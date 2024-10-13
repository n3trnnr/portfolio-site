import Header from "../Header/Header";
import Home from "../Home/Home";
import Skills from "../Skills/Skills";
import WorksList from "../WorksList/WorksList";
import Footer from "../Footer/Footer";
import AboutMe from "../AboutMe/AboutMe";

const Layout = () => {
    return (
        <>
            <Header />
            <Home />
            <AboutMe />
            <Skills />
            <WorksList />
            <Footer />
        </>
    );
}

export default Layout;