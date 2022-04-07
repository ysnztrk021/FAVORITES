const webtoons =[
    {site:"Alpha Scans",webtoon:"Murim Login",link:"https://alpha-scans.org/manga/murim-login/",link1:"https://alpha-scans.org/",site1:"YouTube",link2:"https://www.youtube.com/"},
    {site:"",webtoon:"Demonic Emperor",link:"https://alpha-scans.org/manga/demonic-emperor/"},
    {site:"Asura Scans",webtoon:"Player Who Can't Level Up",link:"https://www.asurascans.com/comics/367-player-who-cant-level-up/",link1:"https://www.asurascans.com/",site1:"Facebook",link2:"https://www.facebook.com/"},
    {site:"",webtoon:"Reincarnation of the Suicidal Battle God",link:"https://www.asurascans.com/comics/367-reincarnation-of-the-suicidal-battle-god/"},
    {site:"",webtoon:"Taming Master",link:"https://www.asurascans.com/comics/367-taming-master/"},
    {site:"",webtoon:"The Max Level Hero has Returned!",link:"https://www.asurascans.com/comics/367-the-max-level-hero-has-returned/"},
    {site:"",webtoon:"Return Of The Shattered Constellation",link:"https://www.asurascans.com/comics/367-return-of-the-shattered-constellation/"},
    {site:"Flames Scans",webtoon:"Omniscient Reader’s Viewpoint",link:"https://flamescans.org/series/1649217721-omniscient-readers-viewpoint/",link1:"https://flamescans.org/",site1:"GitHub",link2:"https://www.github.com/"},
    {site:"Luminous Scans",webtoon:"Memorize",link:"https://luminousscans.com/series/manhwa-of-memorize-novel/",link1:"https://luminousscans.com/",site1:"Twitch",link2:"https://www.twitch.tv/"},
    {site:"",webtoon:"FFF-Class Trash Hero",link:"https://luminousscans.com/series/fff-class-trash-hero/"},
    {site:"Manganato",webtoon:"Jujutsu Kaisen",link:"https://readmanganato.com/manga-ba979135",link1:"https://manganato.com/",site1:"Gmail",link2:"https://mail.google.com"},
    {site:"",webtoon:"Mercenary Enrollment",link:"https://readmanganato.com/manga-jz987182"},
    {site:"",webtoon:"Unordinary",link:"https://readmanganato.com/manga-uw971531"},
    {site:"1st Kiss Manga",webtoon:"The Beginning After The End",link:"https://1stkissmanga.io/manga/the-beginning-after-the-end/",link1:"https://1stkissmanga.io/",site1:"Instagram",link2:"https://www.instagram.com/"},
    {site:"Manhua Plus",webtoon:"Martial Peek",link:"https://manhuaplus.com/manga/martial-peak/",link1:"https://manhuaplus.com/",site1:"Voir Anime",link2:"https://www.voiranime.com/"},
    {site:"White Cloud Pavilion",webtoon:"Soul Land",link:"https://www.whitecloudpavilion.com/manga/patreon/manga/soul-land",link1:"https://www.whitecloudpavilion.com/",site1:"Font Squirrel",link2:"https://www.fontsquirrel.com/"},
    {site:"MM SCANS",webtoon:"Eleceed",link:"https://mm-scans.org/manga/ele-ceed2/",link1:"https://mm-scans.org/",site1:"Twitter",link2:"https://www.twitter.com/"},
    {site:"Manhua Plus",webtoon:"Ranker Who Lives A Second Time",link:"https://manhuascan.com/manga-ranker-who-lives-a-second-time.html",link1:"https://manhuascan.com/",site1:"Adkami",link2:"https://www.adkami.com/"},
    {site:"",webtoon:"The Beginning After The End",link:"https://manhuascan.com/manga-the-beginning-after-the-end.html"},
]

const tbody = document.querySelector(".tbody");

for (let i = 0; i < webtoons.length; i++) {
    if(webtoons[i].site!==""){
        tbody.innerHTML += "<tr class='tdWebtoon'> <td> <a href='"+webtoons[i].link1+"' target='_blank'>"+webtoons[i].site+"</a></td> <td><a href='"+webtoons[i].link+"' target='_blank'>"+webtoons[i].webtoon+"</a></td><td><a href='"+webtoons[i].link2+"' target='_blank'>"+webtoons[i].site1+"</a></td>";
    }
    else{
        tbody.innerHTML += "<tr> <td style='background-color:#17171F;'></td> <td><a href='"+webtoons[i].link+"' target='_blank'>"+webtoons[i].webtoon+"</a></td>"+"</tr>";
    }
}