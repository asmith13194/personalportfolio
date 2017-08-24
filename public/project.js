$(document).ready(function() {
  $("#tanks-container").hover(function() {
    $("#image-tanks").css("display", "none")
    $("#tanks-project-detail-container").css('visibility', 'visible')
    $("#tanks-close-button").css('visibility', 'visible')
    $('#tanks-content').addClass('slideExpandUp')
  }, function() {
    $('#tanks-content').css('visibility', 'hidden');
    $(".project-detail-container").css('visibility', 'hidden')
    $('#tanks-content').removeClass('slideExpandUp');
    $("#image-tanks").css("display", "inline")
  })
  $("#muzica-container").hover(function() {
    $("#image-muzica").css("display", "none")
    $("#muzica-project-detail-container").css('visibility', 'visible')
    $("#muzica-close-button").css('visibility', 'visible')
    $('#muzica-content').addClass('slideExpandUp');
  }, function() {
    $('#muzica-content').css('visibility', 'hidden');
    $(".project-detail-container").css('visibility', 'hidden')
    $('#muzica-content').removeClass('slideExpandUp');
    $("#image-muzica").css("display", "inline")
  })
  $("#whatsup-container").hover(function() {
    $("#image-whatsup").css("display", "none")
    $("#whatsup-project-detail-container").css('visibility', 'visible')
    $("#whatsup-close-button").css('visibility', 'visible')
    $('#whatsup-content').addClass('slideExpandUp');
  }, function() {
    $('#whatsup-content').css('visibility', 'hidden');
    $(".project-detail-container").css('visibility', 'hidden')
    $('#whatsup-content').removeClass('slideExpandUp');
    $("#image-whatsup").css("display", "inline")
  })
  $("#pixelart-container").hover(function() {
    $("#image-pixelart").css("display", "none")
    $("#pixelart-project-detail-container").css('visibility', 'visible')
    $("#pixelart-close-button").css('visibility', 'visible')
    $('#pixelart-content').addClass('slideExpandUp');
  }, function() {
    $('#pixelart-content').css('visibility', 'hidden');
    $(".project-detail-container").css('visibility', 'hidden')
    $('#pixelart-content').removeClass('slideExpandUp');
    $("#image-pixelart").css("display", "inline")
  })
  $("#jokebook-container").hover(function() {
    $("#image-jokebook").css("display", "none")
    $("#jokebook-project-detail-container").css('visibility', 'visible')
    $("#jokebook-close-button").css('visibility', 'visible')
    $('#jokebook-content').addClass('slideExpandUp');
  }, function() {
    $('#jokebook-content').css('visibility', 'none');
    $(".project-detail-container").css('visibility', 'hidden')
    $('#jokebook-content').removeClass('slideExpandUp');
    $("#image-jokebook").css("display", "inline")
  })
  function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  let quotesArr = [
    '"Science and technology revolutionize our lives, but memory, tradition and myth frame our response." - Arthur Schlesinger',
    '"The art challenges the technology, and the technology inspires the art." - John Lasseter',
    '"If we continue to develop our technology without wisdom or prudence, our servant may prove to be our executioner." - Omar Bradley',
    '"The real danger is not that computers will begin to think like men, but that men will begin to think like computers." - Sydney Harris',
    '"This is the whole point of technology.  It creates an appetite for immortality on the one hand.  It threatens universal extinction on the other. Technology is lust removed from nature." - Don DeLillo',
    '"Technology made large populations possible; large populations now make technology indispensable." - Joseph Krutch',
    '"We are stuck with technology when what we really want is just stuff that works." - Douglas Adams',
    '"The great myth of our times is that technology is communication." - Libby Larsen',
    '"I think that novels that leave out technology misrepresent life as badly as Victorians misrepresented life by leaving out sex." - Kurt Vonnegut',
    '"The human spirit must prevail over technology." - Albert Einstein',
    '"You cannot endow even the best machine with initiative; the jolliest steamroller will not plant flowers." - Walter Lippmann',
    '"Humanity is acquiring all the right technology for all the wrong reasons." - R. Buckminster Fuller',
    '"Technology is a word that describes something that doesn’t work yet." - Douglas Adams',
    '"One machine can do the work of fifty ordinary men.  No machine can do the work of one extraordinary man." - Elbert Hubbard',
    '"It has become appallingly obvious that our technology has exceeded our humanity." - Albert Einstein',
    '"Just because something doesn’t do what you planned it to do doesn’t mean it’s useless." - Thomas Edison',
    '"All of the biggest technological inventions created by man - the airplane, the automobile, the computer - says little about his intelligence, but speaks volumes about his laziness." - Mark Kennedy',
    '"Any sufficiently advanced technology is equivalent to magic." - Arthur C. Clarke',
    '"Technology is anything that wasn’t around when you were born." - Alan Kay'
  ]
  setTimeout(function() {
    changeQuote()
  }, 7000);
  function changeQuote() {
    let randomQuote = getRandom(quotesArr);
    $('#quote-text').html(randomQuote);
    $('#quote-text').css('visibility', 'hidden');
    $('#quote-text').addClass('slideLeft');
    setTimeout(function() {
      $('#quote-text').removeClass('slideLeft');
      setTimeout(function() {
        changeQuote();
      }, 200)
    }, 7000)
  }
  $('#skills-container').mouseover(function() {
    $('#skills-container').removeClass('slideRight')
    $('#skills-title').css('visibility', 'hidden')
    $('#skills-title').removeClass('fadeIn')
    $('#skills-content').css('display', 'block')
    setTimeout(function() {
      $('.skill-item').css('display', 'block')
      $('#skills-title').addClass('slideRight');
      $('.skill-item').addClass('slideRight');
    }, 200)
  })
  function expandUp() {
    $('.skills1').addClass('expandUp')
  }
  $('#about-container').mouseover(function() {
    $('#about-container').removeClass('slideExpandUp')
    $('#about-title').css('visibility', 'hidden')
    $('#about-title').removeClass('fadeIn')
    setTimeout(function() {
      $('#about-content').css('display', 'inline')
      $('#about-title').addClass('slideExpandUp');
      $('.aboutme-container').addClass('slideExpandUp');
    }, 300)
  })
  $('#contact-container').mouseover(function() {
    $('#contact-article').removeClass('slideDown')
    $('#contact-title').css('visibility', 'hidden')
    $('#contact-title').removeClass('fadeIn')
    setTimeout(function() {
      $('#contact-content').css('display', 'inline')
      $('#contact-title').addClass('slideDown');
      $('.contact-info').addClass('slideDown');
    }, 300)
  })
  $('#picture-container').mouseover(function() {
    window.setTimeout(function() {
      $('#selfie').addClass('fadeIn')
    }, 100);
  })
  function fadeIn() {}
  $('#project-container').mouseover(function() {
    $('.image-container').addClass('hatch');
  })
});
