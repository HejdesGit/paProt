"use strict";

var rattSvar = "TOR";

$(document).ready(function () {
  $("#country").drum({
    panelCount: 10,
    dail_w: 200,
    dail_h: 200,
    dail_stroke_color: 'red',
    dail_stroke_width: 5
  });

  $('.nodbroms').click(function () {
    $(".nodbroms").hide();
    $("main").show();
  });

  $('.chooser').click(function () {
    if ($(this).hasClass("input")) {
      if ($(".js-example-basic-single").val() == rattSvar) {
        $(".awnswer").text("RÄTT SVAR!")
      } else {
        $(".awnswer").text("FEL SVAR!")
      }
    } else { //@TODO HEJDE: $(this).hasClass("roller")
      if ($("#country").val() == rattSvar) {
        $(".awnswer").text("RÄTT SVAR!")
      } else {
        $(".awnswer").text("FEL SVAR!")
      }
    }
  });


  var names = [];
  $("#country option").each(function () {
    var value = $(this).text();
    names.push(value);

  });

  // Ska ta första bokstaven
  $('.inputer').keyup(function () {
    var typedWord;
    typedWord = $(this).val();

    for (var i = 0; i < names.length; i++) {
      if (names[i].substring(0, typedWord.length).toLowerCase().indexOf(typedWord) >= 0) {
        $("#country").drum('setIndex', i);
      }
    }
  });


  $('main').hide();


  //Dev
  // $('.nodbroms').hide();
  // $('main').show();
  // $('.roller').hide();
  //
  // $('.chooser.scroll').hide();
  // $('roller').hide();

});
