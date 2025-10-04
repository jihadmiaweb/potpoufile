import AboutSite from "@/compounte/modils/AboutPagas/AboutSite";
import MineSiteAbout from "@/compounte/modils/home/About/MineSiteAbout";
import AboutMe from "@/compounte/modils/home/AboutMe/AboutMe";
import Contact from "@/compounte/modils/home/contact/contact";
import MineSiteSkill from "@/compounte/modils/home/skill/MineSiteSkill";

function About() {
    return (
        <>
            <AboutSite />
            <MineSiteAbout />
            <MineSiteSkill />
            <AboutMe />
            <Contact />
        </>
    );
}

export default About;