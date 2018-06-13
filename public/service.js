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



