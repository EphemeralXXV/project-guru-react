import { isArray } from "@craco/craco/lib/utils";
import { Link } from "react-router-dom";

// Predefined contest collection
export const contests = {
    MFMI21: {
        name: "Magnetic Fields Memorial Invitational 2021",
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
        series: "MFMI",
        host: ["Ephemeral", "Linotrix"]
    },
    TheFrostyChase: {
        name: "The Frosty Chase",
        poster: "https://cdn.discordapp.com/attachments/199990758089031680/899748906949283880/tfc.png",
        overview: "The time has come! Here you can see who will be taking part in the final community event of this year!\nGiven that bono, my entire midfield [of the community] is gone - 8 of us is a decently-nice number - in my opinion!\nI will assign us the contest role and I will inform/remind you about some things related to the event later today!",
        rules: "There are no rules",
        itinerary: "Everywhere at the end of time",
        results: "Nobody wins!", 
        startDate: "12/18/2021",
        endDate: "12/19/2021",
        series: "none",
        host: "Linotrix"
    },
    Masters: {
        name: "MOBIL 1 RALLY CHAMPIONSHIP MASTERS 2021",
        poster: "https://cdn.discordapp.com/attachments/790641444431462401/799324436985675786/header.png",
        overview: "The first ever Mobil 1 Rally Championship Masters edition!\n\nThe Event is based on the real life FIA Hillclimb Masters event which is held every two (2) years, so should be the case here as well. It is very unique, nothing similar has been held yet in the game! The Event regulations are very similar to the Hillclimb Masters one, but not literally the same.",
        rules: "There are no rules",
        itinerary: "Everywhere at the end of time",
        results: "Nobody wins!", 
        startDate: "02/14/2021",
        endDate: "02/14/2021",
        series: "none",
        host: "Linotrix"
    },
    MFMI20: {
        name: "MFMI20",
        poster: "",
        overview: "The Magnetic Fields Memorial Invitational 2020 (MFMI 2020) is a Rally Championship 2000 contest that anybody can join, where the goal is to best the other participants in an A8 Championship playthrough, by acquiring the most points throughout the competition. The points are awarded after each rally, based on the rally rank. The maximum number of points achievable in a single rally depends on the number of participants. For example, the best result out of 10 competitors will be rewarded with 10 points, and with each lower rank, the amount of points decreases by 1 (so the 2nd place will get 9 points, 3rd — 8 points, and so on).",
        rules: "There are no rules",
        itinerary: "Everywhere at the end of time",
        results: "Nobody wins!", 
        startDate: "07/15/2020",
        endDate: "08/01/2020",
        series: "MFMI",
        host: ["Ephemeral", "Linotrix"]
    },
    BRCMilestoneRumble: {
        name: "BRC: Milestone Rumble",
        poster: "",
        overview: "BRC: Milestone Rumble is a Rally Championship 2000 contest, where your goal is to conquer all 6 rallies in the BRC Championship mode, which features legendary cars from classes A5, A6 and A7, and do so the faster than your opponents. This event marks the 4th anniversary of the modern-day RC2K community, hence the name. Fasten your seatbelts and get ready to rumble!",
        rules: "There are no rules",
        itinerary: "Everywhere at the end of time",
        results: "Nobody wins!", 
        startDate: "01/14/2020",
        endDate: "01/28/2020",
        series: "none",
        host: "Ephemeral"
    },
    Mobil1Tetrathlon: {
        name: "Mobil 1 Tetrathlon",
        poster: "",
        overview: "Greetings and salutations!\n\nWelcome to the first annual Mobil 1 Tetrathlon! This event will serve as the appetizer before the main course, which will be (a renamed version of) the Magnetic Fields 30 Year Anniversary Invitational (I will make a separate post regarding that later).",
        rules: "There are no rules",
        itinerary: "Everywhere at the end of time",
        results: "Nobody wins!", 
        startDate: "02/10/2019",
        endDate: "02/17/2019",
        series: "none",
        host: "Ephemeral"
    },
    RallyMania2019: {
        name: "RallyMania 2019",
        poster: "",
        overview: "RallyMania will be a B-tier Rally Championship 2000 contest, which will have an impact on the yet to come 2019 edition of the Magnetic Fields Memorial Invitational.",
        rules: "There are no rules",
        itinerary: "Everywhere at the end of time",
        results: "Nobody wins!", 
        startDate: "05/03/2019",
        endDate: "05/10/2019",
        series: "none",
        host: "Ephemeral"
    },
    Mobil1Trailblazer2019: {
        name: "Mobil 1 Trailblazer 2019",
        poster: "https://media.discordapp.net/attachments/419267523070918656/637774966535880705/Logo.jpg?width=1438&height=683",
        overview: "Mobil 1 Trailblazer 2019  is a unique singles contest, which aside from driving abilities, requires planning skills and knowledge as well! Here are all the details you need to know about the Trailblazer:",
        rules: "There are no rules",
        itinerary: "Everywhere at the end of time",
        results: "Nobody wins!", 
        startDate: "10/27/2019",
        endDate: "11/04/2019",
        series: "none",
        host: "Ephemeral"
    },
    RCXX: {
        name: "Rally Championship 20th Anniversary Invitational",
        poster: "",
        overview: "As this is another entry in the same series as last year's Magnetic Fields 30 Year Anniversary Invitational, it's based around the same thing. Again, it's going to be an A8 Championship playthrough with the participants fighting to score the best times amongst each other. Except, there's a twist...",
        rules: "There are no rules",
        itinerary: "Everywhere at the end of time",
        results: "Nobody wins!", 
        startDate: "07/08/2019",
        endDate: "07/25/2019",
        series: "MFMI",
        host: ["Linotrix", "Ephemeral"]
    },
    MFMI19: {
        name: "Magnetic Fields Memorial Invitational",
        poster: "",
        overview: "This contest will be a basic playthrough of the A8 Championship, but with the rivalry being between the contest participants, not between themselves individually and the bots. There will be, however, a strict schedule that everyone will have to follow in order not to be disqualified (in case of an emergency, a participant will be allowed to complete all stages of a specified day one day in advance, as long as they inform the Championship Manager (me)).",
        rules: "There are no rules",
        itinerary: "Everywhere at the end of time",
        results: "Nobody wins!", 
        startDate: "09/03/2018",
        endDate: "09/21/2018",
        series: "MFMI",
        host: ["Linotrix", "Ephemeral"]
    }
}

// Auxiliary functions for formatting purposes
const addLinkToHosts = (hosts) => {
    return  <Link to = {"/user/" + hosts}>
                {hosts}
            </Link>; 
}
export const getHosts = (hosts) => {
    return Array.isArray(hosts) ? hosts.map((host, index) =>    // Map elements if isArray...
        <span key = {index}>
            {addLinkToHosts(host)}
            {index ? "" : ", "}
        </span>
    ) : addLinkToHosts(hosts);                                  // ...else return itself (String)
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