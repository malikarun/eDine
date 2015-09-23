(function() {
  'use strict';

  angular
    .module('eDine')
    .directive('headerShrink', headerShrink);

  function headerShrink($document) {
    return {
      restrict: 'A',
      link: linkFn
    };

    ///////////////

    function linkFn($scope, $element) {
      var starty = 0,
          shrinkHeaderAmt,
          shrinkFooterAmt,
          prev = 0,
          delta = 0,
          dir = 1,
          prevDir = 1,
          prevHeaderShrinkAmt = 0,
          prevFooterShrinkAmt = 0;

      // Threshold is equal to bar-height + create-post height;
      var threshold = 88;

      // header
      var header = $document[0].body.querySelectorAll('.bar-header'),
          headerHeight = header[0].offsetHeight;

      // footer
      var footer = $document[0].body.querySelector('.bar-footer'),
          footerHeight = footer.offsetHeight;

      $element.bind('scroll', function(e) {
        e = e.originalEvent;

        // if negative scrolling (eg: pull to refresh don't do anything)
        if(e.target.scrollTop < 0) {
          return false;
        }

        // Scroll delta
        delta = e.target.scrollTop - prev;

        // Claculate direction of scrolling
        dir = delta >= 0 ? 1 : -1;

        // Capture change of direction
        if(dir !== prevDir) {
          starty = e.target.scrollTop;
        }

        // If scrolling up
        if(dir === 1) {
          // Calculate shrinking amount
          shrinkHeaderAmt = headerHeight - Math.max(0, (starty + headerHeight) - e.target.scrollTop);

          // Calculate shrinking amount
          shrinkFooterAmt = footerHeight - Math.max(0, (starty + footerHeight) - e.target.scrollTop);

          // Start shrink
          shrink(header, Math.min(threshold, shrinkHeaderAmt), footer, Math.min(threshold, shrinkFooterAmt));

          // Save prev shrink amount
          prevHeaderShrinkAmt = Math.min(threshold, shrinkHeaderAmt);
          prevFooterShrinkAmt = Math.min(threshold, shrinkFooterAmt);
        }
        // If scrolling down
        else {
          // Calculate expansion amount
          shrinkHeaderAmt = prevHeaderShrinkAmt - Math.min(threshold, (starty - e.target.scrollTop));

          // Calculate shrinking for footer
          shrinkFooterAmt = prevFooterShrinkAmt - Math.min(footerHeight, (starty - e.target.scrollTop));

          // Start shrink
          shrink(header, shrinkHeaderAmt, footer, shrinkFooterAmt);
        }

        // Save prev states for comparison
        prevDir = dir;
        prev = e.target.scrollTop;
      });
    }

    function shrink(header, shrinkHeaderAmt, footer, shrinkFooterAmt) {
      ionic.requestAnimationFrame(function() {
        // The translation amounts should never be negative
        shrinkHeaderAmt = shrinkHeaderAmt < 0 ? 0 : shrinkHeaderAmt;
        shrinkFooterAmt = shrinkFooterAmt < 0 ? 0 : shrinkFooterAmt;

        // Re-position the header
        for (var i = 0, len = header.length; i < len; i++) {
          header[i].style[ionic.CSS.TRANSFORM] = 'translate3d(0,-' + shrinkHeaderAmt + 'px, 0)';
        }

        // Re-position the tabs
        footer.style[ionic.CSS.TRANSFORM] = 'translate3d(0,' + shrinkFooterAmt + 'px, 0)';
      });
    }
  }
})();