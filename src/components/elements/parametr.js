$(function () {

    //открытие списка 
    $(".parametr__button").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).toggleClass('parametr__button_open')
        console.log($(this).hasClass('parametr__button_open'))

    });


})