$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 5) {
          $(".nav-bar").css("background" , "#f2f3f7");
          $(".nav-bar h1").css("color" , "#000000 ");
          $(".nav-bar-icon").css("display" , "flex");

        }
  
        else{
            $(".nav-bar").css("background" , "transparent");
            $(".nav-bar h1").css("color" , "#ffffff");
            $(".nav-bar-icon").css("display" , "none");

        }
    })
  })

  // $(document).ready(function(){
  //   $(window).scroll(function(){
  //       var scroll = $(window).scrollTop();
  //       if (scroll > 400) {

  //         $(".video").css("display" , "none");
  //       }
  
  //       else{

  //           $(".video").css("display" , "block");
  //       }
  //   })
  // })


  window.ityped.init(document.querySelector('.atyped'), {
    strings: ['Breaking The Traditional Mold Of Human-Technology Interaction','Revolutionizing Input Technology, Unleashing Creativity'],
    typeSpeed: 100,
    BackSpeed: 8,
    loop: true

  })