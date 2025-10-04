import LiftSiteSkill from "@/compounte/modils/home/skill/LiftSiteSkill";
import RightSiteSkill from "@/compounte/modils/home/skill/RightSiteSkill";

function MineSiteSkill() {
    return (<div className=" w-full  grid md:grid-cols-2  ">
        <LiftSiteSkill />
        <RightSiteSkill />


    </div >);
}

export default MineSiteSkill;