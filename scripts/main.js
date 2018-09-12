var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/frontDeskTS.jpg') {
      myImage.setAttribute ('src','images/beyonce.jpg');
    } else {
      myImage.setAttribute ('src','images/frontDeskTS.jpg');
    }
}
