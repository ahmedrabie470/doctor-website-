
   


let navbar = document.getElementById("Nav1");
let navbar2 = document.getElementById("Nav2_img");
let nav2 = document.getElementById("Nav2");
   
window.addEventListener("scroll",function(){
  
    
    
    if (window.pageYOffset >= 20)
    {
    navbar.style.display="none";
    navbar2.classList.add("brandimg");
    nav2.style.backgroundColor="#eee";
    } 
    else
    {
    navbar.style.display="block";
    navbar2.classList.remove("brandimg");
    nav2.style.backgroundColor="transparent";
    } 
})
$(".stoglelist").click(function(){
    $(this).find(".plus").toggleClass("hide",500);
    $(this).find(".minus").toggleClass("hide",500);
    $(this).siblings(".asi").slideToggle(500);
    $(this).parent("li").siblings().find(".plus").removeClass("hide",500);
    $(this).parent("li").siblings().find(".minus").addClass("hide",500);
    $(this).parent("li").siblings().find(".asi").slideUp(500);
   
})
$(".bars").click(function(){
    $(".navContainLeft").animate({"left":"0%" },1000);
    $(".leftnavBackground").fadeIn(2000);
    $(".rightNva").animate({"right":"-100%"},1000);
     $(".rnav").fadeOut(1000);
})
$(".ellipsis").click(function(){
    $(".rightNva").animate({"right":"0%"},500);
    $(".navContainLeft").animate({"left":"-100%"},1000);
     $(".leftnavBackground").fadeOut(1000);
     $(".rnav").fadeIn(1000);
})

$(".leftnavBackground , .rnav").click(function(){
    $(".rightNva").animate({"right":"-100%"},1000);
    $(".navContainLeft").animate({"left":"-100%"},1000);
     $(".leftnavBackground").hide(500);
    $(".rnav").hide(500);
})