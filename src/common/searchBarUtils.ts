import moment from "moment";

interface AdvancedSearchOption {
    delimiter: string,
    value: string
}

export const filterContestsByName = (nameFound: string, nameSearched: AdvancedSearchOption): boolean => {   // Used in filtering contests by advanced search name
    const delimiter = nameSearched.delimiter;
    const value = nameSearched.value;
    return delimiter === "Exact" ? nameFound === value : nameFound.toLowerCase().includes(value.trim().toLowerCase());
}

export const filterContestsByDate = (dateFound: moment.Moment, dateSearched: AdvancedSearchOption): boolean => {   // Used in filtering contests by advanced search dates
    const delimiter = dateSearched.delimiter;
    dateFound = moment(dateFound, "MM/DD/YYYY");    // MM/DD/YYYY is the default format used in contest objs
    const value = moment(dateSearched.value, "YYYY-MM-DD");
    switch(delimiter) {
        case "Before":
            return dateFound.isBefore(value);
        case "After":
            return dateFound.isAfter(value);
        default:
            return dateFound.isSame(value);
    }
}