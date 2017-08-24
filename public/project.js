$(document).ready(function(){
  $("#tanks-container").hover(function(){
    $("#image-tanks").css("display","none")
    $("#tanks-project-detail-container").css('visibility','visible')
    $("#tanks-close-button").css('visibility','visible')
    $('#tanks-content').addClass('slideExpandUp')
  },function(){
    $('#tanks-content').css('visibility','hidden');
    $(".project-detail-container").css('visibility','hidden')
    $(".close-button").css('visibility','hidden')
    $('#tanks-content').removeClass('slideExpandUp');
    $("#image-tanks").css("display","inline")
  })
  $("#muzica-container").hover(function(){
    $("#image-muzica").css("display","none")
    $("#muzica-project-detail-container").css('visibility','visible')
    $("#muzica-close-button").css('visibility','visible')
    $('#muzica-content').addClass('slideExpandUp');
  },function(){
    $('#muzica-content').css('visibility','hidden');
    $(".project-detail-container").css('visibility','hidden')
    $(".close-button").css('visibility','hidden')
    $('#muzica-content').removeClass('slideExpandUp');
    $("#image-muzica").css("display","inline")
  })
  $("#whatsup-container").hover(function(){
    $("#image-whatsup").css("display","none")
    $("#whatsup-project-detail-container").css('visibility','visible')
    $("#whatsup-close-button").css('visibility','visible')
    $('#whatsup-content').addClass('slideExpandUp');
  },function(){
    $('#whatsup-content').css('visibility','hidden');
    $(".project-detail-container").css('visibility','hidden')
    $(".close-button").css('visibility','hidden')
    $('#whatsup-content').removeClass('slideExpandUp');
    $("#image-whatsup").css("display","inline")
  })
  $("#pixelart-container").hover(function(){
    $("#image-pixelart").css("display","none")
    $("#pixelart-project-detail-container").css('visibility','visible')
    $("#pixelart-close-button").css('visibility','visible')
    $('#pixelart-content').addClass('slideExpandUp');
  },function(){
    $('#pixelart-content').css('visibility','hidden');
    $(".project-detail-container").css('visibility','hidden')
    $(".close-button").css('visibility','hidden')
    $('#pixelart-content').removeClass('slideExpandUp');
    $("#image-pixelart").css("display","inline")
  })
  $("#jokebook-container").hover(function(){
    $("#image-jokebook").css("display","none")
    $("#jokebook-project-detail-container").css('visibility','visible')
    $("#jokebook-close-button").css('visibility','visible')
    $('#jokebook-content').addClass('slideExpandUp');
  },function(){
    $('#jokebook-content').css('visibility','none');
    $(".project-detail-container").css('visibility','hidden')
    $(".close-button").css('visibility','hidden')
    $('#jokebook-content').removeClass('slideExpandUp');
    $("#image-jokebook").css("display","inline")
  })
  $('#quote').hover(function(){
    $('#quote-text').css('visibility','hidden')
    $('#quote-text').removeClass('slideLeft');
    window.setTimeout(slideLeft,100);
  },function(){})
  function slideLeft(){
    $('#quote-text').addClass('slideLeft')
  }
  $('#skills-container').hover(function(){
    $('#skills-title').css('display','none')
    $('#skills-title').removeClass('fadeIn')
    $('#skills-content').css('display','inline')
    $('#skills-content').addClass('slideRight');
    // $('#skills-title').css('visibility','hidden')
    // $('#skills-title').removeClass('fadeIn')
    // $('#skills-content').addClass('slideRight');
    // $('.skills1').css('visibility','hidden')
    // $('.skills1').removeClass('expandUp');
    // window.setTimeout(expandUp,100);
  },function(){
    $('#skills-content').removeClass('slideExpandUp')
    $('#skills-content').css('visibility','hidden')
    $('#skills-content').css('display','none')
    $('#skills-title').css('display','inline')
    $('#skills-title').css('visibility','hidden')
    $('#skills-title').addClass('fadeIn')
    // $('#skills-content').removeClass('slideRight')
    // $('#skills-content').css('visibility','hidden')
    // $('#skills-title').addClass('fadeIn')
  })
  function expandUp(){
    $('.skills1').addClass('expandUp')
  }
  $('#about-container').hover(function(){
    $('#about-title').css('display','none')
    $('#about-title').removeClass('fadeIn')
    $('#about-content').css('display','inline')
    $('#about-content').addClass('slideExpandUp');
  },function(){
    $('#about-content').removeClass('slideExpandUp')
    $('#about-content').css('visibility','hidden')
    $('#about-content').css('display','none')
    $('#about-title').css('display','inline')
    $('#about-title').css('visibility','hidden')
    $('#about-title').addClass('fadeIn')
  })
  function slideExpandUp(){
    $('#about-content').css('visibility','hidden')
    $('#about-content').removeclass('slideExpandUp')
  }
  $('#contact-container').hover(function(){
    $('#contact-title').css('display','none')
    $('#contact-title').removeClass('fadeIn')
    $('#contact-content').css('display','inline')
    $('#contact-content').addClass('slideDown');
    // $('#contact-title').css('visibility','hidden')
    // $('#contact-title').removeClass('fadeIn')
    // $('#contact-content').addClass('slideDown');
    // $('.contact-container').css('visibility','hidden')
    // $('.contact-container').removeClass('slideDown');
    // window.setTimeout(slideDown,100);
  },function(){
    $('#contact-content').removeClass('slideDown')
    $('#contact-content').css('visibility','hidden')
    $('#contact-content').css('display','none')
    $('#contact-title').css('display','inline')
    $('#contact-title').css('visibility','hidden')
    $('#contact-title').addClass('fadeIn')
  })
  function slideDown(){
    $('.contact-container').addClass('slideDown')
  }
  $('#picture-container').hover(function(){
    $('#selfie').css('visibility','hidden');
    $('#selfie').removeClass('fadeIn')
    // $('.picture-tile').css('visibility','hidden')
    // $('.picture-tile').removeClass('fadeIn');
    window.setTimeout(fadeIn,100);
  },function(){})
  function fadeIn(){
    $('#selfie').addClass('fadeIn')
  }
});
