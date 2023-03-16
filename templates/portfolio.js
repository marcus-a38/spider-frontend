// PORTFOLIO SCRIPT v0.0.1a

$(document).ready(function(){


    document.getElementsByTagName("html")[0].style.visibility = "visible"; // prevent premature displaying of elements

/*-----------------------------------------------------------------------------*/

    let scrollRevealOptions = { // global scroll reveal config

       reset:true,
       duration:1000,
       viewOffset:{top : 15, bottom : 15}

    } 

    window.scrollTo(0, 0); // verify that client isn't positioned further down the page... e.g. #album-list
    $('html').css('overflow-y', 'hidden');
    

/*------------------------------------------------------------------------------*/
//                           ALBUM HOVER SCRIPT

    $('.img-text').css('opacity', '0.0'); // hide album title text on load

    $('.left-img').hover(function(){

        $(this).find('.album-img').eq(0).css('filter', 'brightness(50%)');
        $(this).find('.img-text').eq(0).css('opacity', '1.0');

    }, function() {

        $(this).find('.album-img').eq(0).css('filter', 'brightness(100%)');
        $(this).find('.img-text').eq(0).css('opacity', '0.0');
    });

    $('.right-img').hover(function(){

        $(this).find('.album-img').eq(0).css('filter', 'brightness(50%)');
        $(this).find('.img-text').eq(0).css('opacity', '1.0');

    }, function() {

        $(this).find('.album-img').eq(0).css('filter', 'brightness(100%)');
        $(this).find('.img-text').eq(0).css('opacity', '0.0');
    }); 

/*------------------------------------------------------------------------------*/
//               DOWN BUTTON LOGIC -- REVEAL LOWER HALF OF THE PAGE

$('#down').on('click', function(event){

    let target = document.querySelector(this.getAttribute('href'));
    $('html').css('overflow-y', 'visible');
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    history.pushState(null, null, hashval);
    event.preventDefault();
    $('#down').hide();

});

/*------------------------------------------------------------------------------*/
//                   SET SCROLL REVEAL FOR SOME ELEMENTS

    ScrollReveal().reveal('#title', scrollRevealOptions); // reveal title

    ScrollReveal().reveal('#subtitle', scrollRevealOptions); // and subtitle

    ScrollReveal().reveal('.img-row', scrollRevealOptions); // and each row of albums individually
/*-------------------------------------------------------------------------------*/



});