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
        AutoDrop.Start();
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
      AutoDrop.Start();
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
    Hide.all();
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
  }

  return {
    Load: Load,
    Start: Start
  };

})();

var Wool = (function () {
  function Start() {
    Hide.all();
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


// Todo: use css or move to own html and use paths
var Hide = (function () {
  function all() {
    $('.nodbroms').hide();
    $('.default').hide();
    $('.topText').hide();
    $('.select2').hide();
    $('.scroll1').hide();
    $('.scroll2').hide();
    $('.supplementary').hide();
    $('.wool').hide();
    $('.musicFreeText').hide()
  }

  return {
    all: all
  };

})();

var MusicFreeText = (function () {
  var identity = ".music";
  function Start() {
    Hide.all();
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
    Supplementary.Load();
    Hide.all();
    $('.default').show();
  }

  return {
    Start: Start
  };

})();

var AutoDrop = (function () {
  function Start() {
    $('.js-example-basic-single').select2();
    Hide.all();
    $('.nodbroms').show();
    _clickEvent();
    HandBreak.clickEvent('.select2');
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
    Start: Start
  };

})();

var Scroll1 = (function () {
  function Start() {
    Hammer.plugins.fakeMultitouch();
    Load();
    Hide.all();
    $('.nodbroms').show();
    HandBreak.clickEvent('.scroll1');
    _setupButtonEvent();
  }

  function Load() {
    $('#scroll1').drum({
      panelCount: 10,
      dail_w: 75,
      dail_h: 20,
      dail_stroke_color: '#810000',
      dail_stroke_width: 3
    });
  }

  function _setupButtonEvent() {
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
    Hide.all();
    $('.nodbroms').show();
    HandBreak.clickEvent('.scroll2');
    _getNamesInScroll();
    _inputer();
    _setupButtonEvent();
  }

  function Load() {
    $('#scroll2').drum({
      panelCount: 10,
      dail_w: 75,
      dail_h: 20,
      dail_stroke_color: '#810000',
      dail_stroke_width: 3
    });
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
    });
  };

  return {
    clickEvent: clickEvent
  };

})();
