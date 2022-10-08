import moment from "moment";

export const filterContestsByName = (nameFound, nameSearched) => {   // Used in filtering contests by advanced search name
    let delimiter = nameSearched.delimiter;
    nameSearched = nameSearched.value;
    return delimiter === "Exact" ? nameFound === nameSearched : nameFound.toLowerCase().includes(nameSearched.trim().toLowerCase());
}

export const filterContestsByDate = (dateFound, dateSearched) => {   // Used in filtering contests by advanced search dates
    let delimiter = dateSearched.delimiter;
    dateFound = moment(dateFound, "MM/DD/YYYY");    // MM/DD/YYYY is the default format used in contest objs
    dateSearched = moment(dateSearched.value, "YYYY-MM-DD");
    switch(delimiter) {
        case "Before":
            return dateFound.isBefore(dateSearched);
        case "After":
            return dateFound.isAfter(dateSearched);
        default:
            return dateFound.isSame(dateSearched);
    }
}