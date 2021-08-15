$(function(){

    // GNB
    $("li.mainLi").mouseover(function(){
        $(this).children("ul.subMenu").stop().slideDown(300);
    });
    
    $("li.mainLi").mouseout(function(){
        $(this).children("ul.subMenu").stop().slideUp(800);
    });

    // Slide
    setInterval(fnSlide, 3000);

    function fnSlide() {
        $("#slide a:first-child").fadeOut(
            1000,
            function(){
                $("#slide a:first-child")
                    .insertAfter("slide a:last-child")
            }
        );

        $("#slide a:nth-child(2").fadeIn(3000);
    }

    //layerPopup
    $("tr#popPoint").click(function(){
        $("div#layerBG").css("display", "block");
    });

    $("#buttonArea > button").click(function(){
        $("div#layerBG").css("display", "none");
    });

});