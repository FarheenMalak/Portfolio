$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [ "Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
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

    // Read more functionality
    $('#read-more-btn').click(function(){
        $('#more-text').toggle();
        if($('#more-text').is(":visible")) {
            $('#read-more-btn').text('Read Less');
        } else {
            $('#read-more-btn').text('Read More');
        }
    });
});
$(document).ready(function(){
    $('#send-message').click(function(event){
        event.preventDefault();  // Prevent the form from submitting

        // Get form values
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

        // Encode the message for URL
        var encodedMessage = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nSubject: " + subject + "\nMessage: " + message);

        // Replace with your WhatsApp phone number (in international format)
        var phoneNumber = "923706359077";  // Example: +92 300 123 4567 for Pakistan

        // Create the WhatsApp link
        var whatsappLink = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;

        // Open the WhatsApp chat with the pre-filled message
        window.open(whatsappLink, "_blank");

        // Optionally reset the form
        $('#contact-form')[0].reset();
    });
});

    