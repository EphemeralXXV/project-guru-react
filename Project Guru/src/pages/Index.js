import favo from '../resources/favo.gif';
import navleft from '../resources/navleft.png';
import navright from '../resources/navright.png';
import spinningKey from '../resources/spinningKey.gif';
import { expandNavbar, turnButtonRed, turnButtonWhite } from './preload';
import Styles from './Index.module.css';

const IndexPage = () => {
    // <head>
    //     <meta charset = "UTF-8">
    //     <meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
    //     <title>Index</title>
    //     <link rel = "icon" type = "image/png" href = "../resources/PG/icon.png">
    //     <link rel = "stylesheet" href = "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    //     <link rel = "stylesheet" href = "../css/style.css">
    //     <script src = "https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity = "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    //     <script src = "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity = "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin = "anonymous"></script>
    //     <script src = "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity = "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin = "anonymous"></script>
    //     <script type = "text/javascript" src = ../js/preload.js></script>
    // </head>
    return (
        <div>
            <div id = {Styles.navbarCollapsed} onClick = {expandNavbar} />
            <div id = {Styles.navbarExpanded}>
                <img src = {favo} />
            </div>
            
            <div id = {Styles.menu_container}> {/*Container for the whole menu dashboard*/}
                <div className = {Styles.menu_item} id = {Styles.menu_forum}> {/*Container for individual menu item (icon + button)*/}
                    <div className = {Styles.menu_icon} id = {Styles.menu_forum_icon}> {/*Container for spinning menu icon*/}
                        <img src = {spinningKey} alt = "Forum" />
                    </div>
                    <div className = {Styles.menu_button} id = {Styles.menu_forum_button}> {/*Container for menu button*/}
                        <div onMouseOver = {turnButtonRed(this)} onMouseOut = {turnButtonWhite(this)}>
                            <a href = "forum.html">
                                <img className = {Styles.leftArrow} src = {navleft} />
                                <span className = {Styles.button_center} id = {Styles.forum_button}>Forum</span>
                                <img className = {Styles.rightArrow} src = {navright} />
                            </a>
                        </div>  
                    </div>
                </div>
                <div className = {Styles.menu_item} id = {Styles.menu_contests}>
                    <div className = {Styles.menu_icon} id = {Styles.menu_contests_icon}>
                        <img src = "../resources/spinningReturn.gif" alt = "Contests" />
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
                        <img src = "../resources/spinningKey.gif" alt = "Downloads" />
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
                        <img src = "../resources/spinningReturn.gif" alt = "Wiki" />
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
                        <img src = "../resources/spinningKey.gif" alt = "Wiki" />
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
                        <img src = "../resources/spinningReturn.gif" alt = "Misc" />
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
                </div>
            </div>
            
            <footer>
                <p>https://ephemeralxxv.github.io/ Copyright <span style = {{'font-family': 'sans-serif'}}>&copy;</span> Project Guru, 2022. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default IndexPage;