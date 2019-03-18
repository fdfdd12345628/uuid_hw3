function next_place(){
    var i=0;
    for(i=1;i<8;i++){
        var id = i;
        if(i==1){
            var a=$(".place_"+ id.toString());
            a.removeClass("place_"+id.toString());
            a.addClass("place_temp");
            continue;
        }

        var a=$(".place_"+ id.toString());
        a.removeClass("place_"+id.toString());
        a.addClass("place_"+(id-1).toString());
        
    }
    var a=$(".place_temp");
    a.removeClass("place_temp");
    a.addClass("place_7");
    var a=$(".place_0");
    var tar=$(".place_1");
    a[0].id = tar[0].id;
    var a=$(".menu_icon");
    a[0].id = tar[0].id;
}

function display_profile(){
    $("#profile_container").css("display", "block");

}

function close_profile(){
    $("#profile_container").css("display", "none");
}

$(document).ready(function(){
    /*$(document).scroll(function(){
        next_place();
    })*/
    $(document).on("swipe", function(){
        next_place();
    });
    $(".place_0").click(function(){
        display_profile();
    })
    $("#exit").click(function(){
        close_profile();
    })
    window.addEventListener("wheel", function(event){
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }
        next_place();
    })
    window.addEventListener("keydown", function(event){
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }

        switch(event.key){
            case "ArrowDown":
                next_place();
                break;
            case "ArrowUp":
                next_place();
                break;
            case "ArrowLeft":
                next_place();
                break;
            case "ArrowRight":
                next_place();
                break;
            case "PageDown":
                next_place();
                break;
            case "PageUp":
                next_place();
                break;
        }
    }, true);
    
})