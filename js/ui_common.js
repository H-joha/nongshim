$(function () {
  // category : active효과
  $('.category a').on('click', function () {
    $(this).parent().addClass('active').siblings().removeClass('active');
  });

  // 데스크탑 헤더 : on 클래스
  $('#header').on('mouseenter', function () {
    if ($(window).outerWidth() > 1200) {
      $(this).addClass('on');
    }
  });

  $('#header').on('mouseleave', function () {
    $(this).removeClass('on');
  });

  // 데스크탑 헤더 gnb depth02
  $('#header .header_bottom .gnb .depth02').hide();

  $('#header .header_bottom .gnb>li').on('mouseenter', function () {
    $('#header .header_bottom .gnb_wrap').addClass('on');
    $(this).find('.depth02').stop().fadeIn(500);
  });

  $('#header .header_bottom .gnb>li').on('mouseleave', function () {
    $('#header .header_bottom .gnb_wrap').removeClass('on');
    $(this).find('.depth02').hide();
  });

  // 데스크탑 헤더 util depth02
  $('#header .header_bottom .util .depth02').hide();

  $('#header .header_bottom .util>li').on('mouseenter', function () {
    $(this).find('.depth02').show().siblings().find('.depth02').hide();
  });

  $('#header .header_bottom .util>li').on('mouseleave', function () {
    $(this).find('.depth02').hide();
  });

  // 데스크탑 all_menu  : open 클래스
  $('#header .header_bottom .util_wrap .btn_all_menu').on('click', function () {
    $('body').addClass('on');
    $('#header .header_bottom .all_menu_area').addClass('open');
  });

  $('#header .header_bottom .all_menu_area .btn_close').on(
    'click',
    function () {
      $('body').removeClass('on');
      $('#header .header_bottom .all_menu_area').removeClass('open');
    }
  );

  // 타블렛&모바일 헤더 : on 클래스
  $('#header .header_bottom .m_util_wrap .btn_lang').on(
    'mouseenter',
    function () {
      $('body').addClass('on');
      $('#header').addClass('on');
      $('#header .header_bottom .dimmed').addClass('on');
    }
  );

  $('#header .header_bottom .m_util_wrap .btn_lang').on(
    'mouseleave',
    function () {
      $('body').removeClass('on');
      $('#header').removeClass('on');
      $('#header .header_bottom .dimmed').removeClass('on');
    }
  );

  $('#header .all_util_wrap .btn_mypage, #header .all_util_wrap .btn_lang').on(
    'mouseenter',
    function () {
      $('body').addClass('on');
      $('#header .header_bottom .m_all_menu_area').addClass('on');
    }
  );
  $('#header .all_util_wrap .btn_mypage, #header .all_util_wrap .btn_lang').on(
    'mouseleave',
    function () {
      $('#header .header_bottom .m_all_menu_area').removeClass('on');
    }
  );

  // 타블렛&모바일 m_all_menu : open 클래스
  $('#header .m_util_wrap .btn_all_menu').on('click', function () {
    $('#header .header_bottom .logo').addClass('on');
    $('#header .m_util_wrap').hide();
    $('body').addClass('on');
    $('#header .m_all_menu_area').addClass('open');
  });

  $('#header .m_all_menu_area .util .btn_close').on('click', function () {
    $('#header .header_bottom .logo').removeClass('on');
    $('body').removeClass('on');
    $('#header .m_all_menu_area').removeClass('open');
    $('#header .m_util_wrap').show();
  });

  // 타블렛&모바일 m_all_menu depth03 : on 클래스
  $('#header .m_all_menu .depth02>li>a').on('click', function () {
    $(this).next().addClass('on');
    $('#header .header_bottom .logo').removeClass('on');
  });

  $('#header .m_all_menu .depth03_box .btn_back').on('click', function () {
    $('#header .header_bottom .logo').addClass('on');
    $('#header .m_all_menu .depth03_box').removeClass('on');
  });

  // 헤더 스크롤 방향판단 이벤트 : fixed 클래스, hide 클래스
  var prevSt = 0;

  $(window)
    .on('scroll', function () {
      var nextSt = $(this).scrollTop();

      if (nextSt > 0) {
        if (prevSt < nextSt) {
          $('#header').addClass('hide');
        } else {
          $('#header').removeClass('hide');
        }
      }
      prevSt = nextSt;

      if (nextSt > 125) {
        $('#header').addClass('fixed');
      } else {
        $('#header').removeClass('fixed');
      }
    })
    .trigger('scroll');

  // 메인 슬라이더 섹션 : 슬라이더 재생 버튼
  var mainSlider = new Swiper('.main_slider', {
    autoplay: {
      delay: 5000,
    },

    pagination: {
      el: '.swiper-pagination',
    },
  });

  var btnFlag = true;

  // 메인 슬라이더 섹션 : 스크롤 다운 버튼
  $('.main_slider_wrap .btn_down').on('click', function (e) {
    e.preventDefault();

    if ($(window).outerWidth() > 1200) {
      $('html, body').animate({ scrollTop: 900 }, 400);
    } else {
      $('html, body').animate({ scrollTop: 570 }, 400);
    }
  });

  $('.main_slider_wrap .main_slider .btn_pause').on('click', function () {
    if (btnFlag) {
      $(this).addClass('on');
      $(this).html('PLAY');
      mainSlider.autoplay.stop();
    } else {
      $(this).removeClass('on');
      $(this).html('STOP');
      mainSlider.autoplay.start();
    }
    btnFlag = !btnFlag;
  });

  // 메인 뉴스 섹션
  var newsSlider = new Swiper('.news_slider', {
    loop: true,

    slidesPerView: 'auto',
    spaceBetween: 40,
    centeredSlides: true,

    breakpoints: {
      // 타블렛 분기점 : 1200px 이하
      1200: {
        spaceBetween: 20,
      },
    },
  });

  // 메인 스토리 섹션
  var storySlider = new Swiper('.story_slider', {
    loop: true,

    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,

    breakpoints: {
      // 타블렛 분기점 : 1200px 이하
      1200: {
        spaceBetween: 10,
      },
    },
  });

  // - 메인 스토리 슬라이더 텍스트 연결
  $('.main_story .txt_wrap:gt(0)').hide();

  storySlider.on('slideChange', function () {
    var idx = storySlider.realIndex;

    $('.main_story .txt_wrap').eq(idx).show().siblings().hide();
  });

  // 메인 지도 섹션
  $('.main_map .map_area .map:gt(0)').hide();
  $('.main_map .issue_wrap .issue:gt(0)').hide();

  $('.main_map .tab_area .tab li').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');

    var idx = $(this).index();

    $('.main_map .map_area .map').eq(idx).show().siblings().hide();
    $('.main_map .issue_wrap .issue').eq(idx).show().siblings().hide();
  });

  // 푸터 : 패밀리사이트
  $('#footer .btn_famaily').on('click', function (e) {
    e.preventDefault();
    $('body').addClass('on');
    $(this).addClass('on');
    $('#footer .dimmed').addClass('on');
    $('#footer .family_site_wrap .family_site_box').addClass('on');
  });

  $('#footer .family_site_wrap .btn_close').on('click', function (e) {
    e.preventDefault();
    $('#footer .family_site_wrap .family_site_box').removeClass('on');
    $('#footer .dimmed').removeClass('on');
    $('#footer .btn_famaily').removeClass('on');
    $('body').removeClass('on');
  });

  // 푸터 : top버튼

  $(window)
    .on('scroll', function () {
      var st = $(this).scrollTop();
      if (st > 0) {
        $('#footer .top_wrap').fadeIn(800);
      } else {
        $('#footer .top_wrap').fadeOut(0);
      }
    })
    .trigger('scroll');

  $('#footer .btn_top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 800);
  });
});
