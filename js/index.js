$(document).ready(function(){

$("#loding").fadeOut(2000)
$("body ,html").css("overflow","auto")


    $(".tab-ul li").click(function(){
        var id=$(this).attr("id")
    $(this).attr("class","active").siblings().removeClass("active");
    $(".daynamic-tab .container .run").fadeOut();
    $("#"+id+"-content").fadeIn(1000);
    })
    
    
    $("#username").keyup(function(){
        var rgx=/^[A-Z][a-z]{4,25}$/;
    if(rgx.test($(this).val())==false)
    {
        $(this).attr("class","form-control is-invalid")
        $(this).next().fadeIn(100);
    
    }
    else{
        $(this).next().fadeOut(100);
        $(this).attr("class","form-control is-valid")
    }
    })
    $(window).scroll(function(){
        
       
           
     var scr=$(window).scrollTop()
     $("section").each(function(){
        var scr=$(window).scrollTop()
    
        if(scr>$(this).offset().top-5)
    {
            let id=$(this).attr("id")
            let active=$("nav a[href^='#"+id+"']")
            $("nav a").removeClass("active")
            active.addClass("active")
    }
           })
    
    if(scr>100)
    {
    
        $("nav").addClass("nav-scroll")
        $("#up").fadeIn(1000)

    }
    else
    {
        $("nav").removeClass("nav-scroll")
        $("#up").fadeOut(1000)

    }
    
    })
    let link=$("a[href^='#']");
    link.click(function(){
    let href=$(this).attr("href")
    let id=$(href).offset().top;
    $("body,html").animate({scrollTop:id},2000)
    $("nav a").removeClass("active")
    $(this).addClass("active")
    })
    
    
    $("#mail").keyup(function(){
        var rgx=/^[a-zA-Z0-9]{3,}@[a-zA-Z]{3,}[.]{1}(com|in|...)$/;
    if(rgx.test($(this).val())==false)
    {
        $(this).attr("class","form-control is-invalid")
        $(this).next().fadeIn(100);
    
    }
    else{
        $(this).next().fadeOut(100);
        $(this).attr("class","form-control is-valid")
    }
    })
    
    
    
    $("#phone").keyup(function(){
        var rgx2=/^(01)[0125][0-9]{8}$/;
    if(rgx2.test($(this).val())==false)
    {
        $(this).attr("class","form-control is-invalid")
        $(this).next().fadeIn(100);
    
    }
    
    else{
        $(this).next().fadeOut(100);
        $(this).attr("class","form-control is-valid")
    }
    })

    $("#up").click(function(){
        $("body,html").animate({scrollTop:'0px'},3000)
    })
})