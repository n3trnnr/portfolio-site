import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import ProjectsList from "../WorksList/WorksList";
import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";

const Layout = () => {
    return (
        <>
            <Header />
            <AboutMe />
            <Skills />
            <ProjectsList />
            <Footer />
        </>
    );
}

export default Layout;