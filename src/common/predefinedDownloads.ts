// Predefined downloads collection
export interface Download {
    name: string,
    downloadLink: string,
    thumbnailURL: string,
    description: string,
    categories: string[],
    authors: string[],
    downloadCount: number,
    rating: number,
    uploadDate: Date,
    modifiedDate: Date
}

export const downloads: Download[] = [{
    name: "RC2KEdit Fifth Release",
    downloadLink: "https://mega.nz/file/UlAiWKDa#PLThVqBPFf_gzXL-WvfcYIUNkMQPaoiVKcUNUsUsA10",
    thumbnailURL: "https://cdn.discordapp.com/attachments/638834861796229120/662680465072717824/unknown.png?ex=65f46ac6&is=65e1f5c6&hm=5169c030076ca294a599bf6d3caf9d09f765638f9e577036aa6eb4054189f41c&",
    description: "Fully functional track editor for RC2K allowing terraforming, texture swapping, lighting modifications and so much more!",
    categories: ["Tools & Utilies"],
    authors: ["Dummiesman"],
    downloadCount: 999999,
    rating: 86,
    uploadDate: new Date(),
    modifiedDate: new Date()
}, {
    name: "Tarmac Pack v0.0.1",
    downloadLink: "https://drive.google.com/open?id=1nsaD8tzDXlsNzsKVyAQzQuJNATZ2zGaI",
    thumbnailURL: "https://cdn.discordapp.com/attachments/638834861796229120/687669721968934955/unknown.png?ex=65f30ad6&is=65e095d6&hm=ef0d0282780a8b994d10b8deb9f7c388ee94ead8f3d74bf957924f22b8ffc98b&",
    description: "This pack includes all stages with over 1% gravel coverage turned into 99%+ tarmac tracks (excluding Clocaenog Mid and the snowy stages, as they are extremely difficult to work with due to the plethora of different surfaces, etc.; the latter will probably have to be reworked into a different environment as well). There is obviously still a ton of things to be fixed, mainly texture correcting, but in many cases also texture replacement remains to be done for pretty much everything aside from the roads.",
    categories: ["Tracks"],
    authors: ["Ephemeral"],
    downloadCount: 0,
    rating: 71,
    uploadDate: new Date(),
    modifiedDate: new Date()
}, {
    name: "Evo V Mitsubaru v1.1",
    downloadLink: "https://cdn.discordapp.com/attachments/638834861796229120/996507021237039165/Evo_V_Mitsubaru_v1.1.zip",
    thumbnailURL: "https://cdn.discordapp.com/attachments/638834861796229120/996507021526454383/unknown.png?ex=65f9ef7c&is=65e77a7c&hm=80010c1320dee002ce62a5e12d1e7698b0620546c2f44be28e6d7f53e04bb364&",
    description: "Bootleg 555 Impreza livery for Lancer Evo V (not original that's why it's a bootleg bruh) , gives +5 handling points and +10 to luck when using it when speedrunning",
    categories: ["Skins"],
    authors: ["Certare"],
    downloadCount: 69000,
    rating: 98,
    uploadDate: new Date(),
    modifiedDate: new Date()
}, {
    name: "Rally Championship Nightmare Mode",
    downloadLink: "https://cdn.discordapp.com/attachments/638834861796229120/676734706305466387/levels_NightMode.rar",
    thumbnailURL: "https://cdn.discordapp.com/attachments/638834861796229120/676735553743355914/Captura_de_Tela_561.png?ex=65f96819&is=65e6f319&hm=5bb89fc4a4abe2d69061f4d4bff1a227603809483fcd471ac9e2b62fe7ce08a5&",
    description: "All the stages has dense fog on a rainy night! Some stages are harder than others.",
    categories: ["Tracks"],
    authors: ["Redchili385"],
    downloadCount: 666,
    rating: 66,
    uploadDate: new Date(),
    modifiedDate: new Date()
}, {
    name: "Rally reversed mode v0.1.0",
    downloadLink: "https://drive.google.com/file/d/1HR38grecs6Ciqf39y6Iu8_l6QC-MpLZR/view?usp=sharing",
    thumbnailURL: "",
    description: "This is a mod that reverses the order of all stages and arcades, giving a new perspective of the game and an option for training.",
    categories: ["Tracks"],
    authors: ["Redchili385"],
    downloadCount: 123,
    rating: 100,
    uploadDate: new Date(),
    modifiedDate: new Date()
}, {
    name: "Rally Rebalanced Alpha 0.0.3.1",
    downloadLink: "https://cdn.discordapp.com/attachments/638834861796229120/1012407548298657942/Rally_Rebalanced_Alpha_0.0.3.1.zip",
    thumbnailURL: "",
    description: "No changes except that it's Patch 6 with no-cd applied so no more worries about havin to use an iso",
    categories: ["Physics mods"],
    authors: ["Certare"],
    downloadCount: 1,
    rating: 86,
    uploadDate: new Date(),
    modifiedDate: new Date()
}, {
    name: "Team GoodSmile Racing livery",
    downloadLink: "https://cdn.discordapp.com/attachments/638834861796229120/1008847532421566504/Team_GoodSmile_Racing.zip",
    thumbnailURL: "https://cdn.discordapp.com/attachments/638834861796229120/1008850504316633128/new_livery.png?ex=65f8b2bf&is=65e63dbf&hm=6383b88aa0efb683f85b00efebd234b0ca4bc2fa0b8d9def3da1a9aba6a981c8&",
    description: "Team GoodSmile Racing livery for 1999 Subaru Impreza WRX STi created for the needs of MFMI22.",
    categories: ["Skins"],
    authors: ["Tribell"],
    downloadCount: 311,
    rating: 99,
    uploadDate: new Date(),
    modifiedDate: new Date()
}, {
    name: "Proton Wira Falken livery",
    downloadLink: "https://cdn.discordapp.com/attachments/638834861796229120/922090168922550272/Wira_Falken_ez.zip",
    thumbnailURL: "https://cdn.discordapp.com/attachments/638834861796229120/922090168406671390/unknown.png?ex=65f6d5e3&is=65e460e3&hm=7c79790e447b76ad5286e4500a1a066de0c3050f2b3d1cb37541c4084fed4241&",
    description: "Here's one extremely easy Proton Wira livery\nModified things :\nAdded redline in the interior\nSwapped steering wheel logo to mitsubishi cause technically it's a Lancer Evo I-III\nYes Mitsubishi logo swaps\nJust few less decals and limited stuff\nIf ya wonder why there's a hole in falken on da hood then it's just a vent and decided to keep it proper\nInstallation guide :\nUnzip da file\nMake backup of original livery (TX1080-TX1087 in rc/files/b and also same files in rc/files/b/gravel)\nCopy proper files and paste them to rc/files/b and then rc/files/b/gravel\nWhy tho no gravel livery? Well the only differences bettween this and gravel thing is just different wheels so why just don't use da normal asphalt wheels everywhere if they look the same almost",
    categories: ["Skins"],
    authors: ["Certare"],
    downloadCount: 21,
    rating: 37,
    uploadDate: new Date(),
    modifiedDate: new Date()
}, {
    name: "V-Rally 2 Corolla WRC livery",
    downloadLink: "https://cdn.discordapp.com/attachments/638834861796229120/874652250151206932/Corolla_-_Brundle.7z",
    thumbnailURL: "https://cdn.discordapp.com/attachments/638834861796229120/874655067532328980/porownanie.png?ex=65f99c02&is=65e72702&hm=5dbb79895ecbbd8113fa2de3803ecf359f20d489e781d50f766cdbd3fb28a21e&",
    description: "Its time for my another mediocre texture mod! This time I recreated the infamous V-rally 2 Corolla WRC driven by former Formula One driver Martin Brundle during 1999 Rally of Great Britain",
    categories: ["Skins"],
    authors: ["ChudyPiszczel (Krusantusz)"],
    downloadCount: 123456789,
    rating: 39,
    uploadDate: new Date(),
    modifiedDate: new Date()
}, {
    name: "Langton Stunt Course",
    downloadLink: "https://cdn.discordapp.com/attachments/638834861796229120/660748215552835584/LangtonStunt.zip",
    thumbnailURL: "https://cdn.discordapp.com/attachments/638834861796229120/660748154315997224/unknown.png?ex=65f69dac&is=65e428ac&hm=a50f5d9ba8e16f1a4a5f6e9b3f1528e02699e09479690ce05083fcd9e4902c6d&",
    description: "Langton Stunt Course\nBecause why not?\n\nExtract to rc\\srclvls to install",
    categories: ["Tracks"],
    authors: ["Dummiesman"],
    downloadCount: 555000,
    rating: 87,
    uploadDate: new Date(),
    modifiedDate: new Date()
}, {
    name: "Glentrool - fixed lighting",
    downloadLink: "https://cdn.discordapp.com/attachments/638834861796229120/665242813796974612/Glentrool_-_fixed_lighting.zip",
    thumbnailURL: "https://cdn.discordapp.com/attachments/638834861796229120/665242832977657866/unknown.png?ex=65f482aa&is=65e20daa&hm=307078dc38be6838c4be17fe267df62121155d7f8253526f60cee4676b45aedc&",
    description: "",
    categories: ["Tracks"],
    authors: ["Ephemeral"],
    downloadCount: 2,
    rating: 13,
    uploadDate: new Date(),
    modifiedDate: new Date()
}, {
    name: "Volvo 850R Wagon #15 Rickard Rydell v0.1",
    downloadLink: "https://cdn.discordapp.com/attachments/638834861796229120/739398939274379334/Welsh_Sheep_Wagon_A7_v0.1_by_Gargamelowny.zip",
    thumbnailURL: "",
    description: "",
    categories: ["Skins"],
    authors: ["Gargamelowny"],
    downloadCount: 42000,
    rating: 0,
    uploadDate: new Date(),
    modifiedDate: new Date()
}]