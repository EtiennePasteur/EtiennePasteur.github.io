$(window).load(function() {
	$('#status').fadeOut();
	$('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350).css({'overflow':'visible'});
});
// $("html").niceScroll({
//   mousescrollstep: 70,
//   cursorcolor: "#ea9312",
//   cursorwidth: "5px",
//   cursorborderradius: "10px",
//   cursorborder: "none",
// });
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
(function ($) {
  $(document).ready(function(){
    $(".navbar").hide();
    $(function () {
      $(window).scroll(function () {
                 if ($(this).scrollTop() > 40) {
                  $('.navbar')
                  .removeClass('animated fadeOutUp')
                  .addClass('animated fadeInDown')
                  .fadeIn();
                } else {
                  $('.navbar')
                  .removeClass('animated fadeInDown')
                  .addClass('animated fadeOutUp')
                  .fadeOut();
                }
              });
    });
  });
}(jQuery));
$(function(){
  $("#contact").submit(function(event){
    var nom        = $("#name").val();
    var sujet      = $("#subject").val();
    var mail      = $("#email").val();
    var msg    = $("#message").val();
    var dataString = nom + sujet + mail + msg;
    var msg_all    = "Merci de remplir tous les champs";
    var msg_alert  = "Merci de remplir ce champ";
    if (dataString  == "") {
      $("#msg_all").html(msg_all);
    } else if (nom == "") {
      $("#msg_nom").html(msg_alert);
    } else if (sujet == "") {
      $("#msg_sujet").html(msg_alert);
    } else if (mail == "") {
      $("#msg_email").html(msg_alert);
    } else if (msg == "") {
      $("#msg_message").html(msg_alert);
    } else {
      $.ajax({
        url: "https://formspree.io/etienne.pasteur@epitech.eu", 
        method: "POST",
        data: {name: $("#name").val(), email: $("#email").val(), subject: $("#subject").val() , message: $("#message").val()},
        dataType: "json",
        success : function() {
          $("#contact").html("<p>Le mail a bien été envoyé</p>");
        },
        error: function() {
          $("#contact").html("<p>Erreur, l'envoi du mail a échoué.</p>");
        }
      });
      // $.ajax({
      //   type : "POST",
      //   url: $(this).attr("action"),
      //   data: $(this).serialize(),
      //   success : function() {
      //     $("#contact").html("<p>Le mail a bien été envoyé</p>");
      //   },
      //   error: function() {
      //     $("#contact").html("<p>Erreur, l'envoi du mail a échoué.</p>");
      //   }
      // });
    }
    return false;
  });
});
$(document).ready(function() {
  $(".fancybox").fancybox({       
    padding : 0,
    beforeShow: function () {
      this.title = $(this.element).attr('title');
      this.title = '<h4>' + this.title + '</h4>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
    },
    helpers : {
      title : { type: 'inside' },
    }
  });
  $('.fancybox-media').fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    helpers : {
      media : {}
    }
  });
});
$('#services img').hover(
 function(){ $(this).addClass('animated pulse') },
 function(){ $(this).removeClass('animated pulse') })
