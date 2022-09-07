import spinningComputers from '@/resources/spinningComputers.gif';
import spinningArcade from '@/resources/spinningArcade.gif';
import spinningFloppy from '@/resources/spinningFloppy.gif';
import spinningSign from '@/resources/spinningSign.gif';
import spinningKey from '@/resources/spinningKey.gif';
import spinningCone from '@/resources/spinningCone.gif';

import MenuItem from '@/components/MenuItem';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import Styles from './Index.module.css';

const IndexPage = () => {
    return (
        <div id = {Styles.page}>
            <Navbar />
            <div id = {Styles.menuContainer}> {/*Container for the whole menu dashboard*/}
                <MenuItem name = 'Forum' img = {spinningComputers} />
                <MenuItem name = 'Contests' img = {spinningArcade} />
                <MenuItem name = 'Downloads' img = {spinningFloppy} />
                <MenuItem name = 'Wiki' img = {spinningSign} />
                <MenuItem name = 'Community' img = {spinningKey} />
                <MenuItem name = 'Misc' img = {spinningCone} />
            </div>
            <Footer />
        </div>
    );
}

export default IndexPage;