$(document).ready(function () {
    $("#check_button").click(function () {
        var N = $("#N_input").val()
        var P = $("#P_input").val()
        var K = $("#K_input").val()
        var resist = $("#resist_input").val()
        var temp = $("#temp_input").val()
        var hum = $("#hum_input").val()
        console.log("N: "+N+", P: "+P+", K: "+K+", Resist: "+resist+", T: "+temp+", Hum: "+hum);
        
        localStorage.setItem("N", N)
        localStorage.setItem("P", P)
        localStorage.setItem("K", K)
        localStorage.setItem("resist", resist)
        localStorage.setItem("temp", temp)
        localStorage.setItem("hum", hum)
    });
})