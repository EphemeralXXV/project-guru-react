import { Helmet } from "react-helmet";

import spinningComputers from "@/resources/spinningComputers.gif";
import spinningArcade from "@/resources/spinningArcade.gif";
import spinningFloppy from "@/resources/spinningFloppy.gif";
import spinningSign from "@/resources/spinningSign.gif";
import spinningKey from "@/resources/spinningKey.gif";
import spinningCone from "@/resources/spinningCone.gif";

import MenuItem from "@/components/MenuItem";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Styles from "@/pages/Index.module.scss";

const IndexPage: React.FC<{}> = () => {
    return (
        <>            
            <Helmet>
                <meta charSet = "UTF-8" />
                <meta name = "viewport" content = "width = device-width, initial-scale = 1.0" />
                <title>Index</title>
                <link
                    rel = "stylesheet"
                    href = "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                    integrity = "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                    crossOrigin = "anonymous"
                />
                <script
                    src = "https://code.jquery.com/jquery-3.4.1.slim.min.js"
                    integrity = "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
                    crossOrigin = "anonymous"
                />
                <script
                    src = "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                    integrity = "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                    crossOrigin = "anonymous"
                />
                <script
                    src = "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
                    integrity = "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
                    crossOrigin = "anonymous"
                />
            </Helmet>
            <div id = {Styles.page}>    
                <Navbar />
                <div id = {Styles.menuContainer}> {/*Container for the whole menu dashboard*/}
                    <MenuItem name = "Forum" imgURL = {spinningComputers} redirectURL = {"https://rc2000.forumotion.com/"} />
                    <MenuItem name = "Contests" imgURL = {spinningArcade} />
                    <MenuItem name = "Downloads" imgURL = {spinningFloppy} />
                    <MenuItem name = "Wiki" imgURL = {spinningSign} />
                    <MenuItem name = "Community" imgURL = {spinningKey} />
                    <MenuItem name = "Misc" imgURL = {spinningCone} />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default IndexPage;