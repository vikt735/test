import './styles/index.scss';
import './js/slick.min';
import './js/jquery.min';
import 'slick-carousel';
import $ from 'jquery';
$(function(){
    $('.slider__img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider__text',
        prevArrow: '<button class="slick-btn slick-prev"><img src="assets/images/slider/left.svg" alt="left"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="assets/images/slider/right.svg" alt="right"></button>'
      });
      $('.slider__text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider__img',
        fade: true,
        arrows: false
      });
      $(".tab_item").not(":first").hide();
      $(".wrapper .tab").click(function() {
        $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
      }).eq(0).addClass("active");
});