// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

//youtube player functionality
$('.youtube-trigger').click(function() {
    if(this.value !== null && this.value !== undefined){
        startVideo(this.value);
    } else {
        startVideo("https://www.youtube.com/embed/56_S0WeTkzs?autoplay=1&rel=0")
    }
});

function startVideo(src) {
    $('#youtubeVideoModal').modal('show');
    $('#youtubeVideoModal iframe').attr('src', src);
    resizeYoutubeVideo();
}

$('#youtubeVideoModal').on('hidden.bs.modal', function() {
    $('#youtubeVideoModal iframe').removeAttr('src');
});

$('#youtubeVideoModal').on('shown.bs.modal', function () {
    resizeYoutubeVideo();
  })

$(window).resize(function() {
        resizeYoutubeVideo();
});

function resizeYoutubeVideo() {
    $('#youtubeIframe').width('100%');
    var newHeight = $('.modal-lg').width() * 9 / 16;
    $('#youtubeIframe').height(newHeight);
}

function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

    //  document.body.innerHTML = originalContents;
     location.reload();
}

$(document).ready(function () {

    $(".player").mb_YTPlayer();
    //enable tooltip
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

});


// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top < 50) {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
