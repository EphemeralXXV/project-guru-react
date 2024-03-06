import { Link } from "react-router-dom";

// Predefined contest collection
export interface Contest {
    name: string | null,
    posterURL: string | null,
    overview: string | null,
    rules: string | null,
    itinerary: string | null,
    results: string | null,
    startDate: Date | null,
    endDate: Date | null,
    series: string | null,
    hosts: string[] | null
}
interface ContestStatus {
    text: string,
    color: string
}

export const placeholderContest: Contest = {
    name: null,
    posterURL: null,
    overview: null,
    rules: null,
    itinerary: null,
    results: null,
    startDate: null,
    endDate: null,
    series: null,
    hosts: null
};

export const contests: Contest[] = [{
    name: "Magnetic Fields Memorial Invitational 2021",
    posterURL: "https://cdn.discordapp.com/attachments/419267523070918656/845239594152886292/flyer.png?ex=65f41c37&is=65e1a737&hm=f847cc8deaa897269e3ee22b7813a1ace93234b934822f0bd7dd5b2631f246d8&",
    overview: "The 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'.\n\nThe 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'.\n\nThe 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'.\n\nThe 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'.\n\nThe 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'.\n\nThe 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'.\n\nThe 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'.\n\nThe 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'.\n\nThe 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'.\n\nThe 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'.\n\nThe 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'.\n\nThe 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'.\n\n",
    rules: "There are no rules",
    itinerary: "Everywhere at the end of time",
    results: "Nobody wins!",
    startDate: new Date("07/21/2021"),
    endDate: new Date("08/06/2021"),
    series: "MFMI",
    hosts: ["Ephemeral", "Linotrix"]
}, {
    name: "MFMI22",
    posterURL: "https://cdn.discordapp.com/attachments/419267523070918656/1005958566148059207/4_mfmi22.png?ex=65f767eb&is=65e4f2eb&hm=54d607b3956a07910a9cf286ddcf6dfa7bf19bf6c9440f689bc78bc31cf4e96b&",
    overview: "First of all: Hello there and welcome to the Milestone, 5th edition of the community's main and biggest event: Magnetic Fields Memorial Invitational 2022.",
    rules: "There are no rules",
    itinerary: "Everywhere at the end of time",
    results: "Nobody wins!",
    startDate:  new Date("08/08/2022"),
    endDate:  new Date("08/24/2022"),
    series: "MFMI",
    hosts: ["Ephemeral", "Linotrix"]
}, {
    name: "MFMI23",
    posterURL: "",
    overview: "",
    rules: "There are no rules",
    itinerary: "Everywhere at the end of time",
    results: "Nobody wins!", 
    startDate:  null,
    endDate:  null,
    series: "MFMI",
    hosts: ["Ephemeral", "Linotrix"]
}, {
    name: "The Frosty Chase",
    posterURL: "https://cdn.discordapp.com/attachments/199990758089031680/899748906949283880/tfc.png?ex=65f89d77&is=65e62877&hm=2f8a797524dd3d3855d45f0c08e889fc5f8acff37a318f9ded81d32621184c4b&",
    overview: "The time has come! Here you can see who will be taking part in the final community event of this year!\nGiven that bono, my entire midfield [of the community] is gone - 8 of us is a decently-nice number - in my opinion!\nI will assign us the contest role and I will inform/remind you about some things related to the event later today!",
    rules: "There are no rules",
    itinerary: "Everywhere at the end of time",
    results: "Nobody wins!", 
    startDate:  new Date("12/18/2021"),
    endDate:  new Date("12/19/2021"),
    series: "none",
    hosts: ["Linotrix"]
}, {
    name: "MOBIL 1 RALLY CHAMPIONSHIP MASTERS 2021",
    posterURL: "https://cdn.discordapp.com/attachments/419267523070918656/788826641304518686/IMG-20201216-WA0003.jpg?ex=65fb230e&is=65e8ae0e&hm=35c895f1e8ba8635a3748b0a284478b88840ad9020139bcf62f20722d47e70a6&",
    overview: "The first ever Mobil 1 Rally Championship Masters edition!\n\nThe Event is based on the real life FIA Hillclimb Masters event which is held every two (2) years, so should be the case here as well. It is very unique, nothing similar has been held yet in the game! The Event regulations are very similar to the Hillclimb Masters one, but not literally the same.",
    rules: "There are no rules",
    itinerary: "Everywhere at the end of time",
    results: "Nobody wins!", 
    startDate:  new Date("02/14/2021"),
    endDate:  new Date("02/14/2021"),
    series: "none",
    hosts: ["Linotrix"]
}, {
    name: "MFMI20",
    posterURL: "",
    overview: "The Magnetic Fields Memorial Invitational 2020 (MFMI 2020) is a Rally Championship 2000 contest that anybody can join, where the goal is to best the other participants in an A8 Championship playthrough, by acquiring the most points throughout the competition. The points are awarded after each rally, based on the rally rank. The maximum number of points achievable in a single rally depends on the number of participants. For example, the best result out of 10 competitors will be rewarded with 10 points, and with each lower rank, the amount of points decreases by 1 (so the 2nd place will get 9 points, 3rd — 8 points, and so on).",
    rules: "There are no rules",
    itinerary: "Everywhere at the end of time",
    results: "Nobody wins!", 
    startDate:  new Date("07/15/2020"),
    endDate:  new Date("08/01/2020"),
    series: "MFMI",
    hosts: ["Ephemeral", "Linotrix"]
}, {
    name: "BRC: Milestone Rumble",
    posterURL: "",
    overview: "BRC: Milestone Rumble is a Rally Championship 2000 contest, where your goal is to conquer all 6 rallies in the BRC Championship mode, which features legendary cars from classes A5, A6 and A7, and do so the faster than your opponents. This event marks the 4th anniversary of the modern-day RC2K community, hence the name. Fasten your seatbelts and get ready to rumble!",
    rules: "There are no rules",
    itinerary: "Everywhere at the end of time",
    results: "Nobody wins!", 
    startDate:  new Date("01/14/2020"),
    endDate:  new Date("01/28/2020"),
    series: "none",
    hosts: ["Ephemeral"]
}, {
    name: "Mobil 1 Tetrathlon",
    posterURL: "",
    overview: "Greetings and salutations!\n\nWelcome to the first annual Mobil 1 Tetrathlon! This event will serve as the appetizer before the main course, which will be (a renamed version of) the Magnetic Fields 30 Year Anniversary Invitational (I will make a separate post regarding that later).",
    rules: "There are no rules",
    itinerary: "Everywhere at the end of time",
    results: "Nobody wins!", 
    startDate:  new Date("02/10/2019"),
    endDate:  new Date("02/17/2019"),
    series: "none",
    hosts: ["Ephemeral"]
}, {
    name: "RallyMania 2019",
    posterURL: "",
    overview: "RallyMania will be a B-tier Rally Championship 2000 contest, which will have an impact on the yet to come 2019 edition of the Magnetic Fields Memorial Invitational.",
    rules: "There are no rules",
    itinerary: "Everywhere at the end of time",
    results: "Nobody wins!", 
    startDate:  new Date("05/03/2019"),
    endDate:  new Date("05/10/2019"),
    series: "none",
    hosts: ["Ephemeral"]
}, {
    name: "Mobil 1 Trailblazer 2019",
    posterURL: "https://cdn.discordapp.com/attachments/419267523070918656/637774966535880705/Logo.jpg?ex=65f618b9&is=65e3a3b9&hm=e319110ef0377a766ebe28604379f8dbb4e404529fda4caa2a848f4ba0818425&",
    overview: "Mobil 1 Trailblazer 2019  is a unique singles contest, which aside from driving abilities, requires planning skills and knowledge as well! Here are all the details you need to know about the Trailblazer:",
    rules: "There are no rules",
    itinerary: "Everywhere at the end of time",
    results: "Nobody wins!", 
    startDate:  new Date("10/27/2019"),
    endDate:  new Date("11/04/2019"),
    series: "none",
    hosts: ["Ephemeral"]
}, {
    name: "Rally Championship 20th Anniversary Invitational",
    posterURL: "",
    overview: "As this is another entry in the same series as last year's Magnetic Fields 30 Year Anniversary Invitational, it's based around the same thing. Again, it's going to be an A8 Championship playthrough with the participants fighting to score the best times amongst each other. Except, there's a twist...",
    rules: "There are no rules",
    itinerary: "Everywhere at the end of time",
    results: "Nobody wins!", 
    startDate:  new Date("07/08/2019"),
    endDate:  new Date("07/25/2019"),
    series: "MFMI",
    hosts: ["Linotrix", "Ephemeral"]
}, {
    name: "Magnetic Fields Memorial Invitational",
    posterURL: "",
    overview: "This contest will be a basic playthrough of the A8 Championship, but with the rivalry being between the contest participants, not between themselves individually and the bots. There will be, however, a strict schedule that everyone will have to follow in order not to be disqualified (in case of an emergency, a participant will be allowed to complete all stages of a specified day one day in advance, as long as they inform the Championship Manager (me)).",
    rules: "There are no rules",
    itinerary: "Everywhere at the end of time",
    results: "Nobody wins!", 
    startDate:  new Date("09/03/2018"),
    endDate:  new Date("09/21/2018"),
    series: "MFMI",
    hosts: ["Linotrix", "Ephemeral"]
}];

// Auxiliary functions for formatting purposes
export const orderContests = (contestArray: Contest[], option: keyof Contest, direction: "ascending" | "descending"): Contest[] => {
    const descending = direction !== "ascending";                                           // Defaults to descending if not explicitly ascending
    const optionIsDate = Object.prototype.toString.call(option) === '[object Date]';
    const [aThenB, bThenA] = descending ? [1, -1] : [-1, 1];                                // .sort() normally returns 1 for a>b and -1 for b>a --- reverse this if opposite order is chosen
    return contestArray.concat().sort((contestA: Contest, contestB: Contest): number => {   // .concat() makes a copy of the array instead of mutating
        let [optionA, optionB] = [contestA[option], contestB[option]];
        if(optionA == null && optionB == null) {
            return 0;
        }
        if(optionA == null) {
            return aThenB;
        }
        if(optionB == null) {
            return bThenA;
        }
        if(optionIsDate) {                                                                 // Turn into Date type if optionIsDate and isn't null, otherwise the comparison won't work
            [optionA, optionB] = [new Date(optionA as string).toString(), new Date(optionB as string).toString()];
        }
        return (optionA > optionB) ? aThenB : (optionA < optionB) ? bThenA : 0;
    });
}

const addLinkToHosts = (hosts: string): React.JSX.Element => {
    return  <Link to = {"/user/" + hosts}>
                {hosts}
            </Link>; 
}
export const getHosts = (hosts: string[]): React.JSX.Element[] => {
    return hosts.map((host: string, index: number) =>
        <span key = {index}>
            {addLinkToHosts(host)}
            {index ? "" : ", "}
        </span>
    );
}

export const getContestStatus = (startDate: Date | null | undefined, endDate: Date | null | undefined): ContestStatus => {
    const today = new Date();
    if(startDate != null) {
        startDate = new Date(startDate);
    }
    if(endDate != null) {
        endDate = new Date(endDate);
    }
    // Might want to add more checks here
    if(startDate != null && endDate != null && startDate > endDate) {
        throw new Error("Start date cannot be later than start date!");
    }
    if(startDate == null || startDate > today) {
        return {text: "Upcoming", color: "#00FF00"};
    }
    if(endDate != null && endDate < today) {
        return {text: "Finished", color: "#FF0000"};
    }
    return {text: "Ongoing", color: "#FFA500"};
}