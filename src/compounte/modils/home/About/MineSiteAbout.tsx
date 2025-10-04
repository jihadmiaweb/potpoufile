import LiftsiteAbout from "@/compounte/modils/home/About/liftsiteAbout";
import RightSiteAbout from "@/compounte/modils/home/About/RightSiteAbout";

function MineSiteAbout() {
    return (

        <div className="h-auto min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 px-5 md:px-12 py-10 items-center">

            <LiftsiteAbout />


            <RightSiteAbout />
        </div>

    );
}

export default MineSiteAbout;