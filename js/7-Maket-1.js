let header_burger = document.querySelector('.header_burger');
let header_menu = document.querySelector('.header_menu');
let back = document.querySelector('body');
let header_list = document.querySelector('.header_list');

header_burger.onclick = function(){
    header_burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

header_list.onclick = function () {
    header_list.classList.remove('active');
    back.classList.toggle('lock');
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  back.classList.toggle('lock'); 
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    back.classList.toggle('lock');
  }
}

new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });