
$(".loginput").click(function(){
    
    console.log($(this).length)
    if($(this).length>=1)
        {
           $(this).css({"border":"1px solid red"});
           $(this).parent(".formInput").find(".email_span").css({"top":"-30%"});
           $(this).parent(".formInput").find(".email_icon").css({"color":"red" , "transform":"scale(1.3, 1.3)"});
           // console.log("hasvalue");
          //console.log($(this).parent(".formInput").siblings().find(".loginput").length);
            for(let i=0 ; i<5 ;i++)
                {
        if($(this).parent(".formInput").siblings(".sb"+i+"").find(".loginput").length ==1 
        && $(this).parent(".formInput").siblings(".sb"+i+"").find(".loginput").val()=='')
            {
                $(this).parent(".formInput").siblings(".sb"+i+"").find(".loginput").css({"border":"1px solid #9b9b9b"});
                
                
                $(this).parent(".formInput").siblings(".sb"+i+"").find(".loginput").css({"border":"1px solid #9b9b9b"});
                $(this).parent(".formInput").siblings(".sb"+i+"").find(".email_span").css({"top":"15%"});
                    $(this).parent(".formInput").siblings(".sb"+i+"").find(".email_icon").css({"color":"#9b9b9b" , "transform":"scale(1, 1)"});
                    console.log("empty");
            }
    else if($(this).parent(".formInput").siblings(".sb"+i+"").find(".loginput").length==1)
         {
                  $(this).parent(".formInput").siblings(".sb"+i+"").find(".loginput").css({"border":"1px solid red"});
                    $(this).parent(".formInput").siblings(".sb"+i+"").find(".email_icon").css({"color":"red" , "transform":"scale(1.3, 1.3)"});
                    console.log("hasval2");
                }
        
                }
            /*
     if($(this).parent(".formInput").siblings().find(".loginput").length==1
                && $(this).parent(".formInput").siblings().find(".loginput").val()=='')
                {
           $(this).parent(".formInput").siblings().find(".loginput").css({"border":"1px solid #9b9b9b"});
                $(this).parent(".formInput").siblings().find(".email_span").css({"top":"15%"});
                    $(this).parent(".formInput").siblings().find(".email_icon").css({"color":"#9b9b9b" , "transform":"scale(1, 1)"});
                    console.log("empty");
                }
            else if($(this).parent(".formInput").siblings().find(".loginput").length==1)
                {
                 $(this).parent(".formInput").siblings().find(".loginput").css({"border":"1px solid red"});
                    $(this).parent(".formInput").siblings().find(".email_icon").css({"color":"red" , "transform":"scale(1.3, 1.3)"});
                    console.log("hasval2");
                }
                */
            
        }
})

