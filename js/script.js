(function($) {
    'use strict';
$('.count-num').rCounter({duration: 100});
})(jQuery);

var waypoint = new Waypoint({
    element: document.getElementById('socios'),
    handler: function() {
        notify('Basic waypoint triggered')
    }
  })