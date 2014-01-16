$(function() {

  // Store our player icons as base64 icons to improve performance.
  var transcript_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAN5JREFUeNpi/P//PwMQKEAxseADEF/AKQs0NOA/eWAByEHYMIg48J98oIDNUBYsjp8I9R42UADE/Eh8UJA9gLINoOwP6C7F6SUodkBzqQNU3ACIPwDxBSAWQHdpPNSVuFwagEcc5AN9kIuxeT+fgULAxEADgO7Sj0CcgMf7E6BeJMlQkKYNeNSDYn8/qYbWA7EAgSRFsveHT0QlQNMyOjgADTqQ/gssWCTxRZQCHkMPQukP6Ib6Q4s0XC61x2NhAEwftojSJzMoP1Aroh7giv0JZBq4EJehjLSoTgACDAAM7A9aPeB9aAAAAABJRU5ErkJggg==";
  var speed_normal_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAONJREFUeNq8VYsRgjAMDSwAG8gIjuAKbuAIdQJxE9zADewIdQNGqBPE4AWt2O+1+O4e9Er6SPpKAEQEC1uiIEqixg80zwmOsa0F26RYCLmgOTYoOmA6hmXWuYIzrjZRgfl4b0U1pQ4AI7GBPDyIHVHXdDl4BO/ES6Row1qv8qWjHMUG7BK2QM7la0eme75Pz2/EM3HLc4p4cmRcQeDNvZHpSOyYo2cN1AlGbIxx6wus2bUYHNmIib030mPUXLIyTEDL+MeoUgf/6wNY7fDr4B7FoWetYg1l+GvrW61JF/mdPAUYAF/t/6lwFqcoAAAAAElFTkSuQmCC";
  var speed_fast_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQ9JREFUeNq0lf0NgjAQxS/G/2UDcQM2sCPoBoygG3QE3YARcAJ1A5hANhAnqK96jedpgx/wkl+Aa3hc79pCzjmKkIINOLhntaAEeezdd8GEzT5RAxZdpt6wct/Lxkx/NXwxlqal+19GmhrXj3xTaUx35fTQBVRgLmI1aMVzBib0qvltjDNtxXLJOKanlfLVdNTejtVXLcXlZ2NACqZgxzNa8VjBPkbXsw11eZNpwtnKVZLxmJV1HalsJpEs9+AMTiABJcd95gfVExqpBmhtuXFrMANL0LBZzeaexdNbqlFh61lxr+MhVooyFOLeBtPC9acs1LSgfnS8rYght+lgB8ogR99gh7T+ndhffidXAQYA6cCTMaDN2rIAAAAASUVORK5CYII=";
  var speed_fastest_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQZJREFUeNq0VdERgjAMLZz/sgFsYDcQN4ANYANHYARGcARGYAPLBOIGOEFN4H1UbDkR+u7e0bTpS5peg9BaCwclsSYq/YmeeCOmrr22yYTY6t/QIviiKDsMeh3Yv3CJ/iNoIrWJKr0NnFDEWqGYcCWexDYcifU4Qpa9IzrPN2uzDbiWpH23RM6JCuPI4WNDzseXjkU+yoPYQvxJ7Igl1kvYc0gWTRyiMb4VMYXNdR+IF6xZ7yFcOMYLJeiJjTGfIfvMtTHEJhskxAYIdAhUQbSC/YWDcRlzFDM7gi/X+gxRhbEJFYwvYMo2FtvBmSehcRl7YCqXj2fqvaF4aX3emvQuv5O3AAMAeQRq8MPwJF0AAAAASUVORK5CYII=";
  var layout_normal_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFRJREFUeNpi/P//PwO1ARMDDcAIN5QFi5gCFBMLDmCIgGIfCSsA8Yf/pIEFaGYwMKIlKQcg3k+GjxlHY3/UUOyGXgDiiySakYiRvkaLvhFsKECAAQB9+1iHlHQE3gAAAABJRU5ErkJggg==";
  var layout_stacked_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFhJREFUeNpi/P//PwO1ARMDDQBNDGVBYhcAsQAFZl0A4g1gFihMgXjBf+qABJB5jNCIolZsHQRih6ETUaOGjhpKI0MXUsm8BSCCEak8pVqBwjiyC2mAAAMA+xxkCh9cY0gAAAAASUVORK5CYII=";


  // Embed JWPlayer
  jwplayer("video").setup({
    playlist: [{
      image: "images/bg.png",
      sources: [{
        file: "https://s3.amazonaws.com/drupalize.me/_testing_joe_/jwp6/2013-10-31-Using-Drupal-4-01-960x540-300k.mp4",
        label: "360p SD"
      },{
        file: "https://s3.amazonaws.com/drupalize.me/_testing_joe_/jwp6/2013-10-31-Using-Drupal-4-01-960x540-1200k.mp4",
        label: "720p HD"
      }],
      tracks: [{
        file: "jwplayer/english.vtt",
        label: "English",
        kind: "captions"
      },{
        file: "jwplayer/french.vtt",
        label: "French",
        kind: "captions"
      }]
    }],
    skin: "jwplayer/skins/bekle.xml",
    width: "100%",
    aspectratio: "16:9"
  });

  // Once the first video is played, add our custom buttons.
  jwplayer().onPlay(function(){
    playerSetup(this);
  });

  function playerSetup(player) {
    // Add 2x speed button when in HTML5 mode
    if (player.getRenderingMode() == 'html5') {
      player.addButton(
        speed_normal_icon,
        "Speed",
        function() {
          var video = document.getElementById('video').querySelector("video");
          if (video.playbackRate == 1.0) {
            video.playbackRate = 1.5;
            $('#video_dock_speed').css('background-image', "url(" + speed_fast_icon + ")");
          }
          else if (video.playbackRate == 1.5) {
            video.playbackRate = 2.0;
            $('#video_dock_speed').css('background-image', "url(" + speed_fastest_icon + ")");
          }
          else {
            video.playbackRate = 1.0;
            $('#video_dock_speed').css('background-image', "url(" + speed_normal_icon + ")");
          }
        },
        "speed"
      );
    }

    // Add a transcript toggle button
    player.addButton(
      transcript_icon,
      "Transcript",
      function() {
        $('.transcript').toggle();
      },
      "transcript"
    );

    // Add a layout toggle button
    player.addButton(
      layout_stacked_icon,
      "Layout",
      function() {
        $('.hero').toggleClass('stacked');
        if ($('.hero.stacked').length) {
          $('#video_dock_layout').css('background-image', "url(" + layout_normal_icon + ")");
        }
        else {
          $('#video_dock_layout').css('background-image', "url(" + layout_stacked_icon + ")");
        }
      },
      "layout"
    );
  }

  // Transcript filter
  $('#transcript-filter').keyup(function() {
    if ($(this).val().length) {
      $('.transcript-list li').hide().filter(function () {
        return $(this).text().toLowerCase().indexOf($('#transcript-filter').val().toLowerCase()) != -1;
      }).show();
    }
    else {
      $('.transcript-list li').show();
    }
  });

  // Transcript seek links
  $('.time').click(function() {
    var position = $(this).attr('data-offset');
    jwplayer().seek(position);
  });

  // Transcript close button
  $('.close').click(function() {
    $('.transcript').hide();
  });

  // Playlist navigation
  $('.playlist-content a').click(function() {
    $('.playlist-content a').removeClass('active');
    $(this).addClass('active');

    var title = $(this).find('.playlist-item-title').html();
    $('#page-title').html(title);
    $(document).attr("title", title);

    if (!$('.js-tabs a.description').hasClass('active')) {
      $('.js-tabs a.description').click();
    }

    $('.node').hide();
    $('.loading').show();

    // Mimics the loading of a node content. On production, we will make an
    // AJAX call to return the node content.
    setTimeout(function() {
      $('.loading').hide();
      $('.node').fadeIn('fast');
    }, 1000);

    // Simulates a file load. On production, the file and image uris will be
    // taken from attributes applied to each playlist item DOM element.
    jwplayer().load([{
      image: "images/bg2.jpg",
      sources: [{
        file: "https://s3.amazonaws.com/drupalize.me/_testing_joe_/jwp6/2013-10-31-Media-01-960x540-300k.mp4",
        label: "360p SD"
      },{
        file: "https://s3.amazonaws.com/drupalize.me/_testing_joe_/jwp6/2013-10-31-Media-01-960x540-1200k.mp4",
        label: "720p HD"
      }]
    }]);

    return false;
  });

  // Tab navigation
  $('.js-tabs a').click(function() {
    $('.js-tabs a').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-tab');
    $('.tab-content').hide();
    $('.' + selector).show();

    return false;
  });

  // Add to Queue
  $('.add-to-queue').click(function() {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $(this).find('.text').html('In your Queue');
    }
    else {
      $(this).find('.text').html('Add to Queue');
    }

    return false;
  });

  setTimeout(function() {
    // Animate series progress water
    var percent = $('.series-progress').attr('data-percent');
    var position = (80 / 100) * percent;
    var position = 80 - position;
    $('.series-progress .water').css('top', position + 'px');

    // Animate series progress percent
    $({number: 0}).animate({number: percent}, {
      duration: 2000,
      easing: 'linear',
      step: function() {
        $('.series-progress .percent').text(Math.floor(this.number) + '%');
      },
      complete: function() {
        $('.series-progress .percent').text(this.number + '%');
      }
    });
  }, 1000);
});