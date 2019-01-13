$(document).ready(function(){
    const menu = $('.menu');
    const nav = $('nav ul');
    const header = $('header');
    const logo = $('.logo');
    $(menu).click(function () {
        $(nav).toggleClass('active');
        $(header).toggleClass('opening');
        $(logo).toggleClass('disable');
    });


});