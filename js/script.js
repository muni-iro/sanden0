$('.header_humburger').on('click', function(){
    if($(this).hasClass('humburger-toggle')){
        $(this).removeClass('humburger-toggle');
        $('body').css('overflow', 'scroll');
        $('.humburger_menu').css('opacity', '0');
        $('.humburger_menu').css('right', '-100vw');
        $('.header_humburger-frame').removeClass('close');
    } else {
        $(this).addClass('humburger-toggle');
        $('body').css('overflow', 'hidden');
        $('.humburger_menu').css('opacity', '1');
        $('.humburger_menu').css('right', '0');
        $('.header_humburger-frame').addClass('close');
    }
});
$('.nav-list_content a').on('click', function(){
  $('.header_humburger').removeClass('humburger-toggle');
  $('body').css('overflow', 'scroll');
  $('.humburger_menu').css('opacity', '0');
  $('.humburger_menu').css('right', '-100vw');
  $('.header_humburger-frame').removeClass('close');
});


/*-----
- スクロールすると header に is-fixed 
-----*/
$(function(){
  var header = $('.nav-lists'); //ヘッダーコンテンツ

  $(window).on('load scroll', function(){
    if ($(window).scrollTop() < 100) {
      //topから100px未満の位置にいるとき。
      // header.addClass('on-top');
      header.removeClass('is-fixed');
    }else {
      //topから100px以上の位置にいるとき。
      // header.removeClass('on-top');
      header.addClass('is-fixed');
    }
  });
});

/*-----
- js-spanize のクラスを付与することで、一文字一文字に対して<span></span>をつける
-----*/
// (function($) {
//     var s,
//     spanizeLetters = {
//       settings: {
//         letters: $('.js-spanize'),
//       },
//       init: function() {
//         s = this.settings;
//         this.bindEvents();
//       },
//       bindEvents: function(){
//         s.letters.html(function (i, el) {
//           // spanizeLetters.joinChars();
//           var spanizer = $.trim(el).split("");
//           return '<span>' + spanizer.join('</span><span>') + '</span>';
//         });
//       },
//     };
//     spanizeLetters.init();
//   })(jQuery);


/*-----
- サムネイルのクリックで表示を切り替える
-----*/
// $(function(){
  // $('.thumbImgF li').on('click',function(){
  //     var class_name = $(this).attr("class"); //クリックしたサムネイルのclass名を取得
  //     var num = class_name.slice(9); //class名の末尾の数字を取得
  //     $('.mainImgF li').css("display","none"); //メインの画像を全て隠す
  //     $('.mainImgF' + num).fadeIn(); //クリックしたサムネイルに対応するメイン画像を表示
  // });
// });
// $(function(){
  // $('.thumbImgD li').on('click',function(){
  //     var class_name = $(this).attr("class"); //クリックしたサムネイルのclass名を取得
  //     var num = class_name.slice(9); //class名の末尾の数字を取得
  //     $('.mainImgD li').css("display","none"); //メインの画像を全て隠す
  //     $('.mainImgD' + num).fadeIn(); //クリックしたサムネイルに対応するメイン画像を表示
  // });
// });
// $(function(){
  // $('.thumbImgA li').on('click',function(){
  //     var class_name = $(this).attr("class"); //クリックしたサムネイルのclass名を取得
  //     var num = class_name.slice(9); //class名の末尾の数字を取得
  //     $('.mainImgA li').css("display","none"); //メインの画像を全て隠す
  //     // $('.mainImgA li').hide(); //メインの画像を全て隠す
  //     $('.mainImgA' + num).fadeIn(); //クリックしたサムネイルに対応するメイン画像を表示
  //     // $('.mainImgA' + num).fadeIn().css("display","list-item"); //クリックしたサムネイルに対応するメイン画像を表示
  // });
// });


/*-----
- fadeInUpTrigger のクラス部分が画面に入ったらfadeIn というクラス名がHTMLに付与される。
-----*/
$('.fadeInUpTrigger').on('inview', function(event, isInView) {
  if (isInView) {//表示領域に入った時
    $(this).addClass('fadeInUp');//クラス名が付与
  } else {//表示領域から出た時
    $(this).removeClass('fadeInUp');//クラス名が除去
  }
});

$('.fadeInSlideTrigger').on('inview', function(event, isInView) {
  if (isInView) {//表示領域に入った時
    $(this).addClass('fadeInSlide');//クラス名が付与
    // $('.js-spanize > span').addClass('parapara');//クラス名が付与

  } else {//表示領域から出た時
    $(this).removeClass('fadeInSlide');//クラス名が除去
    $('.js-spanize > span').removeClass('parapara');//クラス名が除去
  }
});


/*-----
- スムーズスクロール部分の記述
-----*/
$(function() {
  // スクロールのオフセット値
  var offsetY = -155;
  // var offsetY = -150;
  // スクロールにかかる時間
  var time = 500;

  // ページ内リンクのみを取得
  $('a[href*="#"]').on('click',function() {
    // 移動先となる要素を取得
    var target = $(this.hash);
    if (!target.length) return ;
    // 移動先となる値
    var targetY = target.offset().top+offsetY;
    // スクロールアニメーション
    $('html,body').animate({scrollTop: targetY}, time, 'swing');
    // ハッシュ書き換えとく
    window.history.pushState(null, null, this.hash);
    // デフォルトの処理はキャンセル
    return false;
  });
});


/*-----
- slick
-----*/
// $('.works-slide').slick({
//   // autoplay:true,
//   arrows: false,
//   centerMode: true,
//   pauseOnFocus: false,
//   pauseOnHover: false,
//   slidesToShow: 1
// });

// $('.news-slide').slick({
//   // autoplay:true,
//   arrows: false,
//   centerMode: true,
//   pauseOnFocus: false,
//   pauseOnHover: false,
//   slidesToShow: 1
// });
/*-----
通常、centerModeをしていすると、両側にダミーが表示されるが、cssで

.slick-list {
  padding: 0 18% 0 0!important;
}

と指定することで右だけにダミーが表示される。
jsで centerPadding: '18%', を指定すると両側表示になってしまう？
-----*/


// ふわっと出現 js
const targetElement = document.querySelectorAll(".animationTarget");

console.log('要素の高さ', targetElement)
console.log('画面の高さ', window.innerHeight)
document.addEventListener("scroll", function(){
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .3;
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
})
// ふわっと出現 js


// ふわっと出現delay jQ
function delayScrollAnime() {
  var time = 0.2;//遅延時間を増やす秒数の値
	var value = time;
	$('.delayScroll').each(function () {
    var parent = this;					//親要素を取得
		var elemPos = $(this).offset().top;//要素の位置まで来たら
		var scroll = $(window).scrollTop();//スクロール値を取得
		var windowHeight = $(window).height();//画面の高さを取得
		var childs = $(this).children();	//子要素を取得
		
		if (scroll >= elemPos - windowHeight * .5 && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
			$(childs).each(function () {
        
        if (!$(this).hasClass("fadeUp")) {//アニメーションのクラス名が指定されているかどうかをチェック
					
					$(parent).addClass("play");	//親要素にクラス名playを追加
					$(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
					$(this).addClass("fadeUp");//アニメーションのクラス名を追加
					value = value + time;//delay時間を増加させる
					
					//全ての処理を終わったらplayを外す
					var index = $(childs).index(this);
					if((childs.length-1) == index){
            $(parent).removeClass("play");
					}
				}
			})
		}else {
      // $(childs).removeClass("fadeUp");//アニメーションのクラス名を削除
			value = time;//delay初期値の数値に戻す
		}
	})
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// // 画面が読み込まれたらすぐに動かしたい場合の記述
// 	$(window).on('load', function(){
  // 		delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
  // 	});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
  
// ふわっと出現 jQ