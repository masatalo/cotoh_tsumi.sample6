jQuery(function ($) {  //ロード時の崩れ対策
  $('body').fadeIn(500)

  // var min_width = 100;

  //画面幅による分岐と imagesLoaded, Masonry のイニシャライズを関数化
  function masonry_update() {
    ww = $(window).width();
    var cw = 90;
    if (ww < 1025) { cw = 59; }  //幅により columnWidth を変更    
    if (ww < 897) { cw = 53; }
    if (ww < 835) { cw = 50; }
    if (ww < 769) { cw = 36; }
    if (ww < 737) { cw = 33; }
    if (ww < 668) { cw = 31; }
    if (ww < 415) { cw = 33; }
    if (ww < 376) { cw = 30; }
    var $works_list = $('#container');
    $works_list.imagesLoaded(function () {
      $works_list.masonry({
        itemSelector: '.item',
        isFitWidth: true,//親要素の幅に合わせてカラム数を自動調整
        columnWidth: cw //写真のサイズ
      });
    });
  }

  masonry_update();

  //リサイズ時の処理
  var timer = false;
  $(window).resize(function () {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      masonry_update();
    }, 200);
  });
});


$(function () {
  function animation() {
    $('.item.x3').each(function () {
      //ターゲットの位置を取得
      var target = $(this).offset().top + 200 ;
      //スクロール量を取得
      var scroll = $(window).scrollTop();
      //ウィンドウの高さを取得
      var windowHeight = $(window).height();
      //ターゲットまでスクロールするとフェードインする
      if (scroll > target - windowHeight) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    });
  }
  animation();
  $(window).scroll(function () {
    animation();
  });
});


// fancybox
$(document).ready(function () {
  jQuery(function ($) {
    $(".item.x3").fancybox({
      transitionIn: 'elastic',
      speedIn: 1200,
      transitionOut: 'elastic',
      speedOut: 1250,
      cyclic: true,
      titlePosition: 'inside',
      easingIn: 'easeInOutExpo',
      easingOut: 'easeInOutExpo'
    });
  });
});