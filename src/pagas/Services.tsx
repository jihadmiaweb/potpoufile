import AboutMe from "@/compounte/modils/home/AboutMe/AboutMe";
import Contact from "@/compounte/modils/home/contact/contact";
import Servics from "@/compounte/modils/home/Services/servics";
import ServicesSite from "@/compounte/modils/Servicess/ServicesSite";

function Services() {
    return (
        < >
            <ServicesSite />
            <Servics />
            <AboutMe />
            <Contact />
        </>);
}

export default Services;