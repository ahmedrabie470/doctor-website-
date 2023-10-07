$(".minili2").click(function(){
    $(this).parent().find(".hiddenul2").slideToggle(300);
    $(this).parent().siblings().find(".hiddenul2").slideUp(300);
    if($(this).find("span").text()==180){
        $(this).find("span").text($(this).find("span").text()-180);
        $(this).parent().css({backgroundColor:'transparent'}); 
    }
    else{
        $(this).find("span").text($(this).find("span").text()+180);
        $(this).parent().css({backgroundColor:'#fff'}); 
    } 
    $(this).find(".down").css("transform", "rotateZ("+$(this).find("span").text()+"deg)");
    $(this).parent().siblings().find(".down").css("transform", "rotateZ(0deg)");
    $(this).parent().siblings().find("span").text(0);
    $(this).parent().siblings().css({backgroundColor:'transparent'})
    $(this).parent().parents(".col-lg-6").siblings().find("."+$(this).parent().find(".imgnum").text()).fadeIn()
    for(i=1;i<=3;i++)
    {
        if($(this).parent().find(".imgnum").text()!="img"+i){
            $(this).parent().parents(".col-lg-6").siblings().find(".img"+i).fadeOut()
        }
        else{
            console.log("equal");
        }
    } 
})