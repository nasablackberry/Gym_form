function randomImage(){
    var images = [
     'https://download.unsplash.com/photo-1430916273432-273c2db881a0',
     'https://download.unsplash.com/photo-1428278953961-a8bc45e05f72',
     'https://download.unsplash.com/photo-1429277005502-eed8e872fe52','./images/gym_bg.jpg'];
    var size = images.length;
    var x = Math.floor(size * Math.random());
    console.log(x);
    var element = document.getElementsByTagName("body");
    console.log(element);
    element[0].style["background-image"] = "url("+ images[x] + ")";
  }
  
  document.addEventListener("DOMContentLoaded", randomImage);
