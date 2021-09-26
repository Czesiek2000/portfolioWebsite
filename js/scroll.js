const srollTop = document.querySelector('.scrollTop');
$(".scrollTop").on("click", function() {
    $("html").animate({scrollTop: 0}, "slow");
});