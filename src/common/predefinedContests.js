import { Link } from "react-router-dom";

// Predefined contest collection
export const contests = {
    MFMI21: {
        name: "MFMI21",
        poster: "https://cdn.discordapp.com/attachments/419267523070918656/845239594152886292/flyer.png",
        overview: "The 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'.\n\nThe 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'.\n\nThe 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'.\n\nThe 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'.\n\nThe 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'.\n\nThe 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'.\n\nThe 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'.\n\nThe 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'.\n\nThe 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'.\n\nThe 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'.\n\nThe 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'.\n\nThe 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'.\n\n",
        rules: "There are no rules",
        itinerary: "Everywhere at the end of time",
        results: "Nobody wins!",
        startDate: "07/21/2021",
        endDate: "08/06/2021",
        series: "MFMI",
        host: ["Ephemeral", "Linotrix"]
    },
    MFMI22: {
        name: "MFMI22",
        poster: "https://cdn.discordapp.com/attachments/419267523070918656/983975697007640596/mfmi22.png",
        overview: "First of all: Hello there and welcome to the Milestone, 5th edition of the community's main and biggest event: Magnetic Fields Memorial Invitational 2022.",
        rules: "There are no rules",
        itinerary: "Everywhere at the end of time",
        results: "Nobody wins!",
        startDate: "08/08/2022",
        endDate: "08/24/2022",
        series: "MFMI",
        host: ["Ephemeral", "Linotrix"]
    },
    MFMI23: {
        name: "MFMI23",
        poster: "",
        overview: "",
        rules: "There are no rules",
        itinerary: "Everywhere at the end of time",
        results: "Nobody wins!", 
        startDate: "asdas",
        endDate: "hello world",
        series: "none",
        host: ["Ephemeral", "Linotrix"]
    }
}

// Auxiliary functions for formatting purposes
export const getHosts = (hosts) => {
    return hosts.map((host, index) =>
        <span key = {index}>
            <Link to = {"/user/" + host}>
                {host}
            </Link>
            {index ? "" : ", "}
        </span>
    )
}

export const getContestStatus = (startDate, endDate) => {
    const today = new Date();
    const [unknownStartDate, unknownEndDate] = [startDate === "TBA", endDate === "TBA"];  // Check if start date isn't announced yet (TBA)
    if(!unknownStartDate) {
        startDate = new Date(startDate);
    }
    if(!unknownEndDate) {
        endDate = new Date(endDate);
    }
    // Might want to add more checks here
    if(startDate > today || unknownStartDate) {
        return {text: "Upcoming", color: "#00FF00"};
    }
    else if(endDate < today) {
        return {text: "Finished", color: "#FF0000"};
    }
    else {
        return {text: "Ongoing", color: "#FFA500"};
    }
}