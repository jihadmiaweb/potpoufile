import MineSiteAbout from "@/compounte/modils/home/About/MineSiteAbout";
import AboutMe from "@/compounte/modils/home/AboutMe/AboutMe";
import Contact from "@/compounte/modils/home/contact/contact";
import MineSitHeroy from "@/compounte/modils/home/hiero/mineSiteHero";
import Poject from "@/compounte/modils/home/pojecat/poject";
import Servics from "@/compounte/modils/home/Services/servics";
import MineSiteSkill from "@/compounte/modils/home/skill/MineSiteSkill";


function Home() {
    return (
        <>
            <MineSitHeroy />
            <MineSiteAbout />
            <MineSiteSkill />
            <Servics />
            <Poject />
            <AboutMe />
            <Contact />
        </>
    )
}

export default Home;