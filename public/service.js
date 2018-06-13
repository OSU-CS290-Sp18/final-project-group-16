/*
var photoSearch = document.getElementById("navbar-search-box");

function search(event) {
    var twits = document.getElementsByClassName('service-ad');
    for (i = 0; i < 1; i++) {
        if ((twits[i].childNodes[3].childNodes[1].textContent.includes(photoSearch.value)) || (twits[i].childNodes[3].childNodes[3].textContent.includes(photoSearch.value))) {
            twits[i].classList.remove('hidden');
            continue;
        }
        else {
            twits[i].classList.add('hidden');
        }
    }
    if (twits.length > 1) {
        for (i = 1; i < twits.length; i++) {
            if ((twits[i].childNodes[1].childNodes[0].textContent.includes(photoSearch.value)) || (twits[i].childNodes[1].childNodes[1].textContent.includes(photoSearch.value))) {
                twits[i].classList.remove('hidden');
                continue;
            }
            else {
                twits[i].classList.add('hidden');
            }
        }
    }
}
*/

function showContent(){
    for(x = 0; x < arguments.length; x++){
        arguments[x].classList.remove('hidden');
    }
}

function hideContent(){
    for(x = 0; x < arguments.length; x++){
        arguments[x].classList.add('hidden');
    }
}

function insertNewAd(adPicture, adTitle, adText, adRating) {
  console.log('my function is called');

  if (!adPicture || !adTitle || !adText || !adRating) {
    console.log('Not enough info to add new ad');
  } else {
    var adTemplate = Handlebars.templates.insertNewAd;
    var newAdHTML = adTemplate({
      picture: adPicture,
      title: adTitle,
      text: adText,
      rating: adRating
    });

    var parentNode = document.getElementsByClassName('ad-container');
    var adContainer = parentNode[0];
    adContainer.insertAdjacentHTML('beforeend', newAdHTML);
  }
}

var removedAds = [];

function sortAds(){
    console.log('it calls my function');
    var ads = document.getElementsByClassName('service-ad');
    var searchField = document.getElementById('navbar-search-box');
    var searchInput = searchField.value;
    var adPicture;
    var adTitle;
    var adText;
    var adRating;

    var parentNode = document.getElementsByClassName('ad-container');
    var adContainer = parentNode[0];

    while(removedAds.length > 0){
        adContainer.appendChild(removedAds.pop());
    }

    var counter = ads.length;
    var x = 0;

    while(x < counter){
        adPicture = ads[x].getElementsByClassName('ad-picture')[0].textContent.trim();
        adTitle = ads[x].getElementsByClassName('ad-title')[0].textContent.trim();
        adText = ads[x].getElementsByClassName('ad-text')[0].textContent.trim();
        adRating = ads[x].getElementsByClassName('ad-rating')[0].textContent.trim();
        
        if(searchInput.trim().length == 0){
            break
        }
        else if(!(adPicture.includes(searchInput)) && !(adTitle.includes(searchInput)) && !(adText.includes(searchInput)) && !(adRating.includes(searchInput))){
            removedAds.push(ads[x]);
            ads[x].remove();
            x = 0;
            counter = ads.length;
        }
        else{
            x = x + 1;
        }
    }
    
}

//Event listeners

var searchBar = document.getElementById('navbar-search-box');
if (searchBar) {
    searchBar.addEventListener('input', sortAds);
}
