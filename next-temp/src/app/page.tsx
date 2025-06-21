import spinningComputers from "@/resources/spinningComputers.gif";
import spinningArcade from "@/resources/spinningArcade.gif";
import spinningFloppy from "@/resources/spinningFloppy.gif";
import spinningSign from "@/resources/spinningSign.gif";
import spinningKey from "@/resources/spinningKey.gif";
import spinningCone from "@/resources/spinningCone.gif";

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
                    <MenuItem name = "Forum" imgURL = {spinningComputers.src} redirectURL = {"https://rc2000.forumotion.com/"} />
                    <MenuItem name = "Contests" imgURL = {spinningArcade.src} />
                    <MenuItem name = "Downloads" imgURL = {spinningFloppy.src} />
                    <MenuItem name = "Wiki" imgURL = {spinningSign.src} />
                    <MenuItem name = "Community" imgURL = {spinningKey.src} />
                    <MenuItem name = "Misc" imgURL = {spinningCone.src} />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default IndexPage;