import moment from "moment";

export interface AdvancedSearchOption {
    delimiter: string,
    value: any
}

// Used in filtering contests by advanced search name
export const filterContestsByName = (nameFound: string | null, nameSearched: AdvancedSearchOption): boolean => {
    const delimiter = nameSearched.delimiter;
    const value = nameSearched.value;
    return delimiter === "Exact" ? nameFound === value : (nameFound == null || nameFound.toLowerCase().includes(value.trim().toLowerCase()));
}

// Used in filtering contests by advanced search dates
export const filterContestsByDate = (dateFound: Date | null, dateSearched: AdvancedSearchOption): boolean => {
    const delimiter = dateSearched.delimiter;
    const dateFoundAsMoment = moment(dateFound, "MM/DD/YYYY"); // MM/DD/YYYY is the default format used in contest objs
    const value = moment(dateSearched.value, "YYYY-MM-DD");
    switch(delimiter) {
        case "Before":
            return dateFoundAsMoment.isBefore(value);
        case "After":
            return dateFoundAsMoment.isAfter(value);
        default:
            return dateFoundAsMoment.isSame(value);
    }
}