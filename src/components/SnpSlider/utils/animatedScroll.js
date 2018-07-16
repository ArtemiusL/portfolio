/* eslint-disable */

(function (window) {
    var requestAnimFrame = (function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||  window.mozRequestAnimationFrame||function(callback){window.setTimeout(callback,1000/60);};})();

    const easeFunctions = {
        linear: function (t, b, c, d) {
            return c*t/d + b;
        },
        easeInOutExpo: function (t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
            t--;
            return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
        },
        easeInOutCirc: function (t, b, c, d) {
            t /= d/2;
            if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            t -= 2;
            return c/2 * (Math.sqrt(1 - t*t) + 1) + b;
        },
        easeInOutQuint: function (t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2*t*t*t*t*t + b;
            t -= 2;
            return c/2*(t*t*t*t*t + 2) + b;
        },
        easeInOutQuart: function (t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2*t*t*t*t + b;
            t -= 2;
            return -c/2 * (t*t*t*t - 2) + b;
        },
        easeInOutCubic: function (t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2*t*t*t + b;
            t -= 2;
            return c/2*(t*t*t + 2) + b;
        },
        easeInOutSine: function (t, b, c, d) {
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        },
    }

    var animatedScrollTo = function (element, to, duration, easing, callback) {
        var scrollLeft = element.scrollLeft;
        var start = scrollLeft >= 0 ? scrollLeft : 0;
        var change = to - start,
        animationStart = +new Date();
        var animating = true;
        var lastpos = null;
        var maxScroll = element.scrollWidth - element.offsetWidth;

        if (scrollLeft < 0 || scrollLeft > maxScroll) {

            if (callback) { callback(); }
            return;
        }

        var animateScroll = function() {
            if (!animating) {
                if (callback) { callback(); }
                return;
            }
            requestAnimFrame(animateScroll);
            var now = +new Date();
            var val = Math.floor(easeFunctions[easing](now - animationStart, start, change, duration));
            if (lastpos) {
                if (lastpos >= Math.floor(element.scrollLeft)) {
                    lastpos = val;
                    element.scrollLeft = val;
                } else {
                    animating = false;
                }
            } else {
                lastpos = val;
                element.scrollLeft = val;
            }

            if (now > animationStart + duration) {
                element.scrollLeft = to;
                animating = false;
                if (callback) { callback(); }
            }
        };
        requestAnimFrame(animateScroll);
    };

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = animatedScrollTo;
    } else {
        window.animatedScrollTo = animatedScrollTo;
    }
})(!__SERVER__ && window);
