$(document).ready(function () {
    var left_pos = $(".empty-alert").css("left");

    $("#N_input").val(sessionStorage.getItem("N"))
    $("#P_input").val(sessionStorage.getItem("P"))
    $("#K_input").val(sessionStorage.getItem("K"))
    $("#resist_input").val(sessionStorage.getItem("resist"))
    $("#temp_input").val(sessionStorage.getItem("temp"))
    $("#hum_input").val(sessionStorage.getItem("hum"))

    $(".input").keyup(function (){
        $("#check_button").attr("disabled", false)
    })

    $("#check_button").click(function () {
        if (!$.isNumeric($(".input").val())){
            alert_invalid();
            $("#check_button").attr("disabled", true);
            
            console.log("Invalid input!")
        }
        else if (!$(".input").val()){
            alert_empty();
            $("#check_button").attr("disabled", true);
            
            console.log("All input should be filled!")
        }
        else{
            $("#check_button").attr("disabled", false);

            var N = $("#N_input").val()
            var P = $("#P_input").val()
            var K = $("#K_input").val()
            var resist = $("#resist_input").val()
            var temp = $("#temp_input").val()
            var hum = $("#hum_input").val()
            console.log("N: "+N+", P: "+P+", K: "+K+", Resist: "+resist+", T: "+temp+", Hum: "+hum);

            sessionStorage.setItem("N", N)
            sessionStorage.setItem("P", P)
            sessionStorage.setItem("K", K)
            sessionStorage.setItem("resist", resist)
            sessionStorage.setItem("temp", temp)
            sessionStorage.setItem("hum", hum)
        }
    });

    function alert_empty(){
        $(".empty-alert").stop(true).css({opacity:1, left:"-500px", display:"flex"})
        $(".empty-alert").animate({left:left_pos}, 300)
        $(".empty-alert").animate({opacity:0}, 3000)
    }

    function alert_invalid(){
        $(".invalid-alert").stop(true).css({opacity:1, left:"-500px", display:"flex"})
        $(".invalid-alert").animate({left:left_pos}, 300)
        $(".invalid-alert").animate({opacity:0}, 3000)
    }
})