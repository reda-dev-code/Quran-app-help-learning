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

const pageDictionary = {
  'jouz3ama': 564,
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

function goHome(){
  window.location.href = '../main.html'
}



function searchByKey(dictionary, key) {
  // Check if the key exists in the object
  if (key in dictionary) {
    return dictionary[key];
  }
  return "Key not found"; // Default fallback
}

// Example usage:


localStorage.clear()

function add(checkbox) {
    const card = checkbox?.id
    if(checkbox && checkbox.checked) {
        console.log(card)
        const valueCard = searchByKey(pageDictionary, card)
        saveLocalData(card, valueCard)

    }
}

window.add = add;

var hello = []

// Loop through all items in localStorage



for (var key in localStorage) {
  if (localStorage.hasOwnProperty(key) && Object.hasOwn(pageDictionary, key)) {
    hello.push(localStorage.getItem(key))
    console.log(key + ': ' + localStorage.getItem(key));
  }else{
    console.log('error')
  }
}   

console.log(hello)

let thePoints = 0

for ( var nb of hello) {

        thePoints += Number(nb)

        console.log('error')

}



console.log(thePoints)

let pourcentageProgress = () => {
   return thePoints / pageDictionary.jouz3ama * 100
}



console.log(pourcentageProgress())

