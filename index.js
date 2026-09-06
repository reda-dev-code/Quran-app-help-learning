function saveLocalData(key, value) {
    localStorage.setItem(key, value);
}

// Replaces getCookieName()
function getLocalData(key) {
    return localStorage.getItem(key);
}

// Replaces deleteCookie()
function deleteLocalData(key) {
    localStorage.removeItem(key);
}

function saveTime(){
    if(getLocalData(date)) {

    } else{
        saveLocalData(date, date)
    }
}


function getCookieName(name) {

  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split("; ");
  let result = null;

  cArray.forEach(element => {
    if(element.indexOf(name) == 0){

        result = element.substring(name.length + 1)
    }
    
  })
  return result;

}


var hello = []

// Loop through all items in localStorage
const pageDictionary = {
  'jouz3ama': 566,
  "Nas": 6,
  "falaq": 5,
  "ikhlas": 4,
  'kafiroun': 6,
  'nasr': 3,
  'masad': 5,
  'qoraysh': 4,
  'ma3oun': 7,
  'kawthar': 3,
  'asr': 3,
  'homaza': 9,
   'fyl': 5,
   'al-qari3a': 11,
   'takathour': 8,
   'zalzalah': 8,
   'Adiyat': 11,
   'qadr': 5,
   'bayinnah': 8,
   'tin': 8,
   'Alaq': 19,
   'Doha': 11,
   'Charh': 8,
   'Layl': 21,
   'balad': 20,
   'shams': 15,
   'fajr': 30,
   'ghashiya': 26,
   'Ala': 19,
   'bourouj': 22,
   'Tariq': 17,
   'inshiqaq': 25,
   'motafifin': 36,
   'takwir': 29,
    'infitar': 19,
    'Abasa': 42,
    'naziat': 46,
    'naba':  40

};

function verifylog(){
     const olduser = getCookieName('userinfo');
    if (!olduser) return window.location.href = '/index.html';
}




for (var key in localStorage) {
  if (localStorage.hasOwnProperty(key) && Object.hasOwn(pageDictionary, key)) {
    hello.push(localStorage.getItem(key))
    console.log(key + ': ' + localStorage.getItem(key));
  }else{
    console.log('error')
  }
}   

/*console.log(hello)*/

let thePoints = 0

for ( var nb of hello) {

        thePoints += Number(nb)

        console.log('error')

}


console.log('points')
console.log(thePoints)

let pourcentageProgress = () => {
   return thePoints / 566 * 100
}

console.log('pourcentage progresss')

console.log(pourcentageProgress())


const title = document.getElementById('title')

const finalWidth = 700
const littlegreen = document.querySelector('.green')
const width = window.getComputedStyle(littlegreen).width
const onlyNbWidth = parseFloat(width, 10)
console.log(onlyNbWidth)

const pourcentage1 = onlyNbWidth/finalWidth
const pourcentage2 = pourcentage1 * 100
const pourcentage3 = Math.ceil(pourcentage2)

/*console.log(pourcentageProgress())*/
const x = parseInt(pourcentageProgress(), 10)
title.innerText = x + '%'
littlegreen.style.width = x + '%'





const timechosen = getCookieName('userinfo')
console.log('forgets 10 ayha in '+timechosen)
const stats1 = Number(parseInt(timechosen) /10)
const changingStat1 = document.getElementById('fadingAyah')
changingStat1.innerText = 'An ayah is going away every: '+ stats1 +' day'

function time() {
const now = Date.now()
const var1 = Number(timechosen) * (564 / 10) * 24 * 60 * 60 * 1000;
const week = parseInt(var1)

let targetTime = getLocalData('stop')

if (!targetTime) {
    console.log('no target time')
    targetTime = now + week
    saveLocalData('stop', targetTime)
}else {
    console.log('target time exist')
    targetTime = parseInt(targetTime, 10)
}


 
        let timeleft = targetTime - now
        console.log('this is the time left and the date')
        console.log(now)
        console.log(timeleft)
        if(timeleft <=  0){
            console.log('finish')
            localStorage.clear()
            pourcentageProgress = 0
            localStorage.clear();
            littlegreen.style.width = '0%' 
            title.innerHTML = '0%'
        }else {
            console.log('not finish')
            let pourcentageTimeLeft = () => { return timeleft/week * 100}
            console.log(pourcentageTimeLeft())
            let toreduce = (parseInt(littlegreen.getBoundingClientRect().width) * parseInt(pourcentageTimeLeft())) /100
            const left = (pourcentageProgress() * pourcentageTimeLeft() / 100)
            console.log('what to reduce')
            console.log(toreduce)
            let nbFinal = toreduce
            console.log(nbFinal)
            littlegreen.style.width = left + '%'
            console.log(nbFinal)
            title.innerHTML = parseInt(left) + '%'
        


}

}


verifylog();
time()