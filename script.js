$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menubar
    // $('.menu-btn').click(function(){
    //     $('.navbar .menu').togglClass("active");

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

// typing text animaton 

    var typed = new Typed(".typing", {
         strings: [ "Developer", "Blogger", "web-Designer", "Freelancer","Graphic-Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Developer", "Blogger", "Designer", "Freelancer","Graphic-Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel 

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

   
});

// contactsection

document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    //get values
    var Name =getInputVal('Name');
    var Email =getInputVal('Email');
    var Subject =getInputVal('Subject');
    var Message =getInputVal('Message');

    console.log(Name);
}

// function to get input form values

function getInputVal(id){
  return document.getElementById(id).value;
}