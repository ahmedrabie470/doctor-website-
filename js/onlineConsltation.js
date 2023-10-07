
/* start online-consoltation*/
$(window).scroll(function(){
    let firstOne = $(".firstOne").offset().top-900;
    let secondOne = $(".firstOne").offset().top;
    let thirdOne = $(".thirdOne").offset().top-50;
    let forthOne = $(".forthOne").offset().top-200;
    console.log(firstOne)
    
    let scrollTop= $(window).scrollTop();
    console.log(scrollTop)
      if(scrollTop>=firstOne)
      {
          $(".imgDelete ").animate({"opacity":"1"},1000);
        $(".descContainer").animate({"margin-top":"0%"},1500);
        
    } 
    if(scrollTop>=secondOne)
      {
          $(".imgDelete2 ").animate({"opacity":"1"},1000);
        $(".descContainer2").animate({"margin-top":"0%"},1500);
        
    } 
    if(scrollTop>=thirdOne)
      {
          $(".imgDelete3 ").animate({"opacity":"1"},1000);
        $(".descContainer3").animate({"margin-top":"0%"},1500);
        
    } 
    if(scrollTop>=forthOne)
      {
          $(".imgDelete4 ").animate({"opacity":"1"},1000);
        $(".descContainer4").animate({"margin-top":"0%"},1500);
        
    } 
    
   
});