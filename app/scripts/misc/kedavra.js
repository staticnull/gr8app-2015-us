/*
 *Kedavra HTML5 Multipurpose Template v1.0
 *Copyright 2014 8Guild.com
 *All scripts for Kedavra HTML5 Multipurpose Template
 */

;
jQuery(document).ready(function($) {
  'use strict';

  /*Global Variables
   *******************************************/
  /// Header / Navigation Variables------------------------------------
  var $header = $('.header');

  var $stickyHeader = $('.header.sticky');
  var $scrollHeader = $('.header.scroller');
  var $transpHeader = $('.header.transparent');
  var $cartBtn = $('.header .cart-btn');

  var $naviToggle = $('#nav-toggle');
  var $exitOffCanv = $('.exit-off-canvas');
  var $megaSubmLink = $('.mega-menu .has-submenu a');
  var $megaSubmenu = $('.mega-menu .mega-submenu');

  var $mobSubmenuToggle = $('.mobile-navi ul li span');
  var $mobButtonsToggle = $('.mobile-navi .buttons li > a');

  var $cartPromo = $('.cart-dropdown .promo-code');
  var $cartPromoInput = $('.promo-code input[type="text"]');
  var $searchBtn = $('.header .search');

  /// Hero Units Variables--------------------------------------------
  var $heroFs = $('.hero-static.fullscreen');
  var $heroFsInner = $('.hero-static.fullscreen .inner');

  /// ----------------------------------------------------------------

  /// Forms Variables-------------------------------------------------
  var $contForm = $('.contact-form');
  var $qcForm = $('.quick-contact');
  var $scrollTopBtn = $('#scrollTop-btn');
  var $qcfBtn = $('#qcf-btn');
  var $qsForm = $('.header .quick-search');
  var $loginForm = $('.login-form');
  var $signupForm = $('.signup-form');
  var $accountSetForm = $('.account-settings');
  var $mailAddressForm = $('form[name="mailing-address"]');
  var $billAddressForm = $('form[name="billing-address"]');
  var $subscrWidgetForm = $('.sidebar .subscribe form');
  var $subscrFooterForm = $('.footer .subscribe form');
  var $commentForm = $('.comment-form');
  var $bookingForm = $('form[name="booking-form"]');
  var $eventRegistr = $('form[name="event-registration"]');
  var $signInForm = $('form[name="signin-form"]');

  var $updateSubscribe = $('form[name="update-subscribe-form"]');
  /// ----------------------------------------------------------------

  ///Interactive Widgets Variables------------------------------------
  var $harmonic = $('.harmonic .item');
  var $tooltip = $('.tooltipped');
  var $percentChart = $('.percent-chart');
  var $lightGallery = $('.lightGallery');

  var $sidebarBtn = $('.sidebar-button');
  var $shareBar = $('.share-modal .bar');
  var $infoClose = $('.info-string .close');
  var $bannerClose = $('.info-block .close');
  /// ----------------------------------------------------------------

  ///////////////////////////////////////////////////////////////////////
  /////////////////////  Fullscreen Hero Image  /////////////////////////
  //////////////////////////////////////////////////////////////////////

  $(window).on('load', function(){
    $heroFs.after('<div class="holder"></div>');
    $heroFs.css('min-height', $(window).height());
    $heroFsInner.css('min-height', $(window).height());
    $('.holder').css('min-height', $(window).height());
    if($stickyHeader.length > 0) {
      $('.holder').css('min-height', $(window).height()-$stickyHeader.height());
    }
  });
  $(window).on('resize', function(){
    $heroFs.css('min-height', $(window).height());
    $heroFsInner.css('min-height', $(window).height());
    $('.holder').css('min-height', $(window).height());
    if($stickyHeader.length > 0) {
      $('.holder').css('min-height', $(window).height()-$stickyHeader.height());
    }
  });

  ///////////////////////////////////////////////////////////////////////
  ///////////////////  Header / Navigation  /////////////////////////////
  //////////////////////////////////////////////////////////////////////

  /*Sticky Header
   *******************************************/
  $(window).on('load', function(){
    $stickyHeader.waypoint('sticky');
    $scrollHeader.waypoint('sticky');
  });

  /*Transparent Header
   *******************************************/
  $(window).on('load', function(){
    if($transpHeader.length > 0) {
      var $logoAlt = $transpHeader.find('.logo > img').data('logo-alt');
      $transpHeader.find('.logo > img').attr('src', $logoAlt);
    }
  });
  $(window).on('scroll', function(){
    var $logoAlt = $transpHeader.find('.logo > img').data('logo-alt');
    var $logoDefault = $transpHeader.find('.logo > img').data('logo-default');
    if($(window).scrollTop() > $(window).height()) {
      $transpHeader.addClass('opaque');
      $transpHeader.find('.logo > img').attr('src', $logoDefault);
    } else {
      $transpHeader.removeClass('opaque');
      $transpHeader.find('.logo > img').attr('src', $logoAlt);
    }
  });


  /*Navi Toggle Animation
   *******************************************/
  $naviToggle.click(function(){
    $(this).toggleClass('active');
    $header.find('.inner').toggleClass('no-shadow');
  });
  $exitOffCanv.click(function(){
    $naviToggle.removeClass('active');
    $header.find('.inner').removeClass('no-shadow');
  });

  /*Foundation Off-Canvas / Intercharge (for responsive images)
   ***************************************************************************************/
  $(document).foundation({
    offcanvas : {
      open_method: 'move', // Sets method in which offcanvas opens, can also be 'overlap'
      close_on_click : true
    }
  });

  //Submenu Toggles
  $mobSubmenuToggle.click(function(){
    if($(this).parent().hasClass('active')) {
      $(this).siblings('ul').removeClass('open');
      $(this).parent().removeClass('active');
    } else {
      $(this).parent().siblings('li').removeClass('active');
      $(this).parent().siblings('li').find('ul').removeClass('open');
      $(this).siblings('ul').toggleClass('open');
      $(this).parent().toggleClass('active');
    }
  });

  //Mobile Langs and Currency Toggles
  $mobButtonsToggle.click(function(e){
    if($(this).parent().hasClass('active')) {
      $(this).siblings('ul').removeClass('open');
      $(this).parent().removeClass('active');
      $mobButtonsToggle.removeClass('non-active');
    } else {
      $(this).parent().siblings('li').removeClass('active');
      $(this).parent().siblings('li').find('ul').removeClass('open');
      $(this).siblings('ul').toggleClass('open');
      $mobButtonsToggle.addClass('non-active');
      $(this).parent().toggleClass('active');
    }
    return false;
  });


  /*Mega Menu
   *******************************************/
  //Submenu Switching on Hover
  $megaSubmLink.on('mouseenter', function(){
    var $target = $(this).attr('data-target');
    $(this).parent().parent().find('.has-submenu').removeClass('active');
    $(this).parent().addClass('active');
    $(this).parent().parent().parent().parent().find($megaSubmenu).removeClass('active');
    $($target).addClass('active');
  });

  ///////////////////////////////////////////////////////////////////////
  ///////////  Parallax Backgrounds / OnScroll Animations  //////////////
  //////////////////////////////////////////////////////////////////////

  $(window).on('load', function(){
    /*Content Animations On Scroll
     *********************************************/
    if($('.animation').length > 0){
      $('.animation').waypoint(function() {
        var $animation = $(this).data("animation");
        $(this).addClass($animation);
        $(this).addClass('animated');
      }, { offset: '82%' });
    }

  });
  ///////////////////////////////////////////////////////////////////////
  ///////////////////////  Custom Widgets  /////////////////////////////
  //////////////////////////////////////////////////////////////////////

  /*Harmonic Widget
   *********************************************/
  $harmonic.hover(function(){
    $harmonic.addClass('collapsed');
    $(this).removeClass('collapsed').addClass('expanded');
  }, function(){
    $harmonic.removeClass('collapsed').removeClass('expanded');
  });

  /*Share Bars Animation + Mail (Share Modal)
   *********************************************/
  $shareBar.hover(function(){
    $shareBar.addClass('collapsed');
    $(this).removeClass('collapsed').addClass('expanded');
  }, function(){
    $shareBar.removeClass('collapsed').removeClass('expanded');
  });

  /*Animated Digits Widget
   ************************************************************/
  //Function
  var countNumb = (function() {
    var that = {};
    that.init = function() {

      $(".animated-digits .digit").each(function() {
        var dataNumber = $(this).attr('data-number');

        $(this).numerator({
          easing: 'swing', // easing options.
          duration: 2500, // the length of the animation.
          delimiter: '.',
          rounding: 0, // decimal places.
          toValue: dataNumber // animate to this value.
        });
      });
    };

    return that;

  })();

  //Initialisation
  $('.digits').waypoint(function(direction) {
    countNumb.init() + 'down';
  }, {
    offset: '65%',
    triggerOnce: true
  });

  /*Countdown Widget
   ************************************************************/

  // Event Timer
  if($('#timer2').length > 0) {
    var date = $('#timer2').data('countdown-from');
    $('#timer2').countdown(date, function(event) {
      $(this).html(event.strftime('%D : %H : %M : %S'));
    });
  }

  /*Date Picker Widget
   ************************************************************/
  if($('#datePicker').length > 0) {
    $('#datePicker').datepicker().on('changeDate', function(e){
      $('#chosen_date').val(e.format('dd/mm/yyyy'));
    });
    $('.datepicker .prev').html('<i class="fa fa-angle-left"></i>');
    $('.datepicker .next').html('<i class="fa fa-angle-right"></i>');
  }

  /*Slide Up/Down Home Events
   ************************************************************/
  $('#slide-up-toggle').click(function(){
    $('.slide-up').toggleClass('open');
  });

  /*Dismissing / Closing Elements
   ************************************************************/
  //Information Strip on top of header
  $infoClose.click(function(){
    var $target = $(this).parent().parent();
    $target.fadeOut(300, function(){
      $target.remove();
      $.waypoints('refresh');
    });
  });

  //Advertising Banner
  $bannerClose.click(function(){
    var $target = $(this).parent();
    $target.fadeOut(300, function(){
      $target.remove();
    });
  });

  /*Animated Percents Chart (Skills)
   ************************************************************/
  var $barColor = $percentChart.data('bar-color');
  $percentChart.waypoint(function(direction) {
    $percentChart.easyPieChart({
      animate: 2000,
      easing: 'easeOutBounce',
      barColor: $barColor,
      trackColor: '#e1e4e6',
      scaleColor: '#797979',
      size: 190,
      lineWidth: 7,
      onStep: function(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
      }
    }) + 'down';
    //countNumb.init() + 'down';
  }, {
    offset: '85%',
    triggerOnce: true
  });

  /*Thumbnail 3D Autoheight / Shopping Cart Column Autoheight
   ***********************************************************************/
  $(window).load(function(){
    $('.thumbnail-3d .overlay').height($('.thumbnail-3d img').height()+2);
  });
  $(window).resize(function(){
    $('.thumbnail-3d .overlay').height($('.thumbnail-3d img').height()+2);
  });

  /*UI Slider
   *******************************************/
  var $minVal = parseInt($('.ui-slider').attr('data-min-val'));
  var $maxVal = parseInt($('.ui-slider').attr('data-max-val'));
  var $start = parseInt($('.ui-slider').attr('data-start'));
  var $step = parseInt($('.ui-slider').attr('data-step'));

  if($('#ui-slider').length>0){
    $('#ui-slider').noUiSlider({
      start: [$start],
      connect: "lower",
      step: $step,
      range: {
        'min': $minVal,
        'max': $maxVal
      },
      format: wNumb({
        decimals: 0,
        thousand: ' ',
        postfix: ' $'
      })
    });
    $("#ui-slider").Link('lower').to('-inline-<div class="tool-tip"></div>', function ( value ) {
      // The tooltip HTML is 'this', so additional
      // markup can be inserted here.
      $(this).html(
        '<span>' + value + '</span>'
      );
    });
  }

  /*Tooltips
   *******************************************/
  $tooltip.tooltip();

  /*Light Gallery (Lightbox)
   *******************************************/
  $lightGallery.lightGallery({caption: true});

  ///////////////////////////////////////////////////////////////////////
  /////////////////  Forms Validation and Styling  //////////////////////
  //////////////////////////////////////////////////////////////////////

  /*Quick Contact Form Validation
   *******************************************/
  $qcForm.validate();

  /*Contact Form Validation
   *******************************************/
  $contForm.validate();

  /*Login Form Validation
   *******************************************/
  $loginForm.validate();

  /*Sign Up Form Validation
   *******************************************/
  $signupForm.validate();

  /*Account Settings Form Validation
   *******************************************/
  $accountSetForm.validate();

  /*Mailing Adress Form Validation (User Account)
   ************************************************/
  $mailAddressForm.validate();

  /*Billing Adress Form Validation (User Account)
   ************************************************/
  $billAddressForm.validate();

  /*Sidebar Subscribe Widget Validation
   ************************************************/
  $subscrWidgetForm.validate();

  /*Sidebar Subscribe Widget Validation
   ************************************************/
  $subscrFooterForm.validate();

  /*Comment Form Validation
   ************************************************/
  $commentForm.validate();

  /*Sign In Form Validation (Checkout Unregistered)
   ************************************************/
  $signInForm.validate();

  /*Updates Subscription Form
   ************************************************/
  $updateSubscribe.validate();

  /*Comment Form Validation
   ************************************************/
  $bookingForm.validate({
    rules: {
      bf_phone: {
        required: true,
        number: true
      }
    }
  });

  /*Event Registration Form Validation
   ************************************************/
  $eventRegistr.validate({
    rules: {
      er_phone: {
        required: true,
        number: true
      }
    }
  });



  /*Adding Placeholder Support in Older Browsers
   ************************************************/
  $('input, textarea').placeholder();

  /*Custom Style Checkboxes and Radios
   ************************************************/
  $('input').iCheck({
    checkboxClass: 'icheckbox',
    radioClass: 'iradio'
  });



  ///////////////////////////////////////////////////////////////////////
  /////////  INTERNAL ANCHOR LINKS SCROLLING (NAVIGATION)  //////////////
  //////////////////////////////////////////////////////////////////////

  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
      $('#scroll-top').addClass('visible');
    } else {
      $('#scroll-top').removeClass('visible');
    }
  });

  //SCROLL-SPY
  // Cache selectors
  var lastId,
    topMenu = $(".scroll-menu"),
    topMenuHeight = topMenu.outerHeight(),
  // All list items
    menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

  // Bind to scroll
  $(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight+200;

    // Get id of current scroll item
    var cur = scrollItems.map(function(){
      if ($(this).offset().top < fromTop)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent().removeClass("active")
        .end().filter("[href=#"+id+"]").parent().addClass("active");
    }
  });
  ////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////
  ///////////////////  Scroll to Sidebar Button  ////////////////////////
  //////////////////////////////////////////////////////////////////////

  $sidebarBtn.click(function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop:$(this.hash).offset().top+2}, 800, 'easeOutExpo');
  });

  ///////////////////////////////////////////////////////////////////////
  ///////////////////////  Sticky Buttons  /////////////////////////////
  //////////////////////////////////////////////////////////////////////

  //Scroll to Top Button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
      $scrollTopBtn.parent().addClass('scrolled');
    } else {
      $scrollTopBtn.parent().removeClass('scrolled');
    }
  });

  //Quick Contact Form
  $qcfBtn.click(function(){
    $(this).parent().find('.quick-contact').toggleClass('visible');
  });

  //Hiding Contact Form On Clicking Out
  $('.inner-wrap').click(function(){
    $qcForm.removeClass('visible');
  });

});

/*Back Function: Manipulating the browser history
 *************************************************/
function goBack() {
  window.history.back()
}
