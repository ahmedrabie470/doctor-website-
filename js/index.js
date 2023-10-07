
let screen_container=document.getElementsByClassName("screen-Container2");

$( document ).ready(function() {
    $(".titleone").animate({"margin-top":"0px"},500);
    $(".desc").animate({"margin-left":"0%"},1000);
    $(".link").show(1500)
    $(".doc-mockup").animate({"left":"50%"},1000);
    
    
    
});

$("body , html").scroll(function() {
let meetDoctorTop = $(".meetDoctor").offset().top;
let afterMeetDoctor = $(".afterMeetDoctor").offset().top;
    console.log(meetDoctorTop);
console.log(afterMeetDoctor);
    
    $("body , html").animate({scrollTop: SectionTop},2000); 
     if (window.pageYOffset = meetDoctorTop && window.pageYOffset < afterMeetDoctor )
    {
    $(".section_img_img").css({"left":"auto"});
    } 
    else
    {
       $(".section_img_img").css({"left":"-100%"});
    } 
    
    
});
$(window).scroll(function(){
    let meetDoctorTop = $(".meetDoctor").offset().top-300;
    let downloadapsection  = $(".download-app-section").offset().top-300;
    let scrollTop= $(window).scrollTop();
    console.log("meetDoctorTop"+meetDoctorTop);
    console.log("scrollTop"+scrollTop);
      if(scrollTop>=meetDoctorTop)
      {
        $(".section_img_img").animate({"margin-left":"2%"},2000)
          console.log("show")
    } 
    
    
    if(scrollTop>=downloadapsection)
      {
        $("#sec_img2").css({ "margin-bottom":" 0%"})
          console.log("show")
    } 
    
    
   
});


 
$(document).ready(function (){
          $('.owl-carousel').owlCarousel({
            items:2,
            autoplay:true,
            autoPlayTimeout:1000,
            autoplaySpeed:1000,
            autoHeight:true,
            autoplayHoverPause:true,
            loop:true,
            margin:0,
            responsive:{
                480:{
                  items:2
                },
                919:{
                    items:2
                }
            }
          });
      });

