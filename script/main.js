
$(document).ready(function(){
    $("#searchInput").on("keyup", function(){
        var value = $(this).val().toLowerCase();
        $("#coursesList .col-12").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});