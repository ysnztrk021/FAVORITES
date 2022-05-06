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
      link_webtoon: "https://www.asurascans.com/comics/1649969363-player-who-cant-level-up/",
  },
  {
      webtoon: "Reincarnation of the Suicidal Battle God",
      link_webtoon: "https://www.asurascans.com/comics/367-reincarnation-of-the-suicidal-battle-god/",
  },
  {
      webtoon: "Taming Master",
      link_webtoon: "https://www.asurascans.com/comics/1649969363-taming-master/",
  },
  {
      webtoon: "The Max Level Hero has Returned!",
      link_webtoon: "https://www.asurascans.com/comics/1649969363-the-max-level-hero-has-returned/",
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
      link_webtoon: "https://manhuascan.com/manga-ranker-who-lives-a-second-time.html",
  },

  {
      webtoon: "The Beginning After The End",
      link_webtoon: "https://manhuascan.com/manga-the-beginning-after-the-end.html",
  },
  {
      webtoon: "Memorize",
      link_webtoon: "https://luminousscans.com/series/manhwa-of-memorize-novel/",
  },
  {
      webtoon: "FFF-Class Trash Hero",
      link_webtoon: "https://luminousscans.com/series/fff-class-trash-hero/",
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
      link_webtoon: "https://mm-scans.org/manga/ele-ceed2/",
  },
  {
      webtoon: "Tales of Demons and Gods",
      link_webtoon: "https://setsuscans.com/manga/the-tales-of-demons-and-gods/",
  },
]
const favourite_site = [
  {
      constantly: "YouTube",
      link_constantly: "https://www.youtube.com/",
  }, {
      constantly: "Facebook",
      link_constantly: "https://www.facebook.com/"
  }, {
      constantly: "Gmail",
      link_constantly: "https://mail.google.com",
  }, {
      constantly: "Netflix",
      link_constantly: "https://www.netflix.com/",
  }, {
      constantly: "Twitch",
      link_constantly: "https://www.twitch.tv/",
  }, {
      constantly: "GitHub",
      link_constantly: "https://www.github.com/",
  }, {
      constantly: "Instagram",
      link_constantly: "https://www.instagram.com/",
  }, {
      constantly: "AniMix Play",
      link_constantly: "https://animixplay.to/",
  }, {
      constantly: "Font Squirrel",
      link_constantly: "https://www.fontsquirrel.com/",
  }, {
      constantly: "Twitter",
      link_constantly: "https://www.twitter.com/",
  }, {
      constantly: "Drama Cool",
      link_constantly: "https://www.dramacool9.co/",
  },{
      constantly: "Xbox Cloud Game",
      link_constantly: "https://www.xbox.com/fr-BE/play",
  },
]
/*Generate favorites*/
const sorted_site = favourite_site.sort(sortSite)
const sorted_webtoon = favourite_webtoon.sort(sortWebtoon)

const grid_webtoon = document.querySelector(".grid-webtoon");
const grid_constantly = document.querySelector(".grid-constantly");

for (let i = 0; i < sorted_webtoon.length; i++) {
  grid_webtoon.innerHTML += "<a href='" + sorted_webtoon[i].link_webtoon + "' target='_blank'>" + sorted_webtoon[i].webtoon + "</a>";
}
for (let i = 0; i < sorted_site.length; i++) {
  grid_constantly.innerHTML += "<a href='" + sorted_site[i].link_constantly + "' target='_blank'>" + sorted_site[i].constantly + "</a>";
}

/*Sort*/


function sortWebtoon(a, b) {
  if (a.webtoon < b.webtoon) {
      return -1;
  }
  if (a.webtoon > b.webtoon) {
      return 1;
  }
  return 0;
}
function sortSite(a, b) {
  if (a.constantly < b.constantly) {
      return -1;
  }
  if (a.constantly > b.constantly) {
      return 1;
  }
  return 0;
}
