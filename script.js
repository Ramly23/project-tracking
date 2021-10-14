const btnHamburger = document.querySelector('#btnHamburger');
const close = document.querySelector('#close');
const header = document.querySelector('header');
const mobileLinks = document.querySelector('.mobile-links');
const fadeElems = document.querySelectorAll('.has-fade');


btnHamburger.addEventListener('click', function() {
    if(header.classList.contains('open')) {
        header.classList.remove('open');
    }
    else {
        header.classList.add('open');
        btnHamburger.classList.add('hidden');
        close.classList.remove('hidden');
        mobileLinks.classList.add('open');

         // Fade Animation 
         fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
          });

    }
})

close.addEventListener('click', function() {
    if(header.classList.contains('open')) {
        header.classList.remove('open');
        close.classList.add('hidden');
        btnHamburger.classList.remove('hidden');
        mobileLinks.classList.remove('open');

        // Fade Animation
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });  
    }
    else {
        header.classList.add('open');
    }
});