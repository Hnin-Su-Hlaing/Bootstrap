$(function () {
  $( '.navbar .nav-menu .nav-item' ).on( 'click', function () {
    $( '.navbar .nav-menu' ).find( '.nav-item.active' ).removeClass( 'active' );
    $( this ).addClass( 'active' );
  });
});

  /* Menu JS */
  $(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});


  $(document).ready(function () {
    if (window.matchMedia('(max-width: 1279px)').matches) {
        setTimeout(function () {
            if (location.hash) {
                window.scrollTo(0, 0);
                target = location.hash.split('#');
                smoothScrollTo($('#' + target[1]));
            }
        }, 1);

        $('.nav-menu li a[href*="#"]:not([href="#"])').click(function () {
            $('.hamburger').toggleClass('active');
            $('.globalMenuSp').fadeToggle();
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname) {
                smoothScrollTo($(this.hash));
                return false;
            }
        });

        function smoothScrollTo(target) {
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - $headerHeight
                }, 900);
            }
        }
    } else {
        $('.toggle-nav').show();
    }
});
