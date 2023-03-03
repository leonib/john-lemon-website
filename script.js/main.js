// Page preloader
window.addEventListener('load', function () {
  var pagePreloader = document.querySelector('.jl-preloader');
  pagePreloader.classList.add('jl-fade-out');

  setTimeout(function () {
    pagePreloader.style.display = 'none';
  }, 2000);
});

// Opening and closing Contact info
var btnContact = document.querySelector('.jl-btn-contact');
btnContact.addEventListener('click', function () {
  var boxContact = document.querySelector('.jl-contact-info');
  boxContact.classList.toggle('jl-it-is-open');
  this.classList.toggle('jl-change-icon');
});
