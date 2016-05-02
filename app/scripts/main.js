'use strict';

// @TODO HEJDE: FIX SUP DRUM DEFAULT VALUE

var correctAnswerScroll = 'TOR';

var sup1Answer = 'PUDA';
var sup2Answer = 'PUAL';
var sup3Answer = 'PICI';
var sup4Answer = 'PIVE';

var music1Aswer = "1";
var music2Answer = "2";
var music3Answer = "3";

var useDebug = true;

$(document).ready(function () {
  $('.select2').show();

  $(window).bind('hashchange', function () {
    var hash = window.location.hash;
    switch (hash) {
      case '#scroll1':
        Scroll1.Start();
        break;
      case '#scroll2':
        Scroll2.Start();
        break;
      case '#autoDrop':
        Select2.Start();
        break;
      case '#sup1':
        Supplementary.Start();
        break;
      case '#wool':
        Wool.Start();
        break;
      case '#music':
        MusicFreeText.Start();
        break;
      default:
        Default.Start();
    }
  });

  var hash = window.location.hash;
  switch (hash) {
    case '#scroll1':
      Scroll1.Start();
      break;
    case '#scroll2':
      Scroll2.Start();
      break;
    case '#autoDrop':
      Select2.Start();
      break;
    case '#sup1':
      Supplementary.Start();
      break;
    case '#wool':
      Wool.Start();
      break;
    case '#music':
      MusicFreeText.Start();
      break;
    default:
      Default.Start();
  }


  if (useDebug) {
    // $('.wool').show();
  }
});


var Supplementary = (function () {
  function Start() {
    Hammer.plugins.fakeMultitouch();
    Load();
    $('.supplementary').show();
    $('.sup2').hide();
    $('.sup3').hide();
    $('.sup4').hide();
    _clickEvent();
  }

  function _clickEvent() {
    $('.button.prev').click(function () {
      var nextScreen = _showNext($(this));
      $(".sup" + (parseInt(nextScreen, 10) + 1)).hide();
    });
    $('.button.next').click(function () {
      var nextScreen = _showNext($(this));
      $(".sup" + (parseInt(nextScreen, 10) - 1)).hide();
    });
    function _showNext(element) {
      var classes = element.attr("class").split(' ');
      var lastClass = classes[classes.length - 1];
      $(".sup" + lastClass).show();
      return lastClass;
    }

    $('.button.sup.answer').click(function () {
      if ($('#SupScroll1').val() == sup1Answer) {
        $('.labelSub1').append(' RÄTT');
      } else {
        $('.labelSub1').append(' FEL');
      }

      if ($('#SupScroll2').val() == sup2Answer) {
        $('.labelSub2').append(' RÄTT');
      } else {
        $('.labelSub2').append(' FEL');
      }

      if ($('#SupScroll3').val() == sup3Answer) {
        $('.labelSub3').append(' RÄTT');
      } else {
        $('.labelSub3').append(' FEL');
      }

      if ($('#SupScroll4').val() == sup4Answer) {
        $('.labelSub4').append(' RÄTT');
      } else {
        $('.labelSub4').append(' FEL');
      }
      $('.sup4').hide();
      $('.supAnswer').show();

    })
  }

  function Load() {
    $('.supplementary').show(); // Need to be shown when loaded, hide after load.
    $('#SupScroll1').drum({
      panelCount: 7
    });
    $('#SupScroll2').drum({
      panelCount: 7,
      dail_w: 75,
      dail_h: 20,
      dail_stroke_color: '#810000',
      dail_stroke_width: 3
    });
    $('#SupScroll3').drum({
      panelCount: 7,
      dail_w: 75,
      dail_h: 20,
      dail_stroke_color: '#810000',
      dail_stroke_width: 3
    });
    $('#SupScroll4').drum({
      panelCount: 7,
      dail_w: 75,
      dail_h: 20,
      dail_stroke_color: '#810000',
      dail_stroke_width: 3
    });
    $('.supplementary').hide();
  }

  return {
    Load: Load,
    Start: Start
  };

})();

var Wool = (function () {
  function Start() {
    $('.wool').show();
    $(".draggable").draggable();
    $(".droppable").droppable({
      drop: function (event, ui) {
        //HERE comes UGLY
        var droppedClass = event.target.className.split(" ")[1];
        var dragged = ui.draggable.text().trim();
        if ((droppedClass == "1" && dragged == "Mohair") || (droppedClass == "2" && dragged == "Vikunjaull") || (droppedClass == "3" && dragged == "Merinoull")) {
          _right($(this));
        } else {
          _wrong($(this));
        }
      }
    });

  }

  function _right(element) {
    element
      .addClass("ui-state-highlight")
      .find("p")
      .html("RÄTT!");
  }

  function _wrong(element) {
    element
      .addClass("ui-state-highlight")
      .find("p")
      .html("FEL!");
  }

  return {
    Start: Start
  };

})();


var MusicFreeText = (function () {
  var identity = ".music";

  function Start() {
    $('.musicFreeText').show();
    $('.music2').hide();
    $('.music3').hide();
    _clickEvent();
  }

  function _clickEvent() {
    $('.musicFreeText .button.prev').click(function () {
      var nextScreen = _showNext($(this));
      $(identity + (parseInt(nextScreen, 10) + 1)).hide();
    });
    $('.button.next').click(function () {
      var nextScreen = _showNext($(this));
      $(identity + (parseInt(nextScreen, 10) - 1)).hide();
    });
    function _showNext(element) {
      var classes = element.attr("class").split(' ');
      var lastClass = classes[classes.length - 1];
      $(identity + lastClass).show();
      return lastClass;
    }

    $('.musicFreeText .button.answer').click(function () {
      if ($('.music1Input').val() == music1Aswer) {
        $('.labelAnswer1').append(' RÄTT');
      } else {
        $('.labelAnswer1').append(' FEL');
      }
      if ($('.music2Input').val() == music2Answer) {
        $('.labelAnswer2').append(' RÄTT');
      } else {
        $('.labelAnswer2').append(' FEL');
      }

      if ($('.music3Input').val() == music3Answer) {
        $('.labelAnswer3').append(' RÄTT');
      } else {
        $('.labelAnswer3').append(' FEL');
      }
      $('.music3').hide();
      $('.musicAnswer').show();
    })
  }

  return {
    Start: Start
  };

})();

var Default = (function () {
  function Start() {
    Scroll1.Load();
    Scroll2.Load();
    Select2.Load();
    Supplementary.Load();
    $('.default').show();
    _clickEvent();

    function _clickEvent() {
      $('.default a').click(function () {
        $('.default').hide();
      });
    }
  }

  return {
    Start: Start
  };

})();

var Select2 = (function () {
  function Start() {
    Load();
    $('.nodbroms').show();
    _clickEvent();
    HandBreak.clickEvent('.select2');
  }

  function Load() {
    $('.select2').css('visibility', 'visible');
    $('.js-example-basic-single').select2();
    $('.select2').css('visibility', 'hidden');
  }

  function _clickEvent() {
    $('.chooser.select2').click(function () {
      if ($('.js-example-basic-single').val() == correctAnswerScroll) {
        $('.awnswer').text('RÄTT SVAR!')
      } else {
        $('.awnswer').text('FEL SVAR!')
      }
    });
  }

  return {
    Start: Start,
    Load: Load
  };

})();

var Scroll1 = (function () {
  function Start() {
    Hammer.plugins.fakeMultitouch();
    Load();
    $('.nodbroms').show();
    HandBreak.clickEvent('.scroll1');
    _clickEvent();
  }

  function Load() {
    $('.scroll1').show(); // Need to be shown when loaded, hide after load.
    $('#scroll1').drum({
      panelCount: 10,
      dail_w: 75,
      dail_h: 20,
      dail_stroke_color: '#810000',
      dail_stroke_width: 3
    });
    $('.scroll1').hide();
  }

  function _clickEvent() {
    $('.chooser.scroll').click(function () {
      if ($('#scroll1').val() == correctAnswerScroll) {
        $('.awnswer').text('RÄTT SVAR!')
      } else {
        $('.awnswer').text('FEL SVAR!')
      }
    });
  }

  return {
    Start: Start,
    Load: Load
  };

})();

var Scroll2 = (function () {
  var names = [];

  function Start() {
    Hammer.plugins.fakeMultitouch();
    Load();
    $('.nodbroms').show();
    HandBreak.clickEvent('.scroll2');
    _getNamesInScroll();
    _inputer();
    _setupButtonEvent();
  }

  function Load() {
    $('.scroll2').show(); // Need to be shown when loaded, hide after load.
    $('#scroll2').drum({
      panelCount: 10,
      dail_w: 75,
      dail_h: 20,
      dail_stroke_color: '#810000',
      dail_stroke_width: 3
    });
    $('.scroll2').hide();
  }

  function _setupButtonEvent() {
    $('.chooser.input').click(function () {
      if ($('#scroll2').val() == correctAnswerScroll) {
        $('.awnswer').text('RÄTT SVAR!')
      } else {
        $('.awnswer').text('FEL SVAR!')
      }
    });
  }

  function _inputer() {
    $('.inputer').keyup(function () {
      var typedWord;
      typedWord = $(this).val().toLowerCase();

      for (var i = 0; i < names.length; i++) {
        if (names[i].substring(0, typedWord.length).toLowerCase().indexOf(typedWord) >= 0) {
          $('#scroll2').drum('setIndex', i);
        }
      }
    });
  }

  function _getNamesInScroll() {
    $('#scroll2 option').each(function () {
      var value = $(this).text();
      names.push(value);
    });
  }

  return {
    Start: Start,
    Load: Load
  };

})();

var HandBreak = (function () {

  var clickEvent = function (module) {
    $('.nodbroms').click(function () {
      $('.nodbroms').hide();
      $('.topText').show();
      $(module).show();
      $(module).css('visibility', 'visible');
    });
  };

  return {
    clickEvent: clickEvent
  };

})();
