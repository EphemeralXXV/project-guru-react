import MenuItem from "@/components/MenuItem";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Styles from "@/app/Index.module.scss";

const IndexPage: React.FC<{}> = () => {
    return (
        <>
            <div id = {Styles.page}>    
                <Navbar />
                <div id = {Styles.menuContainer}> {/*Container for the whole menu dashboard*/}
                    <MenuItem name = "Forum" imgURL = "/static/images/spinningComputers.gif" redirectURL = {"https://rc2000.forumotion.com/"} />
                    <MenuItem name = "Contests" imgURL = "/static/images/spinningArcade.gif" />
                    <MenuItem name = "Downloads" imgURL = "/static/images/spinningFloppy.gif" />
                    <MenuItem name = "Wiki" imgURL = "/static/images/spinningSign.gif" />
                    <MenuItem name = "Community" imgURL = "/static/images/spinningKey.gif" />
                    <MenuItem name = "Misc" imgURL = "/static/images/spinningCone.gif" />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default IndexPage;