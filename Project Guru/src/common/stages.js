stagesImagePath = "@/resources/Stages/Images"

window.onload = () => {
    console.log("Window loaded")
    const stagesContainer = document.getElementById('stages_container');
    const stagesDiv = getStagesDiv()
    stagesContainer.appendChild(stagesDiv)
}

const stageNames = [
    "Clocaenog Mid",
    "Penmachno South",
    "Myherin",
    "Hafren",
    "Dyfi",
    "Gartheiniog",
    "Chirdonhead",
    "Falstone",
    "Kershope",
    "Pundershaw",
    "Riccarton",
    "Newcastleton",
    "Twiglees",
    "Yair",
    "Cardrona",
    "Black Lock",
    "Glentrool",
    "Ae",
    "Moon and Star",
    "Bothwell",
    "Whitchester",
    "Eccles",
    "Langton",
    "Fogo",
    "Hamilton's Folly",
    "Tyrones Ditches",
    "Feeney",
    "Parkanaur",
    "Lisnamuck",
    "Tardree",
    "Port Soderick",
    "Ballagyr",
    "Curraghs",
    "Tholt-y-Will",
    "Injerbreck",
    "Cringle"
]

function getStagesDiv(){
    const stagesDiv = document.createElement("div");
    for(let rallyNumber = 0; rallyNumber < 6; rallyNumber++){
        const rallyContainer = document.createElement("div");
        rallyContainer.className = "rallyContainer"
        for(let stageNumber= 0; stageNumber < 6; stageNumber++){
            rallyContainer.appendChild(getStageContainer(6*rallyNumber+stageNumber))
        }
        stagesDiv.appendChild(rallyContainer)
    }
    return stagesDiv
}

function getStageContainer(stageNumber){
    const imagePath = stagesImagePath + `/stage${toFixedLengthString(stageNumber, 2)}.png`
    const stageName = stageNames[stageNumber]
    const stageContainer = document.createElement('span');
    stageContainer.className = 'stageContainer'
    const stageNameSpan = document.createElement('span')
    stageNameSpan.className = "stageName"
    stageNameSpan.innerHTML = stageName
    stageContainer.appendChild(stageNameSpan)
    const stageImage = document.createElement('img')
    stageImage.src = imagePath
    stageImage.className = "stageImage"
    stageContainer.appendChild(stageImage)
    return stageContainer
}