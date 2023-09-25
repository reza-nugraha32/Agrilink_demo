$(document).ready(function () {
    var N = sessionStorage.getItem("N")
    var P = sessionStorage.getItem("P")
    var K = sessionStorage.getItem("K")
    var resist = sessionStorage.getItem("resist")
    var temp = sessionStorage.getItem("temp")
    var hum = sessionStorage.getItem("hum")
    console.log("N: "+N+", P: "+P+", K: "+K+", Resist: "+resist+", T: "+temp+", Hum: "+hum)

    var health = "Healthy"
    if (N >= 60 && P >= 50 && K >= 67 && resist <= 100){
        health = "Healthy"
        $(".soil_recommendation").html("This soil is healthy and suitable for crops. A frequent care is recommended to improve the quality of this soil.")
    }
    else{
        health = "Not healthy"
        $(".soil_recommendation").html("This soil is not healthy. A better dose of fertilizer and further care is recommended to improve the quality of this soil.")
    }
    
    var urea_bulk = P+N-K-resist
    urea_bulk = Number(urea_bulk).toFixed(3)

    var urea_mat = P+N-K-K/hum
    urea_mat = Number(urea_mat).toFixed(3)

    var TSP_bulk = P-N+K
    TSP_bulk = Number(TSP_bulk).toFixed(3)

    var TSP_mat = P-N/K
    TSP_mat = Number(TSP_mat).toFixed(3)

    var KCl_bulk = P-resist+temp+N/K
    KCl_bulk = Number(KCl_bulk).toFixed(3)

    var KCl_mat = P-hum+N/K
    KCl_mat = Number(KCl_mat).toFixed(3)

    $("#soil_health_val").html(health)
    $("#urea_bulk_val").html(urea_bulk)
    $("#urea_mat_val").html(urea_mat)
    $("#TSP_bulk_val").html(TSP_bulk)
    $("#TSP_mat_val").html(TSP_mat)
    $("#KCl_bulk_val").html(KCl_bulk)
    $("#KCl_mat_val").html(KCl_mat)
})