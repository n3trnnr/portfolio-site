import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import WorksList from "../WorksList/WorksList";
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <>
            <Header />
            <AboutMe />
            <Skills />
            <WorksList />
            <Footer />
        </>
    );
}

export default Layout;