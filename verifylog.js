function setcookie(name,value, daysbeforeexpire) {

  const date = new Date();
  date.setTime(date.getTime() + (daysbeforeexpire * 24 * 60 * 60 * 1000));
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value} ; ${expires}; path=/`
 
}





function deleteCookie(name){
  setcookie(name, null, null);

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


function start() {
    const olduser = getCookieName('userinfo');
    if (olduser) return window.location.href = '/main.html';
    window.alert('Pass the test first')
    console.log('Pass the test first')
    

}

function saveInfo(){
  const value = document.getElementById('forgetinput').value;
  if(!value) return window.alert('No value can be proceeded');
  setcookie('userinfo',value,365)
  window.alert(value)
}