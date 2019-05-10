// $(".click").ready(function(){
//   // e.preventdefault();
//   $(".prev").click(function(){
//     // alert("hhh465")
//     plusSlides(n);
//   });
// });

// var slideIndex = 0;
// var slides = document.getElementsByClassName("slides");

// showSlides();

// function showSlides() {    
//   var i;    
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none"; 
//   }
//   slideIndex++;
//   if (slideIndex> slides.length) {slideIndex = 1} 
//   slides[slideIndex-1].style.display = "block"; 
//   setTimeout(showSlides, 5000); // Change image every 5 seconds
// }

// function plusSlides(n) {
//   var newslideIndex = slideIndex + n;
//   if(newslideIndex < 4 && newslideIndex > 0){
//      currentSlide(newslideIndex);
//   }
//   }

// function currentSlide(no) {
//   var i;    
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none"; 
//   }
//   slideIndex = no;
//   slides[no-1].style.display = "block";
// }


// .......................................................

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:50,
    nav:true,
  //   responsive:{
  //     '0%':{
  //       slides:1
  //     },
  //     '600%':{
  //       slides:2
  //     },
  //     '1000%':{
  //       slides:5
  //     }
  // }
  });
});

$(document).ready(function(){
  // $(".owl-carousel").owlCarousel();
  if($('div').hasClass('contact')){
    formValidation.init();
  
  }

  navBar.init();
  workFilter.init();
  numberAnimation.init();
  // slideShow.init();
});

var navBar = {
  init: function(){
    navBar.navfunction();
  },

  navfunction:function(){
    $(".ham-icon, .background").click(function(){
      $("body").toggleClass("open-nav");
      $('.ham-icon').toggleClass('active-one');
      
    });
  }
}

var numberAnimation = {
  init: function(){
    numberAnimation.number();
  },

  number:function(){
    $(".stats").waypoint(function(){
      $('.stats-h2').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
      });
      this.destroy()
    },{offset: '70%'})
  }
}

// var slides = $(this).find(".slides");
// var slideShow = {
//   init: function(){
//     slideShow.slide();
//   },

//   slide:function(n){
//     $(".next").click(function(){
  
//   var slideIndex = 0;
//   var newslideIndex = slideIndex + 1;
//   if(newslideIndex < 4 && newslideIndex > 0){
    
//     slideShow.currentSlide(newslideIndex);
//   }

//     })
//   },

//   currentSlide:function (no) {
//     var slides = $(this).find(".slides");
//     console.log(slides.val());
//       var i;    
//       for (i = 0; i < slides.length; i++) {
//         alert("hi");
//           slides[i].hide() 
//       }
//       slideIndex = no;
//       // slides[no-1].show();
//     }
// }

var workFilter = {
  init: function(){
    workFilter.work();
  },

  work: function(){

    $(".filter-button").click(function(){
      var value = $(this).attr('data-filter');

      if(value == "all")
      {
          
          $('.filter').show('1000');
          
      }
      else
      {
  
          $(".filter").not('.'+value).hide('1000').fadeTo(10, 0).fadeOut();
          $('.filter').filter('.'+value).show('1000').fadeTo(10, 1).fadeIn();
          
          
      }
      if ($(".filter-button").removeClass("active")) 
      {
        $(this).addClass("active");
      }
      else{
        $(this).removeClass("active");
      }
  
  });
  }
}


var formValidation = {
  init: function(){
    formValidation.submitForm();
    formValidation.inputCheck();
  },

  submitForm: function(){
    $(".formvalidate").submit(function(e){
      $(".rowclass").each(function(){

        var input = $(this).find("input");
        value = input.val();
        var regex = input.attr('data-patton');

        if(value.length != 0){
          input.parent().removeClass("error");
          
          if(!value.match(regex)){
            input.parent().addClass("error");
            
          }
          else{
            input.parent().removeClass("error");
          }
        }
        else{
          input.parent().addClass("error");
          
        }
      });
      e.preventDefault();
    })
  },

  inputCheck: function(){
    $('.formvalidate input').keyup(function(){
      console.log('input on key up');
      // alert("hi**")
      var _input = $(this);
      var value = _input.val();
      var regex = _input.attr('data-patton');

      if(!value.match(regex)){
        _input.parent().addClass("error");
        
      }
      else{
        _input.parent().removeClass("error");
      }
    });
  },


}













  