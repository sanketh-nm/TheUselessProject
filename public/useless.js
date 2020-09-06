var sitesList = [
  "https://sanketh.dev/stickman.html",
  "http://www.republiquedesmangues.fr/",
  "http://www.movenowthinklater.com/",
  "http://www.partridgegetslucky.com/",
  "http://www.rrrgggbbb.com/",
  "http://beesbeesbees.com/",
  "http://www.koalastothemax.com/",
  "http://heeeeeeeey.com/",
  "http://corndog.io/",
  "https://alwaysjudgeabookbyitscover.com",
  "http://thatsthefinger.com/",
  "http://cant-not-tweet-this.com/",
  "http://weirdorconfusing.com/",
  "http://eelslap.com/",
  "http://www.staggeringbeauty.com/",
  "http://burymewithmymoney.com/",
  "https://smashthewalls.com/",
  "http://endless.horse/",
  "http://www.trypap.com/",
  "http://www.everydayim.com/",
  "http://randomcolour.com/",
  "http://cat-bounce.com/",
  "http://chrismckenzie.com/",
  "https://thezen.zone/",
  "http://hasthelargehadroncolliderdestroyedtheworldyet.com/",
  "http://ninjaflex.com/",
  "http://ihasabucket.com/",
  "http://corndogoncorndog.com/",
  "http://www.hackertyper.com/",
  "https://pointerpointer.com",
  "http://imaninja.com/",
  "http://drawing.garden/",
  "http://www.ismycomputeron.com/",
  "http://www.nullingthevoid.com/",
  "http://www.muchbetterthanthis.com/",
  "http://www.yesnoif.com/",
  "http://lacquerlacquer.com",
  "http://potatoortomato.com/",
  "http://iamawesome.com/",
  "http://www.pleaselike.com/",
  "http://crouton.net/",
  "http://corgiorgy.com/",
  "http://www.wutdafuk.com/",
  "http://unicodesnowmanforyou.com/",
  "http://www.crossdivisions.com/",
  "http://tencents.info/",
  "http://www.patience-is-a-virtue.org/",
  "http://pixelsfighting.com/",
  "http://isitwhite.com/",
  "https://existentialcrisis.com/",
  "http://onemillionlols.com/",
  "http://www.omfgdogs.com/",
  "http://oct82.com/",
  "http://chihuahuaspin.com/",
  "http://www.blankwindows.com/",
  "http://dogs.are.the.most.moe/",
  "http://tunnelsnakes.com/",
  "http://www.trashloop.com/",
  "http://www.ascii-middle-finger.com/",
  "http://spaceis.cool/",
  "http://www.donothingfor2minutes.com/",
  "http://buildshruggie.com/",
  "http://buzzybuzz.biz/",
  "http://yeahlemons.com/",
  "http://wowenwilsonquiz.com",
  "https://thepigeon.org/",
  "http://notdayoftheweek.com/",
  "http://www.amialright.com/",
  "http://nooooooooooooooo.com/",
  "https://greatbignothing.com/",
];

let takeMeToNeverland = () => {

  let visitedSitesInStore = localStorage.getItem('visitedSites')

  if (visitedSitesInStore) {
    let visitedSites = visitedSitesInStore.split(",");
    for (site of visitedSites) {
      sitesList.splice(site, 1)
    }
  }

  let urlIndex = getRandomInt(sitesList.length)
  let temp = visitedSitesInStore + "," + urlIndex.toString()

  localStorage.setItem('visitedSites', temp);
  window.open(sitesList[urlIndex])
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

document.getElementById("takeMeToNeverland").addEventListener('click', takeMeToNeverland)


for (site of sitesList) {
  li = document.createElement("li")
  let node = document.createElement("a"); 
  node.href= site;
  node.innerHTML = site
  li.appendChild(node)
  document.getElementById("list").appendChild(li);
}