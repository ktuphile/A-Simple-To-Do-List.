var todoText;
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type=text]").keypress(function(event) {
    if (event.which === 13) {
        todoText = $(this).val();
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
        $(this).val("");
    }
});

$(".fa-plus").click(function() {
    $("input[type=text]").fadeToggle();
});
