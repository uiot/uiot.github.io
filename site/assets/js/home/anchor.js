$(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 100});   
  
    // Add smooth scrolling on all links inside the navbar
    $("#navbarTogglerDemo02 a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
        var navOffset = 75;
  
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 75
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
        });
      }  // End if
    });
  
    // Add smooth scrolling on all links inside the navbar
    $(".navbar-brand a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
        var navOffset = 75;
  
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 75
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
        });
      }  // End if
    });
  
  
    $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
    });
  
  
  });