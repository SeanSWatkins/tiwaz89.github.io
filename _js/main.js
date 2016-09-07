var $ = window.jQuery = require('jquery');
require('typed.js');
require('waypoints/lib/noframework.waypoints.js');
require('velocity-animate');
var smoothScroll = require('smooth-scroll');

$(function(){

    homeTyping();

    waypointAnimations();

    smoothScroll.init({
        selector: 'a'
    });

});

function homeTyping () {

    var el = $('.home__likes');

    // Get height of element as to not mess with
    // the flexbox centering.
    el.html('A');
    var height = el.height();
    el.html('');
    el.height(height);

    // Start typing animation
    el.typed({
        strings: [
            "I code cool websites",
            "I love reading fantasy novels",
            "I listen to rock and metal",
            "I like keeping active",
            "I like drawing and painting"
        ],
        typeSpeed: 50,
        loop: true,
        showCursor: false
    });

}

function skillsAnimation () {

    var skills = $('.skill');
    skills.each(function (i, el) {

        var rating = $(el).children('.skill__rating').attr('rating');
        var bar = $(el).find('.skill__bar');

        bar.velocity({
            width: (rating + '%')
        },{
            duration: 800,
            mobileHA: true
        });

    });

}

function waypointAnimations () {

    var skillsWaypoint = new Waypoint({
        element: document.getElementById('skills'),
        handler: function () {
            skillsAnimation();
            skillsWaypoint.destroy();
        },
        offset: '50%'
    });

}
