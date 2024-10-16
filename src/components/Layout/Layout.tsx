import Header from "../Header/Header";
import Home from "../Home/Home";
import Skills from "../Skills/Skills";
import WorksList from "../WorksList/WorksList";
import Footer from "../Footer/Footer";
import AboutMe from "../AboutMe/AboutMe";
import { useRef } from "react";

const Layout = () => {
    const myRef = useRef<HTMLElement>(null)

    // const handleScroll = () => {
    //     console.log('myRef - 2', myRef);
    //     if (myRef.current) {
    //         const ref = myRef.current
    //         setTimeout(() => {
    //             ref.scrollIntoView({
    //                 behavior: 'smooth'
    //             })
    //         }, 300)
    //     }
    // }

    return (
        <>
            <Header />
            <Home />
            <AboutMe />
            <Skills />
            <WorksList />
            <Footer myRef={myRef} />
        </>
    );
}

export default Layout;