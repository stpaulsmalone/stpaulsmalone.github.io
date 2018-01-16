// jQuery for page scrolling feature - requires jQuery Easing plugin
/*$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});*/

/* Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
    var modal = this;
    var hash = modal.id;
   window.location.hash = hash;
    window.onhashchange = function() {
        if (!location.hash){
            $(modal).modal('hide');
        }
    }
});*/

//Toggle drop-down menus
    $('ul.customdrop li.dropdown a').on('click', function (event) {
    $(this).parent().toggleClass('open')
    $(button.navbar-toggle).toggleClass('collapsed');
});

    $('a.submenu-master').on('click', function (e) {
        $('div.submenu.dropup.dropdown-menu.collapse').toggleClass('in');
        e.stopPropagation(); 
   
});

 $(document).mouseup(function(e) 
 {
    var container = $("ul.customdrop li.open");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) 
        && container.has(e.target).length === 0
   ) {
        container.toggleClass('open', 350, "easeInOutSine");
    }
});

//Toggle readmore/readless spans
    $( 'button.readmore-button' ).on( 'click', function(){
        $( 'div.readmore' ).css( 'height', '150px');
        $( 'div.readmore' ).css( 'overflow', 'visible');
        $( 'button.readmore-button' ).css( 'opacity', '0' );
        setTimeout( function(){ $( 'button.readmore-button' ).css( 'display', 'none' ); }, 10001);
    });
    $( 'button.readless' ).on( 'click', function(){
        $( 'div.readmore' ).css( 'height', '0');
        $( 'div.readmore' ).css( 'overflow', 'hidden');
        $( 'button.readmore-button' ).css( 'opacity', '.7' );
        $( 'button.readmore-button' ).css( 'display', 'initial' );
    });

// Spacing certain after-box table rows
    $( "div.after-box table tr td:contains('#!')" ).css( "padding-bottom", "0" );
    $( "div.after-box table tr td:contains('#!')" ).prev().css( "padding-bottom", "0" );
    $( "div.after-box table tr td:contains('#!')" ).each(function () {
    $(this).html($(this).html().replace("#!", "<span class='hidden'>#!</span>"));
});
    $( "table.page-table tr td:contains('#!')" ).css( "padding-bottom", "5px" );
    $( "table.page-table tr td:contains('#!')" ).prev().css( "padding-bottom", "5px" );
    $( "table.page-table tr td:contains('#!')" ).each(function () {
    $(this).html($(this).html().replace("#!", "<span class='hidden'>#!</span>"));
});

// Welcome neighbor modal
/* $( document ).ready( function() {
    if ($ cookie( 'pop' ) == null) {
        $( "div.neighbor-modal" ).fadeIn( "slow" );
        $( "div.neighbor-modal" ).fadeTo( 'slow', 1 );
        setTimeout( function(){ $( "div.neighbor-modal" ).fadeTo( 4000, 0.0 ); }, 16000);
        setTimeout( function(){ $( "div.neighbor-modal" ).removeAttr('style'); }, 20001);
        $.cookie( 'pop', '365' );
        }
});
    $( "div.neighbor-modal" ).click(function() {
      $( this ).fadeTo( 1000, 0.0 );
      setTimeout(function(){
        $( "div.neighbor-modal" ).removeAttr('style');
      }, 999);
    }); */

// Taco Modal

$(function() {
  $( 'div.taco-modal' ).hover(function() {
    $( 'img.pastor-pic' ).css('opacity', '0');
  }, function() {
    // on mouseout, reset the background colour
    $( 'img.pastor-pic' ).css('opacity', '1');
  });
});

// Anchor offset
$(function() {
    setTimeout(delayedFragmentTargetOffset, 500);
});

// add scroll offset to fragment target (if there is one)
function delayedFragmentTargetOffset(){
    var offset = $(':target').offset();
    if(offset){
        var scrollto = offset.top - 95; // minus fixed header height
        $('html, body').animate({scrollTop:scrollto}, 0);
    }
} 
