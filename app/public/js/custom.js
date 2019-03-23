document.addEventListener("DOMContentLoaded", function() {
    !function(e){var t=e(window),a=(e(".carousel"),e(".nav .dropdown-toggle")),i=e("#header"),o=e(".project-images"),n=e(".our_team_member"),s=e(".member-widget-view"),l=e(".property_slide"),r=e(".testimonials-carousel"),d=(e(".service-slider"),e(".feedback_small")),c=(e(".project-thumbnail"),e(".partner-slider"),e(".testimonial-part2")),f=e("#contact-form");function u(){if(e(".sortable-masonry").length){var t=e(window),a=e(".sortable-masonry .items-container"),i=e(".sortable-masonry .filter-btns");a.isotope({filter:"*",masonry:{columnWidth:1},animationOptions:{duration:1e3,easing:"linear"}}),i.find("li").on("click",function(){var t=e(this).attr("data-filter");try{a.isotope({filter:t,animationOptions:{duration:1e3,easing:"linear",queue:!1}})}catch(e){}return!1}),t.bind("resize",function(){var e=i.find("li.active").attr("data-filter");a.isotope({filter:e,animationOptions:{duration:1e3,easing:"linear",queue:!1}})});var o=e(".sortable-masonry .filter-btns li");o.on("click",function(){var t=e(this);t.hasClass("active")||(o.removeClass("active"),t.addClass("active"))})}}$landdrop=e(".lan-drop"),$featured_side=e(".slide_featured"),e(".carousel").carousel({interval:6e3,pause:"hover"}),e("#bs-example-navbar-collapse-1").each(function(){a.on("click",function(){t.width()<992&&(e(this).parent(".dropdown").hasClass("visible")?(e(this).parent(".dropdown").children(".dropdown-menu").first().stop(!0,!0).slideUp(300),e(this).parent(".dropdown").removeClass("visible")):(e(this).parent(".dropdown").children(".dropdown-menu").stop(!0,!0).slideUp(300),e(this).parent(".dropdown").children(".dropdown-menu").stop(!0,!0).slideDown(300),e(this).parent(".dropdown").addClass("visible")))}),t.on("resize",function(){t.width()>991&&e(".dropdown").find(".dropdown-menu").removeAttr("style")})}),e(".top_right").each(function(){$landdrop.on("show.bs.lan-drop",function(t){e(this).find(".dropdown-menu").first().stop(!0,!0).slideDown(300)}),$landdrop.on("hide.bs.lan-drop",function(t){e(this).find(".dropdown-menu").first().stop(!0,!0).slideUp(200)})}),o.each(function(){e(this).on("click",".item a",function(t){t.preventDefault(),e(this).parents(".project-images").find(".item a").removeClass("onlive"),e(this).addClass("onlive"),e(this).parents(".project-images").find(".slide-project img").attr("src",e(this).attr("href"))})}),e(".main-menu li.dropdown ul").length&&(e(".main-menu li.dropdown").append('<div class="dropdown-btn"></div>'),e(".main-menu li.dropdown .dropdown-btn").on("click",function(){e(this).prev("ul").slideToggle(500)}),e(".navigation li.dropdown > a").on("click",function(e){e.preventDefault()})),e(".revolution-slider .tp-banner").length&&jQuery(".revolution-slider .tp-banner").show().revolution({delay:1e4,startwidth:1200,startheight:720,hideThumbs:600,thumbWidth:80,thumbHeight:50,thumbAmount:5,navigationType:"bullet",navigationArrows:"0",navigationStyle:"preview4",touchenabled:"on",onHoverStop:"off",swipe_velocity:.7,swipe_min_touches:1,swipe_max_touches:1,drag_block_vertical:!1,parallax:"mouse",parallaxBgFreeze:"on",parallaxLevels:[7,4,3,2,5,4,3,2,1,0],keyboardNavigation:"off",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,shadow:0,fullWidth:"on",fullScreen:"off",spinner:"spinner4",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",autoHeight:"off",forceFullWidth:"on",hideThumbsOnMobile:"on",hideNavDelayOnMobile:1500,hideBulletsOnMobile:"on",hideArrowsOnMobile:"on",hideThumbsUnderResolution:0,hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,startWithSlide:0,videoJsPath:"",fullScreenOffsetContainer:""}),n.length&&n.owlCarousel({loop:!0,margin:30,nav:!0,autoplayHoverPause:!1,smartSpeed:300,autoplay:!1,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},600:{items:2},1024:{items:3},1200:{items:4}}}),s.length&&s.owlCarousel({loop:!0,margin:30,nav:!0,autoplayHoverPause:!1,smartSpeed:300,autoplay:!1,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},600:{items:2},1024:{items:1},1200:{items:1}}}),l.length&&l.owlCarousel({loop:!0,margin:30,nav:!0,autoplayHoverPause:!1,smartSpeed:300,autoplay:!1,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},600:{items:2},1024:{items:3},1200:{items:3}}}),r.length&&r.owlCarousel({loop:!0,margin:30,nav:!0,autoplayHoverPause:!1,autoplay:!0,smartSpeed:700,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},600:{items:1},760:{items:1},1024:{items:1},1200:{items:1}}}),c.length&&c.owlCarousel({loop:!0,margin:30,nav:!0,autoplayHoverPause:!1,autoplay:!0,smartSpeed:700,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},600:{items:1},760:{items:2},1024:{items:2},1200:{items:2}}}),d.length&&d.owlCarousel({loop:!0,margin:30,nav:!0,autoplayHoverPause:!0,autoplay:!0,smartSpeed:700,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},600:{items:1},760:{items:1},1024:{items:1},1200:{items:1}}}),$featured_side.length&&$featured_side.owlCarousel({loop:!0,margin:30,nav:!0,dots:!1,smartSpeed:500,autoplayHoverPause:!0,autoplay:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},480:{items:1},600:{items:1},800:{items:1},1200:{items:1}}}),e(".according_area").length&&e(".according_title").on("click",function(){e(this).hasClass("active")?e(this).addClass("active"):(e(".according_title").removeClass("active"),e(".according_details").slideUp(300),e(this).addClass("active"),e(this).next(".according_details").slideDown(300))}),e(".photo_gallery a").length&&e(".photo_gallery a").fancybox({openEffect:"elastic",closeEffect:"elastic",helpers:{media:{}}}),u(),e(".filter-list").length&&e(".filter-list").mixItUp({}),e(".datepicker").length&&e(".datepicker").datepicker(),e(".scroll-btn").length&&e(".scroll-btn").on("click",function(t){t.preventDefault(),e(".header-lower").height();var a=e(this).attr("data-target");e("html, body").animate({scrollTop:e(a).offset().top},1e3)});var p=e(".hvr-src a"),m=e("#search");p.on("click",function(e){e.preventDefault(),m.addClass("visible"),e.stopPropagation()}),e(".src-close").on("click",function(){m.removeClass("visible")}),m.on("click",function(e){e.stopPropagation()}),t.on("click",function(e){m.removeClass("visible")}),f.length&&f.validate({rules:{name:{required:!0},telefone:{required:!0},email:{required:!0,email:!0},assunto:{required:!0},mensagem:{required:!0}},messages:{name:"Por favor, escreva seu Nome Completo.",telefone:"Por favor, escreva seu Telefone.",email:"Por favor, escreva seu Email.",assunto:"Por favor, escreva o assunto.",mensagem:"Por favor, escreva sua mensagem."},submitHandler:function(t){return e("#send").attr({disabled:"true",value:"Sending..."}),e.ajax({type:"POST",url:"email.php",data:e(t).serialize(),success:function(){e("#send").removeAttr("disabled").attr("value","Send"),e("#success").slideDown("slow"),setTimeout(function(){e("#success").slideUp("slow")},5e3),t.reset()},error:function(){e("#send").removeAttr("disabled").attr("value","Send"),e("#error").slideDown("slow"),setTimeout(function(){e("#error").slideUp("slow")},5e3)}}),!1}}),e(".wow").length&&new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0}).init(),t.on("scroll",function(){t.scrollTop()>300?e(".scroll-to-top").fadeIn(1e3):e(".scroll-to-top").fadeOut(1e3),i.length&&(t.scrollTop()>=180?i.addClass("fixed-header"):i.removeClass("fixed-header")),e(".fact-counter").length&&e(".fact-counter .achievement.animated").each(function(){var t=e(this),a=t.find(".counting").attr("data-stop"),i=parseInt(t.find(".counting").attr("data-speed"),10);t.hasClass("counted")||(t.addClass("counted"),e({countNum:t.find(".count-text").text()}).animate({countNum:a},{duration:i,easing:"linear",step:function(){t.find(".counting").text(Math.floor(this.countNum))},complete:function(){t.find(".counting").text(this.countNum)}}));var o=e(this).children(".progress-bar").attr("aria-valuenow");e(this).children(".progress-bar").css("width",o+"%")})})}(window.jQuery);

    const confirmModal = $('#confirmModal');
    $('form[data-confirm="true"]').submit(function(event){
        event.preventDefault();
        const currentForm = this;
        confirmModal.modal('show');

        $('#btn_confirm').click( () => {
            currentForm.submit();
        })
  });
});