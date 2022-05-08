const favourite_webtoon = [
    {
        webtoon: "Murim Login",
        link_webtoon: "https://www.asurascans.com/comics/murim-login/",
    },
    {
        webtoon: "Demonic Emperor",
        link_webtoon: "https://alpha-scans.org/manga/demonic-emperor/",
    },
    {
        webtoon: "Player Who Can't Level Up",
        link_webtoon: "https://toonily.com/webtoon/the-player-that-cant-level-up/",
    },
    {
        webtoon: "Reincarnation of the Suicidal Battle God",
        link_webtoon: "https://www.asurascans.com/comics/367-reincarnation-of-the-suicidal-battle-god/",
    },
    {
        webtoon: "Taming Master",
        link_webtoon: "https://toonily.com/webtoon/taming-master/",
    },
    {
        webtoon: "The Max Level Hero has Returned!",
        link_webtoon: "https://toonily.com/webtoon/the-max-level-hero-has-returned/",
    },
    {
        webtoon: "Return Of The Shattered Constellation",
        link_webtoon: "https://www.asurascans.com/comics/1649969363-return-of-the-shattered-constellation/",
    },
    {
        webtoon: "Jujutsu Kaisen",
        link_webtoon: "https://readmanganato.com/manga-ba979135",
    },
    {
        webtoon: "Mercenary Enrollment",
        link_webtoon: "https://readmanganato.com/manga-jz987182",
    },
    {
        webtoon: "Unordinary",
        link_webtoon: "https://readmanganato.com/manga-uw971531",
    },
    {
        webtoon: "Ranker Who Lives A Second Time",
        link_webtoon: "https://toonily.com/webtoon/second-ranker/",
    },

    {
        webtoon: "The Beginning After The End",
        link_webtoon: "https://toonily.com/webtoon/beginning-after-end/",
    },
    {
        webtoon: "Memorize",
        link_webtoon: "https://luminousscans.com/series/manhwa-of-memorize-novel/",
    },
    {
        webtoon: "FFF-Class Trash Hero",
        link_webtoon: "https://toonily.com/webtoon/fff-class-trashero/",
    },
    {
        webtoon: "Omniscient Reader’s Viewpoint",
        link_webtoon: "https://manhwaz.com/webtoon/omniscient-readers-viewpoint-006",
    },
    {
        webtoon: "Apotheosis",
        link_webtoon: "https://readmanganato.com/manga-bt978676",
    },
    {
        webtoon: "Martial Peek",
        link_webtoon: "https://manhuaplus.com/manga/martial-peak/",
    },
    {
        webtoon: "Soul Land",
        link_webtoon: "https://www.whitecloudpavilion.com/manga/patreon/manga/soul-land",
    },
    {
        webtoon: "Eleceed",
        link_webtoon: "https://toonily.com/webtoon/eleceed/",
    },
    {
        webtoon: "Tales of Demons and Gods",
        link_webtoon: "https://setsuscans.com/manga/the-tales-of-demons-and-gods/",
    },
    {
        webtoon: "Tomb Raider King",
        link_webtoon: "https://toonily.com/webtoon/tomb-raider-king/",
    },
    {
        webtoon: "Swordmaster’s Youngest Son",
        link_webtoon: "https://www.asurascans.com/comics/swordmasters-youngest-son/",
    },
]
const favourite_site = [
    {
        constantly: "YouTube",
        link_constantly: "https://www.youtube.com/",
    }, 
    {
        constantly: "Facebook",
        link_constantly: "https://www.facebook.com/"
    }, 
    {
        constantly: "Gmail",
        link_constantly: "https://mail.google.com",
    }, 
    {
        constantly: "Netflix",
        link_constantly: "https://www.netflix.com/",
    }, 
    {
        constantly: "Twitch",
        link_constantly: "https://www.twitch.tv/",
    }, 
    {
        constantly: "GitHub",
        link_constantly: "https://www.github.com/",
    }, 
    {
        constantly: "Instagram",
        link_constantly: "https://www.instagram.com/",
    }, 
    {
        constantly: "AniMix Play",
        link_constantly: "https://animixplay.to/",
    }, 
    {
        constantly: "Font Squirrel",
        link_constantly: "https://www.fontsquirrel.com/",
    }, 
    {
        constantly: "Twitter",
        link_constantly: "https://www.twitter.com/",
    }, 
    {
        constantly: "Drama Cool",
        link_constantly: "https://www.dramacool9.co/",
    }, 
    {
        constantly: "Xbox Cloud Game",
        link_constantly: "https://www.xbox.com/fr-BE/play",
    },
]
// Select elements
const grid_webtoon = document.querySelector(".grid-webtoon");
const grid_constantly = document.querySelector(".grid-constantly");

// Create element
const title_webtoon = document.createElement('p');
const title_constantly = document.createElement('p');
title_webtoon.className='title-webtoon'
title_webtoon.innerHTML='Webtoon'
title_constantly.className='title-constantly'
title_constantly.innerHTML='Constantly'

const sorted_webtoon = favourite_webtoon.sort(sortWebtoon)
const sorted_constantly = favourite_site.sort(sortSite)

generate_webtoon(sorted_webtoon);
function generate_webtoon(webtoon) {
    grid_webtoon.appendChild(title_webtoon)
    for (let i = 0; i < webtoon.length; i++) {
        grid_webtoon.innerHTML += "<a href='" + webtoon[i].link_webtoon + "' target='_blank'>" + webtoon[i].webtoon + "</a>";
    }
}
generate_constantly(sorted_constantly);
function generate_constantly(site) {
    grid_constantly.appendChild(title_constantly)
    for (let i = 0; i < site.length; i++) {
        grid_constantly.innerHTML += "<a href='" + site[i].link_constantly + "' target='_blank'>" + site[i].constantly + "</a>";
    }
}

/*Sort*/
function sortWebtoon(a, b) {
    if (a.webtoon.toLowerCase() < b.webtoon.toLowerCase()) {
        return -1;
    }
    if (a.webtoon.toLowerCase() > b.webtoon.toLowerCase()) {
        return 1;
    }
    return 0;
}

function sortSite(a, b) {
    if (a.constantly.toLowerCase() < b.constantly.toLowerCase()) {
        return -1;
    }
    if (a.constantly.toLowerCase() > b.constantly.toLowerCase()) {
        return 1;
    }
    return 0;
}

/* Show Add favorites */

// const img_show = document.querySelector(".img-menuShow")
// const img_Unshow = document.querySelector(".img-menuUnshow")
// const add_favorites = document.querySelector(".add-favorites")

// img_show.addEventListener("click",()=>{
//     add_favorites.className = "add-favorites-show";
//     img_show.className += " img-hide"
//     img_Unshow.className = "img-menuUnshow"
// })
// img_Unshow.addEventListener("click",()=>{
//     add_favorites.className = "add-favorites-hide";
//     img_Unshow.className += " img-hide"
//     img_show.className = "img-menuShow"
// })

/* Add favorites */

// const add_webtoon = document.querySelector(".add-webtoon");
// const add_constantly = document.querySelector(".add-constantly");

// const webtoon_name = document.querySelector(".webtoon-name");
// const webtoon_link = document.querySelector(".webtoon-link");

// const constantly_name = document.querySelector(".constantly-name");
// const constantly_link = document.querySelector(".constantly-link");

// const btn_webtoon = document.querySelector(".btn-webtoon");
// const btn_constantly = document.querySelector(".btn-constantly");

// btn_webtoon.addEventListener("click", ()=>{
//     favourite_webtoon.push({webtoon:webtoon_name.value,link_webtoon:webtoon_link.value})
//     grid_webtoon.innerHTML="<p class='title-webtoon'>Webtoon</p>";
//     let sort_webtoon = favourite_webtoon.sort(sortWebtoon)
//     generate_webtoon(sort_webtoon)
// })
// btn_constantly.addEventListener("click", ()=>{
//     favourite_site.push({constantly:constantly_name.value,link_constantly:constantly_link.value})
//     grid_constantly.innerHTML="<p class='title-site'>Constantly</p>";
//     let sort_constantly = favourite_site.sort(sortSite);
//     generate_constantly(sort_constantly)
// })
