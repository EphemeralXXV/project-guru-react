const abridgeDescription = (description) => {
    description.trim();
    if(description.length >= 100) {
        description = description.substring(0, 98) + "...";
    }
    return description; 
}

export default abridgeDescription;