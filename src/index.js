import 'bootstrap'
import './sass/main.scss'


jQuery(function ($) {
  $('.newsletter-signup').on('submit', function (e) {
    // submits data via ajax call
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    submitViaAjax(formData);
  });
});

// this is a mock ajax call
function submitViaAjax(formData) {
  // DO NOT EDIT BELOW THIS LINE
  var object = {};
  formData.forEach(function (value, key) {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  console.log(json);
}


//Navbar transition on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const navbar = document.querySelector(".navbar");
  navbar.style.transition = "all .4s ease-in-out";

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.padding = "30px 10px";
  } else {
    navbar.style.padding = "8px 0px";
  }
}