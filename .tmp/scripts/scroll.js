"use strict";

$(document).ready(function () {
  Hammer.plugins.fakeMultitouch();
  var count = 0,
      Init = function Init() {
    $("#country").drum({
      panelCount: 10,
      dail_w: 75,
      dail_h: 20,
      dail_stroke_color: '#810000',
      dail_stroke_width: 3

    });
  };

  return {
    Start: Init
  };
});
//# sourceMappingURL=scroll.js.map
