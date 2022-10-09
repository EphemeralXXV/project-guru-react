import Styles from "./Subpage.module.css";

import DownloadsPreview from "@/components/DownloadsPreview";

const Downloads = () => {
    return (
        <div id = {Styles.page}>
        <p style = {{color: "white"}}>Welcome to the Downloads page!</p>
            <div id = {Styles.main} style = {{marginTop: "10%", gridColumn: "2/-2", display: "flex", justifyContent: "space-evenly"}}>
                <DownloadsPreview
                    name = "RC2KEdit Fifth Release"
                    downloadLink = "https://mega.nz/file/UlAiWKDa#PLThVqBPFf_gzXL-WvfcYIUNkMQPaoiVKcUNUsUsA10"
                    thumbnail = "https://cdn.discordapp.com/attachments/638834861796229120/662680465072717824/unknown.png"
                    description = "Fully functional track editor for RC2K allowing terraforming, texture swapping, lighting modifications and so much more!"
                    category = "Tools &amp; Utilies"
                    author = "Dummiesman"
                    downloadCount = "999K+"
                    rating = {86}
                />
                <DownloadsPreview
                    name = "Tarmac Pack v0.0.1"
                    downloadLink = "https://drive.google.com/open?id=1nsaD8tzDXlsNzsKVyAQzQuJNATZ2zGaI"
                    thumbnail = "https://cdn.discordapp.com/attachments/638834861796229120/687669721968934955/unknown.png"
                    description = "This pack includes all stages with over 1% gravel coverage turned into 99%+ tarmac tracks (excluding Clocaenog Mid and the snowy stages, as they are extremely difficult to work with due to the plethora of different surfaces, etc.; the latter will probably have to be reworked into a different environment as well). There is obviously still a ton of things to be fixed, mainly texture correcting, but in many cases also texture replacement remains to be done for pretty much everything aside from the roads."
                    category = "Tracks"
                    author = "Ephemeral"
                    downloadCount = "0"
                    rating = {71}
                />
                <DownloadsPreview
                    name = "Evo V Mitsubaru v1.1"
                    downloadLink = "https://cdn.discordapp.com/attachments/638834861796229120/996507021237039165/Evo_V_Mitsubaru_v1.1.zip"
                    thumbnail = "https://media.discordapp.net/attachments/638834861796229120/996507021526454383/unknown.png"
                    description = "Bootleg 555 Impreza livery for Lancer Evo V (not original that's why it's a bootleg bruh) , gives +5 handling points and +10 to luck when using it when speedrunning"
                    category = "Skins"
                    author = "Certare"
                    downloadCount = "69K"
                    rating = {98}
                />
                <DownloadsPreview
                    name = "Rally Championship Nightmare Mode"
                    downloadLink = "https://cdn.discordapp.com/attachments/638834861796229120/676734706305466387/levels_NightMode.rar"
                    thumbnail = "https://media.discordapp.net/attachments/638834861796229120/676735553743355914/Captura_de_Tela_561.png"
                    description = "All the stages has dense fog on a rainy night! Some stages are harder than others."
                    category = "Tracks"
                    author = "Redchili385"
                    downloadCount = "666"
                    rating = {66}
                />
            </div>
        </div>
    );
}

export default Downloads;