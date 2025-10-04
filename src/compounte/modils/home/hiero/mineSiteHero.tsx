import ListHider from "@/compounte/modils/home/hiero/listesitehireo";
import RightSiteHireo from "@/compounte/modils/home/hiero/rightsitHero";

function MineSitHeroy() {
    return (

        <div className="grid md:grid-cols-2 gap-5">
            <ListHider />
            <RightSiteHireo />
        </div>
    )

}

export default MineSitHeroy;