
$(".childContainerone").click(function(){
                                         
    $(this).find(".down").toggleClass("hide",500);
    $(this).find(".up").toggleClass("hide",500);
    $(this).find(".v-line").css({"borderLeft":'0px  solid transparent'});
   $(this).parent(".father").siblings().find(".v-line").css(
    {"borderLeft":'1px solid rgba(0,0,0,.1)'});
    $(this).parent(".father").toggleClass("BAckGrond" ,500);
    $(this).parent(".father").siblings().removeClass("BAckGrond" ,500)  ;
    $(this).siblings(".childContainerTwo").slideToggle(500);
    $(this).parent(".father").siblings().find(".childContainerTwo").slideUp(500);
    $(this).parent(".father").siblings().find(".down").removeClass("hide",500);
    $(this).parent(".father").siblings().find(".up").addClass("hide",500);
});