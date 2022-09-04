import spinningKey from '../resources/spinningKey.gif';
import spinningReturn from '../resources/spinningReturn.gif';

import MenuItem from '../components/MenuItem';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Styles from './Index.module.css';

const IndexPage = () => {
    return (
        <div id = {Styles.page}>
            <Navbar />
            <div id = {Styles.menuContainer}> {/*Container for the whole menu dashboard*/}
                <MenuItem name = 'Forum' img = {spinningKey} />
                <MenuItem name = 'Contests' img = {spinningReturn} />
                <MenuItem name = 'Downloads' img = {spinningKey} />
                <MenuItem name = 'Wiki' img = {spinningReturn} />
                <MenuItem name = 'Community' img = {spinningKey} />
                <MenuItem name = 'Misc' img = {spinningReturn} />
                {/* <div className = {Styles.menu_item} id = {Styles.menu_contests}>
                    <div className = {Styles.menu_icon} id = {Styles.menu_contests_icon}>
                        <img src = {spinningReturn} alt = "Contests" />
                    </div>
                    <div className = {Styles.menu_button} id = {Styles.menu_contests_button}>
                        <div onMouseOver = {turnButtonRed(this)} onMouseOut = {turnButtonWhite(this)}>
                            <a href = "contests.html">
                                <img className = {Styles.leftArrow} src = {navleft} />
                                <span className = {Styles.button_center} id = {Styles.forum_button}>Contests</span>
                                <img className = {Styles.rightArrow} src = {navright} />
                            </a>
                        </div>  
                    </div>
                </div>
                <div className = {Styles.menu_item} id = {Styles.menu_downloads}>
                    <div className = {Styles.menu_icon} id = {Styles.menu_downloads_icon}>
                        <img src = {spinningKey} alt = "Downloads" />
                    </div>
                    <div className = {Styles.menu_button} id = {Styles.menu_downloads_button}>
                        <div onMouseOver = {turnButtonRed(this)} onMouseOut = {turnButtonWhite(this)}>
                            <a href = "downloads.html">
                                <img className = {Styles.leftArrow} src = {navleft} />
                                <span className = {Styles.button_center} id = {Styles.downloads_button}>Downloads</span>
                                <img className = {Styles.rightArrow} src = {navright} />
                            </a>
                        </div>  
                    </div>
                </div>
                <div className = {Styles.menu_item} id = {Styles.menu_wiki}>
                    <div className = {Styles.menu_icon} id = {Styles.menu_wiki_icon}>
                        <img src = {spinningReturn} alt = "Wiki" />
                    </div>
                    <div className = {Styles.menu_button} id = {Styles.menu_wiki_button}>
                        <div onMouseOver = {turnButtonRed(this)} onMouseOut = {turnButtonWhite(this)}>
                            <a href = "wiki.html">
                                <img className = {Styles.leftArrow} src = {navleft} />
                                <span className = {Styles.button_center} id = {Styles.wiki_button}>Wiki</span>
                                <img className = {Styles.rightArrow} src = {navright} />
                            </a>
                        </div>  
                    </div>
                </div>
                <div className = {Styles.menu_item} id = {Styles.menu_community}>
                    <div className = {Styles.menu_icon} id = {Styles.menu_community_icon}>
                        <img src = {spinningKey} alt = "Wiki" />
                    </div>
                    <div className = {Styles.menu_button} id = {Styles.menu_community_button}>
                        <div onMouseOver = {turnButtonRed(this)} onMouseOut = {turnButtonWhite(this)}>
                            <a href = "community.html">
                                <img className = {Styles.leftArrow} src = {navleft} />
                                <span className = {Styles.button_center} id = {Styles.community_button}>Community</span>
                                <img className = {Styles.rightArrow} src = {navright} />
                            </a>
                        </div>  
                    </div>
                </div>
                <div className = {Styles.menu_item} id = {Styles.menu_misc}>
                    <div className = {Styles.menu_icon} id = {Styles.menu_misc_icon}>
                        <img src = {spinningReturn} alt = "Misc" />
                    </div>
                    <div className = {Styles.menu_button} id = {Styles.menu_misc_button}>
                        <div onMouseOver = {turnButtonRed(this)} onMouseOut = {turnButtonWhite(this)}>
                            <a href = "misc.html">
                                <img className = {Styles.leftArrow} src = {navleft} />
                                <span className = {Styles.button_center} id = {Styles.wiki_button}>Misc</span>
                                <img className = {Styles.rightArrow} src = {navright} />
                            </a>
                        </div>  
                    </div>
                </div> */}
            </div>
            <Footer />
        </div>
    );
}

export default IndexPage;