import ContestPreview from "@/components/ContestPreview";

import Styles from "./Index.module.css";

const Contests = () => {
    return (
        <div id = {Styles.page}>
            <p style = {{color: "white"}}>Welcome to the Contests page!</p>
            <div id = {Styles.main} style = {{marginTop: "10%", gridColumn: "2/-2", display: "flex", justifyContent: "space-evenly"}}>
            <ContestPreview
                name = "MFMI23"
                thumbnail = ""
                description = ""
                startDate = "asdas"
                endDate = "hello world"
                series = "none"
                host = {["Ephemeral", "Linotrix"]}
            />
            <ContestPreview
                name = "MFMI22"
                thumbnail = "https://cdn.discordapp.com/attachments/419267523070918656/983975697007640596/mfmi22.png"
                description = "First of all: Hello there and welcome to the Milestone, 5th edition of the community's main and biggest event: Magnetic Fields Memorial Invitational 2022."
                startDate = "08/08/2022"
                endDate = "08/24/2022"
                series = "MFMI"
                host = {["Ephemeral", "Linotrix"]}
            />
            <ContestPreview
                name = "MFMI21"
                thumbnail = "https://cdn.discordapp.com/attachments/419267523070918656/845239594152886292/flyer.png"
                description = "The 4th(!) edition of the well-known, community's first, main, and the biggest event is just ahead of us! The general event rules are familiar to most, if not to all of us. We may have some people participating for the first time, so we will repeat 'the basics'."
                startDate = "07/21/2021"
                endDate = "08/06/2021"
                series = "MFMI"
                host = {["Ephemeral", "Linotrix"]}
            />
            </div>
        </div>
    );
}

export default Contests;