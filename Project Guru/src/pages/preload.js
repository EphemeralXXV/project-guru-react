/* Button animation */
export function turnButtonRed(button){
    // button.getElementsByClassName("leftArrow")[0].src = "../resources/navlefthover.png";
    // button.getElementsByClassName("rightArrow")[0].src = "../resources/navrighthover.png";
    // button.getElementsByTagName("span")[0].style.color = 'red';
}

export function turnButtonWhite(button){
    // button.getElementsByClassName("leftArrow")[0].src = "../resources/navleft.png";
    // button.getElementsByClassName("rightArrow")[0].src = "../resources/navright.png";
    // button.getElementsByTagName("span")[0].style.color = 'yellow';
}

/* Navbar expansion */
export function expandNavbar() {
    let navbarExpanded = document.getElementById("navbarExpanded");
    let navbarExpandedStyle = window.getComputedStyle(navbarExpanded); // Get the #navbarExpanded CSS block
    let maxHeight = navbarExpandedStyle.getPropertyValue('max-height'); // Read the value of max-height for #navbarExpanded
    
    maxHeight.replace(/\D/g, ''); // Gets rid of the unit (only the numeric value is left)
    maxHeight = parseInt(maxHeight); // Conversion from string to integer
    maxHeight = Math.abs(maxHeight - 100); // If maxHeight == 0, then maxHeight = |0 - 100| = 100; if maxHeight == 100, then maxHeight = |100 - 100| = 0
    
    navbarExpanded.style.maxHeight = `${maxHeight}%`;
}