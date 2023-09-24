$(document).ready(function () {
    var N = localStorage.getItem("N")
    var P = localStorage.getItem("P")
    var K = localStorage.getItem("K")
    var resist = localStorage.getItem("resist")
    var temp = localStorage.getItem("temp")
    var hum = localStorage.getItem("hum")
    console.log("N: "+N+", P: "+P+", K: "+K+", Resist: "+resist+", T: "+temp+", Hum: "+hum);

    $("#soil_health_val").html(P+N*K)
    $("#urea_bulk_val").html(P+N*K-resist)
    $("#urea_mat_val").html(P+N*K-K*hum)
    $("#TSP_bulk_val").html(P-N*K)
    $("#TSP_mat_val").html(P*N/K)
    $("#KCl_bulk_val").html(P+resist-temp+N*K)
    $("#KCl_mat_val").html(P-hum+N*K)
})